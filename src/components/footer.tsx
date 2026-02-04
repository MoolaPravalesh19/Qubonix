'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import { Github, Linkedin, Twitter } from 'lucide-react';

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/internship", label: "Internship" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const [year, setYear] = useState(() => new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="w-full border-t bg-secondary/50">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1">
                 <Link href="/" className="inline-block mb-4">
                    <div className="relative h-14 w-40">
                        <img src="/logo.png" alt="Qubnix Technologies Logo" className="object-contain" />
                    </div>
                 </Link>
                <p className="text-muted-foreground text-sm">Building next-generation digital solutions.</p>
            </div>
             <div className="col-span-1">
                <h3 className="font-headline font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                    {navLinks.map(link => (
                        <li key={link.href}>
                            <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
             <div className="col-span-1">
                <h3 className="font-headline font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                    <li><Link href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
                    <li><Link href="/certificate" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
                </ul>
            </div>
             <div className="col-span-1">
                <h3 className="font-headline font-semibold mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                    <Button variant="ghost" size="icon" asChild>
                        <a href="https://github.com/Qubnix" target="_blank" rel="noopener noreferrer" aria-label="Github"><Github className="h-5 w-5" /></a>
                    </Button>
                     <Button variant="ghost" size="icon" asChild>
                        <a href="#" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
                    </Button>
                     <Button variant="ghost" size="icon" asChild>
                        <a href="#" aria-label="Twitter"><Twitter className="h-5 w-5" /></a>
                    </Button>
                </div>
            </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          <p className="text-sm">Qubnix Technologies © {year}</p>
          <p className="mt-2 text-xs">
            MSME (Udyam) & NCS Registered | IT Services & Internship Provider
          </p>
        </div>
      </div>
    </footer>
  );
}
