"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useFirestore, addDocumentNonBlocking } from "@/firebase";
import { collection } from "firebase/firestore";

const currentYearSemOptions = [
  "1st Year / 1st Sem", "1st Year / 2nd Sem",
  "2nd Year / 3rd Sem", "2nd Year / 4th Sem",
  "3rd Year / 5th Sem", "3rd Year / 6th Sem",
  "4th Year / 7th Sem", "4th Year / 8th Sem",
  "Graduate", "Other"
];
const preferredDomainOptions = ["Web", "App", "UI/UX", "Backend"];
const durationOptions = ["1 Month", "2 Months", "3 Months"];


const formSchema = z.object({
  fullName: z.string().min(1, "Full name is required."),
  email: z.string().email("Please enter a valid email."),
  phone: z.string().min(10, "Please enter a valid phone number."),
  collegeName: z.string().min(1, "College name is required."),
  courseBranch: z.string().min(1, "Course/Branch is required."),
  currentYearSem: z.string().min(1, "Please select your current year/semester."),
  skills: z.string().min(1, "Please list your skills."),
  preferredDomain: z.string().min(1, "Please select a preferred domain."),
  duration: z.string().min(1, "Please select a duration."),
  resumeUrl: z.string().url("Please enter a valid URL for your resume."),
  whySelect: z.string().min(50, "Please tell us more (min. 50 characters)."),
});

export default function ApplyPage() {
  const router = useRouter();
  const firestore = useFirestore();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      collegeName: "",
      courseBranch: "",
      currentYearSem: "",
      skills: "",
      preferredDomain: "",
      duration: "",
      resumeUrl: "",
      whySelect: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!firestore) {
      toast({
        variant: "destructive",
        title: "Application Failed",
        description: "Database service is not available. Please try again later.",
      });
      return;
    }
    setIsLoading(true);
    try {
      const applicationsCollection = collection(firestore, "intern_applications");
      await addDocumentNonBlocking(applicationsCollection, {
        ...values,
        status: "pending",
        submittedAt: new Date(),
      });
      setIsSubmitted(true);
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Application Failed",
        description: error.message || "An unexpected error occurred. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  if (isSubmitted) {
    return (
       <div className="flex min-h-[80vh] items-center justify-center bg-background px-4 py-12">
        <Card className="mx-auto w-full max-w-md text-center">
            <CardHeader>
                <Link href="/" className="mb-6 block text-2xl font-bold font-headline text-primary">
                  Qubnix Technologies
                </Link>
                <CardTitle className="font-headline text-2xl mt-4">Application Submitted!</CardTitle>
                <CardDescription>
                Thank you for applying at Qubnix Technologies. Our team will review your application and contact you soon.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Button asChild>
                    <Link href="/">Go to Home</Link>
                </Button>
            </CardContent>
        </Card>
       </div>
    )
  }

  return (
    <div className="flex items-center justify-center bg-background px-4 py-12">
      <Card className="mx-auto w-full max-w-2xl">
        <CardHeader className="text-center">
          <Link href="/" className="mb-6 block text-2xl font-bold font-headline text-primary">
            Qubnix Technologies
          </Link>
          <CardTitle className="font-headline text-2xl">Apply for Real-World Project Internship</CardTitle>
          <CardDescription>
            Join Qubnix Technologies and work on real website and app development projects. Gain practical experience, mentorship, and an official internship certificate.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl><Input placeholder="John Doe" {...field} disabled={isLoading} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl><Input placeholder="you@example.com" {...field} disabled={isLoading} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl><Input placeholder="+91 1234567890" {...field} disabled={isLoading} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="collegeName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>College Name</FormLabel>
                    <FormControl><Input placeholder="e.g., National Institute of Technology" {...field} disabled={isLoading} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="courseBranch"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Course / Branch</FormLabel>
                    <FormControl><Input placeholder="e.g., B.Tech in Computer Science" {...field} disabled={isLoading} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="currentYearSem"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current Year/Sem</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isLoading}>
                      <FormControl><SelectTrigger><SelectValue placeholder="Select Year/Semester" /></SelectTrigger></FormControl>
                      <SelectContent>
                        {currentYearSemOptions.map(option => <SelectItem key={option} value={option}>{option}</SelectItem>)}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="preferredDomain"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preferred Domain</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isLoading}>
                      <FormControl><SelectTrigger><SelectValue placeholder="Select Domain" /></SelectTrigger></FormControl>
                      <SelectContent>
                        {preferredDomainOptions.map(option => <SelectItem key={option} value={option}>{option}</SelectItem>)}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="duration"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Duration</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isLoading}>
                      <FormControl><SelectTrigger><SelectValue placeholder="Select Duration" /></SelectTrigger></FormControl>
                      <SelectContent>
                        {durationOptions.map(option => <SelectItem key={option} value={option}>{option}</SelectItem>)}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="skills"
                render={({ field }) => (
                  <FormItem className="md:col-span-2">
                    <FormLabel>Skills</FormLabel>
                    <FormControl><Textarea placeholder="e.g., React, Node.js, Figma, Javascript" {...field} disabled={isLoading} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="resumeUrl"
                render={({ field }) => (
                  <FormItem className="md:col-span-2">
                    <FormLabel>Resume URL</FormLabel>
                     <FormControl><Input placeholder="https://linkedin.com/in/your-profile or Google Drive link" {...field} disabled={isLoading} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="whySelect"
                render={({ field }) => (
                  <FormItem className="md:col-span-2">
                    <FormLabel>Why should we select you?</FormLabel>
                    <FormControl><Textarea placeholder="Tell us about your passion for technology, your projects, and why you'd be a great fit." {...field} disabled={isLoading} rows={5} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="md:col-span-2">
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Submitting..." : "Submit Application"}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
