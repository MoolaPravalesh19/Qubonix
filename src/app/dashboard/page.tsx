"use client";

import { useUser } from "@/hooks/use-user";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ListTodo, CheckCircle, Hourglass, Award } from "lucide-react";
import { DashboardSkeleton } from "@/components/dashboard-skeleton";
import { useEffect, useState } from "react";
import type { Task } from "@/lib/types";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  const { user, userProfile, loading } = useUser();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [tasksLoading, setTasksLoading] = useState(true);

  useEffect(() => {
    if (user) {
      const q = query(collection(db, "tasks"), where("assignedTo", "==", user.uid));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const tasksData: Task[] = [];
        querySnapshot.forEach((doc) => {
          tasksData.push({ id: doc.id, ...doc.data() } as Task);
        });
        setTasks(tasksData);
        setTasksLoading(false);
      });
      return () => unsubscribe();
    }
  }, [user]);

  if (loading || tasksLoading) {
    return <DashboardSkeleton />;
  }

  const tasksTodo = tasks.filter(t => t.status === 'todo').length;
  const tasksCompleted = tasks.filter(t => t.status === 'completed').length;

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="font-headline text-3xl font-bold">Welcome to your Internship Dashboard</h1>
        <p className="text-muted-foreground">Here you can view assigned tasks, submit project work, track your internship progress, and check your certificate status.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Tasks</CardTitle>
            <ListTodo className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{tasks.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tasks To Do</CardTitle>
            <Hourglass className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{tasksTodo}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tasks Completed</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{tasksCompleted}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Internship Status</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <Badge variant={userProfile?.internship?.status === 'active' ? 'default' : 'secondary'} className="capitalize text-lg">
                {userProfile?.internship?.status || 'N/A'}
            </Badge>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
            <CardTitle>Recent Tasks</CardTitle>
        </CardHeader>
        <CardContent>
            {tasks.length > 0 ? (
                <ul className="space-y-3">
                    {tasks.slice(0, 5).map(task => (
                        <li key={task.id} className="flex items-center justify-between rounded-md border p-3">
                            <p className="font-medium">{task.title}</p>
                            <Badge variant={task.status === 'completed' ? 'secondary' : 'outline'} className="capitalize">{task.status}</Badge>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-muted-foreground text-center py-8">No tasks assigned yet.</p>
            )}
             <div className="mt-6 text-center">
                <Button asChild>
                    <Link href="/dashboard/tasks">View All Tasks</Link>
                </Button>
            </div>
        </CardContent>
      </Card>
    </div>
  );
}
