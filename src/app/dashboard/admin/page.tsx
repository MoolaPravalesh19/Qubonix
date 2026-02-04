"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/hooks/use-user";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { collection, addDoc, getDocs, Timestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import type { UserProfile } from "@/lib/types";
import { DashboardSkeleton } from "@/components/dashboard-skeleton";

const taskSchema = z.object({
  title: z.string().min(1, "Title is required."),
  description: z.string().min(1, "Description is required."),
  assignedTo: z.string().min(1, "Please select an intern."),
  dueDate: z.string().optional(),
});

export default function AdminPage() {
  const { userProfile, loading } = useUser();
  const router = useRouter();
  const { toast } = useToast();
  const [interns, setInterns] = useState<UserProfile[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!loading && userProfile?.role !== "admin") {
      toast({ variant: "destructive", title: "Access Denied", description: "You do not have permission to view this page." });
      router.replace("/dashboard");
    }
  }, [userProfile, loading, router, toast]);

  useEffect(() => {
    async function fetchInterns() {
      if (userProfile?.role === "admin") {
        const querySnapshot = await getDocs(collection(db, "users"));
        const internsData: UserProfile[] = [];
        querySnapshot.forEach((doc) => {
          const user = doc.data() as UserProfile;
          if (user.role === 'intern') {
            internsData.push(user);
          }
        });
        setInterns(internsData);
      }
    }
    fetchInterns();
  }, [userProfile]);
  
  const form = useForm<z.infer<typeof taskSchema>>({
    resolver: zodResolver(taskSchema),
    defaultValues: { title: "", description: "", assignedTo: "" },
  });

  async function onSubmit(values: z.infer<typeof taskSchema>) {
    setIsSubmitting(true);
    try {
      const selectedIntern = interns.find(intern => intern.uid === values.assignedTo);
      if (!selectedIntern) throw new Error("Selected intern not found.");

      await addDoc(collection(db, "tasks"), {
        title: values.title,
        description: values.description,
        assignedTo: values.assignedTo,
        assigneeEmail: selectedIntern.email,
        status: "todo",
        createdAt: Timestamp.now(),
        dueDate: values.dueDate ? Timestamp.fromDate(new Date(values.dueDate)) : null,
      });
      toast({ title: "Task Created", description: "The new task has been assigned successfully." });
      form.reset();
    } catch (error: any) {
      toast({ variant: "destructive", title: "Error", description: error.message });
    } finally {
      setIsSubmitting(false);
    }
  }

  if (loading || !userProfile || userProfile.role !== "admin") {
    return <DashboardSkeleton />;
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Create a New Task</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Task Title</FormLabel>
                    <FormControl><Input placeholder="e.g., Design a new landing page" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Task Description</FormLabel>
                    <FormControl><Textarea placeholder="Provide detailed instructions for the task..." {...field} rows={5} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="assignedTo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Assign To</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an intern to assign the task" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {interns.map(intern => (
                          <SelectItem key={intern.uid} value={intern.uid}>{intern.email}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="dueDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Due Date (Optional)</FormLabel>
                    <FormControl><Input type="date" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isSubmitting}>{isSubmitting ? "Assigning..." : "Assign Task"}</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
