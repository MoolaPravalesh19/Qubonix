import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle, Briefcase, Users, FileText, Star, Laptop, Code, BrainCircuit } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Internship Program | Qubnix Technologies',
  description: 'Join the Qubnix Technologies internship program to gain real-world project experience in React, Node, MongoDB, and UI/UX.',
};

const benefits = [
    {
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      title: 'Real Project Experience',
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: 'Mentorship from Developers',
    },
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: 'Work on In-demand Skills',
    },
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: 'Internship Certificate',
    },
    {
      icon: <Star className="h-8 w-8 text-primary" />,
      title: 'Performance-Based Recommendation',
    },
];

const programDetails = [
  {
    icon: <Laptop className="h-6 w-6 text-primary" />,
    title: "Mode",
    description: "Fully Remote / Work from Home"
  },
  {
    icon: <BrainCircuit className="h-6 w-6 text-primary" />,
    title: "Skills",
    description: "React, Node.js, Firebase, UI/UX"
  },
    {
    icon: <CheckCircle className="h-6 w-6 text-primary" />,
    title: "Duration",
    description: "1 to 3 Months"
  },
]


export default function InternshipPage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'internship-hero');
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-center text-white">
        {heroImage && <Image src={heroImage.imageUrl} alt={heroImage.description} fill className="object-cover" data-ai-hint={heroImage.imageHint} />}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 px-4">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Internship Program at Qubnix Technologies
          </h1>
          <p className="mt-6 text-lg text-gray-200 md:text-xl max-w-3xl mx-auto">
              Qubnix Technologies offers project-based internships where students work on real client and live projects.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-headline text-3xl font-bold text-center mb-12">What Interns Will Get</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center p-6 rounded-lg transition-all duration-300 hover:bg-secondary/50 hover:shadow-xl">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 mb-4">
                      {benefit.icon}
                  </div>
                  <h3 className="font-medium text-lg">{benefit.title}</h3>
              </div>
              ))}
          </div>
        </div>
      </section>
      
      {/* Details and CTA */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-12 rounded-lg bg-background p-8 shadow-lg md:grid-cols-2">
                <div>
                    <h2 className="font-headline text-3xl font-bold">Program Details</h2>
                    <ul className="mt-6 space-y-6">
                        {programDetails.map(detail => (
                           <li key={detail.title} className="flex items-start gap-4">
                              <div className="flex-shrink-0 rounded-full bg-primary/10 p-3">{detail.icon}</div>
                              <div>
                                  <h4 className="font-bold text-lg">{detail.title}</h4>
                                  <p className="text-muted-foreground">{detail.description}</p>
                              </div>
                          </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col items-center justify-center text-center rounded-lg bg-primary/10 p-8">
                    <h2 className="font-headline text-3xl font-bold">Ready to Start Building?</h2>
                    <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                        Spaces are limited. Apply today to secure your spot in our next cohort.
                    </p>
                    <Button asChild size="lg" className="mt-6">
                        <Link href="/apply">Apply for Internship</Link>
                    </Button>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
