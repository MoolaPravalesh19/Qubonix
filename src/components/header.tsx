"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { cn } from "@/lib/utils";
import { useUser as useAuthUser, useAuth } from "@/firebase";
import { signOut } from "firebase/auth";
import { Skeleton } from "./ui/skeleton";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/internship", label: "Internship" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, isUserLoading } = useAuthUser();
  const auth = useAuth();
  const router = useRouter();

  // We need to ensure the auth state is determined before rendering the buttons
  // to avoid a hydration mismatch.
  const [authReady, setAuthReady] = useState(false);
  useEffect(() => {
    if (!isUserLoading) {
      setAuthReady(true);
    }
  }, [isUserLoading]);


  const handleLogout = async () => {
    if (!auth) return;
    await signOut(auth);
    router.push('/login');
  };

  const renderNavLinks = (isMobile = false) =>
    navLinks.map((link) => (
      <Link
        key={link.href}
        href={link.href}
        className={cn(
          "font-medium transition-colors hover:text-primary",
          pathname === link.href ? "text-primary" : "text-foreground/80",
          isMobile ? "block py-2 text-lg" : ""
        )}
        onClick={() => isMobile && setIsMobileMenuOpen(false)}
      >
        {link.label}
      </Link>
    ));

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between">
        <Link href="/" className="text-2xl font-bold font-headline text-primary">
          Qubnix Technologies
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {renderNavLinks()}
        </nav>
        <div className="flex items-center gap-2">
           {!authReady ? (
            <Skeleton className="h-10 w-24" />
          ) : user ? (
            <Button onClick={handleLogout} variant="outline">Logout</Button>
          ) : (
            <Button asChild>
              <Link href="/login">Intern Login</Link>
            </Button>
          )}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0">
                <div className="flex h-full flex-col">
                    <div className="flex items-center justify-between border-b p-4">
                        <Link href="/" className="text-xl font-bold font-headline text-primary">
                           Qubnix Technologies
                        </Link>
                        <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                            <X className="h-6 w-6" />
                        </Button>
                    </div>
                  <nav className="mt-8 flex flex-col gap-4 p-4">
                    {renderNavLinks(true)}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
