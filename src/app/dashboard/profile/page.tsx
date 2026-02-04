"use client";

import { useUser } from "@/hooks/use-user";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DashboardSkeleton } from "@/components/dashboard-skeleton";
import { formatDate } from "@/lib/utils";

export default function ProfilePage() {
  const { user, userProfile, loading } = useUser();

  if (loading) {
    return <DashboardSkeleton />;
  }

  if (!userProfile) {
    return <div>Could not load user profile.</div>;
  }

  const getInitials = (email: string) => {
    return email.substring(0, 2).toUpperCase();
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={user?.photoURL || ''} alt={userProfile.email} />
              <AvatarFallback>{getInitials(userProfile.email)}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="font-headline text-2xl">{userProfile.displayName || 'Intern'}</CardTitle>
              <CardDescription>{userProfile.email}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          <div className="space-y-2">
            <h3 className="font-semibold">Internship Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-md border p-4">
              <div>
                <p className="text-sm text-muted-foreground">Status</p>
                <Badge variant={userProfile.internship?.status === 'active' ? 'default' : 'secondary'} className="capitalize text-md">
                  {userProfile.internship?.status || 'N/A'}
                </Badge>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Certificate</p>
                <Badge variant={userProfile.internship?.certificateStatus === 'issued' ? 'default' : 'secondary'} className="capitalize text-md">
                  {userProfile.internship?.certificateStatus || 'N/A'}
                </Badge>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Start Date</p>
                <p className="font-medium">
                  {userProfile.internship?.startDate ? formatDate(userProfile.internship.startDate.toDate()) : 'N/A'}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">End Date</p>
                <p className="font-medium">
                  {userProfile.internship?.endDate ? formatDate(userProfile.internship.endDate.toDate()) : 'N/A'}
                </p>
              </div>
            </div>
          </div>
           <div className="space-y-2">
            <h3 className="font-semibold">Account Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-md border p-4">
                <div>
                    <p className="text-sm text-muted-foreground">User ID</p>
                    <p className="font-mono text-xs text-muted-foreground">{userProfile.uid}</p>
                </div>
                 <div>
                    <p className="text-sm text-muted-foreground">Account Created</p>
                    <p className="font-medium">{formatDate(userProfile.createdAt.toDate())}</p>
                </div>
            </div>
           </div>
        </CardContent>
      </Card>
    </div>
  );
}
