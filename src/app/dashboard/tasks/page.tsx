"use client";

import { useEffect, useState } from "react";
import { useUser } from "@/hooks/use-user";
import type { Task } from "@/lib/types";
import { collection, query, where, onSnapshot, doc, updateDoc, Timestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { formatDate } from "@/lib/utils";
import { DashboardSkeleton } from "@/components/dashboard-skeleton";

export default function TasksPage() {
  const { user } = useUser();
  const { toast } = useToast();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [submissionLink, setSubmissionLink] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (user) {
      const q = query(
        collection(db, "tasks"),
        where("assignedTo", "==", user.uid)
      );
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const tasksData: Task[] = [];
        querySnapshot.forEach((doc) => {
          tasksData.push({ id: doc.id, ...doc.data() } as Task);
        });
        setTasks(tasksData.sort((a, b) => b.createdAt.toMillis() - a.createdAt.toMillis()));
        setLoading(false);
      });
      return () => unsubscribe();
    }
  }, [user]);

  const handleSubmission = async (taskId: string) => {
    if (!submissionLink) {
        toast({ variant: "destructive", title: "Error", description: "Submission link cannot be empty." });
        return;
    }
    setIsSubmitting(true);
    try {
        const taskRef = doc(db, "tasks", taskId);
        await updateDoc(taskRef, {
            status: 'submitted',
            submissionLink: submissionLink,
            submittedAt: Timestamp.now()
        });
        toast({ title: "Success", description: "Your work has been submitted." });
        setSubmissionLink("");
    } catch (error) {
        toast({ variant: "destructive", title: "Submission Failed", description: "Could not submit your work. Please try again." });
    } finally {
        setIsSubmitting(false);
    }
  };

  const getStatusVariant = (status: Task['status']) => {
    switch (status) {
      case 'todo': return 'outline';
      case 'submitted': return 'default';
      case 'completed': return 'secondary';
      default: return 'outline';
    }
  }

  if (loading) {
    return <DashboardSkeleton />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <Card key={task.id} className="flex flex-col">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle>{task.title}</CardTitle>
                <Badge variant={getStatusVariant(task.status)} className="capitalize">{task.status}</Badge>
              </div>
              <CardDescription>
                Assigned: {formatDate(task.createdAt.toDate())}
                {task.dueDate && ` | Due: ${formatDate(task.dueDate.toDate())}`}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground">{task.description}</p>
              {task.feedback && (
                <div className="mt-4 p-3 rounded-md bg-secondary">
                    <h4 className="font-semibold text-sm">Feedback</h4>
                    <p className="text-sm text-muted-foreground italic">"{task.feedback}"</p>
                </div>
              )}
            </CardContent>
            <CardFooter>
              {task.status === "todo" && (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Submit Work</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Submit: {task.title}</DialogTitle>
                      <DialogDescription>
                        Please provide the link to your work (e.g., GitHub, Figma, Google Drive).
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-2 py-4">
                        <Label htmlFor="submission-link">Submission Link</Label>
                        <Input 
                            id="submission-link" 
                            placeholder="https://github.com/your-repo"
                            value={submissionLink}
                            onChange={(e) => setSubmissionLink(e.target.value)}
                        />
                    </div>
                    <DialogFooter>
                      <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                      </DialogClose>
                      <DialogClose asChild>
                        <Button onClick={() => handleSubmission(task.id)} disabled={isSubmitting}>
                            {isSubmitting ? 'Submitting...' : 'Confirm Submission'}
                        </Button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              )}
               {task.status === "submitted" && (
                <p className="text-sm text-primary">Work submitted. Awaiting review.</p>
              )}
               {task.status === "completed" && (
                <p className="text-sm text-green-600">Task completed and approved.</p>
              )}
            </CardFooter>
          </Card>
        ))
      ) : (
        <div className="col-span-full text-center py-16">
          <h2 className="text-2xl font-semibold">No Tasks Found</h2>
          <p className="text-muted-foreground mt-2">You have not been assigned any tasks yet. Check back later!</p>
        </div>
      )}
    </div>
  );
}
