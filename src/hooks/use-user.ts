"use client";
import { useUser as useAuthUser, useFirestore } from '@/firebase';
import type { UserProfile } from '@/lib/types';
import { doc, onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';

export function useUser() {
  const { user: authUser, isUserLoading: authLoading } = useAuthUser();
  const firestore = useFirestore();
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (authLoading || !firestore) {
        setLoading(true);
        return;
    }

    if (authUser) {
      const unsub = onSnapshot(doc(firestore, "users", authUser.uid), (doc) => {
        if (doc.exists()) {
          setUserProfile(doc.data() as UserProfile);
        } else {
          setUserProfile(null);
        }
        setLoading(false);
      });
      return () => unsub();
    } else {
      setUserProfile(null);
      setLoading(false);
    }
  }, [authUser, authLoading, firestore]);

  return { user: authUser, userProfile, loading };
}
