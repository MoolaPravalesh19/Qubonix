import type { Timestamp } from "firebase/firestore";

export interface UserProfile {
  uid: string;
  email: string;
  displayName?: string;
  role: 'intern' | 'admin';
  internship?: {
    status: 'active' | 'completed' | 'pending';
    startDate?: Timestamp;
    endDate?: Timestamp;
    certificateStatus: 'not-issued' | 'issued';
  };
  createdAt: Timestamp;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'in-progress' | 'submitted' | 'completed';
  assignedTo: string; // user uid
  assigneeEmail: string;
  createdAt: Timestamp;
  dueDate?: Timestamp;
  submittedAt?: Timestamp;
  feedback?: string;
  submissionLink?: string;
}
