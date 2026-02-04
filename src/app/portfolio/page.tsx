import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { ExternalLink, CheckCircle, Rocket, Monitor, Cloud, Layers, Shield, Server } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

export const metadata: Metadata = {
  title: 'Our Live Projects & Products | Qubnix Technologies',
  description: 'Explore our live projects, including CollegeLMS.in, a full-featured Learning Management System for educational institutions.',
};

const keyFeatures = [
    { text: "Student & Faculty Login", icon: <Shield className="h-5 w-5 text-primary" /> },
    { text: "Course & Subject Management", icon: <Layers className="h-5 w-5 text-primary" /> },
    { text: "Assignment & Study Material Upload", icon: <Monitor className="h-5 w-5 text-primary" /> },
    { text: "Attendance Management", icon: <CheckCircle className="h-5 w-5 text-primary" /> },
    { text: "Admin Dashboard", icon: <Server className="h-5 w-5 text-primary" /> },
    { text: "Secure Authentication", icon: <Shield className="h-5 w-5 text-primary" /> },
    { text: "Scalable SaaS Architecture", icon: <Cloud className="h-5 w-5 text-primary" /> },
];

const otherCapabilities = [
    { title: "LMS & Education Platforms", description: "We develop complete Learning Management Systems for schools, colleges, and training institutes." },
    { title: "SaaS Application Development", description: "Custom SaaS platforms with user roles, dashboards, and scalable architecture." },
    { title: "Full-Stack Web Applications", description: "End-to-end development from UI design to backend APIs and deployment." },
    { title: "Admin Panels & Dashboards", description: "Secure and responsive dashboards for data and system management." },
];

export default function PortfolioPage() {
    const projectImage = PlaceHolderImages.find(p => p.id === 'collegelms-dashboard');
    const portfolioImage1 = PlaceHolderImages.find(p => p.id === 'portfolio-1');
    const portfolioImage2 = PlaceHolderImages.find(p => p.id === 'portfolio-2');
    const portfolioImage3 = PlaceHolderImages.find(p => p.id === 'portfolio-3');
    const portfolioImage4 = PlaceHolderImages.find(p => p.id === 'portfolio-4');

    const demoProjects = [
      {
        title: "Business Website",
        description: "A modern responsive business website built with clean UI and fast performance.",
        tech: "HTML, CSS, JavaScript",
        image: portfolioImage1
      },
      {
        title: "Student Management Dashboard",
        description: "A dashboard system to manage students, data, and reports.",
        tech: "React, Node.js, MongoDB",
        image: portfolioImage2
      },
      {
        title: "Internship Management System",
        description: "A system where interns can log in, view tasks, and submit work.",
        tech: "Firebase, React",
        image: portfolioImage3
      },
      {
        title: "Portfolio Website Design",
        description: "A personal portfolio website with modern UI/UX.",
        tech: "Figma, HTML, CSS",
        image: portfolioImage4
      }
    ]

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-20 bg-background">
      <div className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Our Live Projects & Products
        </h1>
        <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
          We build real-world web applications, SaaS platforms, and management systems that are actively used by users and organizations.
        </p>
      </div>
      
      {/* Featured Project */}
      <Card className="overflow-hidden border-primary/20 shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8">
                <Badge variant="default" className="mb-2 text-base">⭐ Featured Project</Badge>
                <h2 className="font-headline text-3xl font-bold">CollegeLMS.in</h2>
                <p className="text-primary font-semibold">Live Web & Web App | SaaS Product</p>
                <p className="mt-4 text-muted-foreground">
                    CollegeLMS.in is a full-featured Learning Management System (LMS) designed for colleges and educational institutions. The platform helps manage students, courses, faculty, attendance, assignments, and academic workflows digitally.
                </p>

                 <h3 className="font-headline text-xl font-bold mt-6 mb-4">Key Features:</h3>
                 <ul className="space-y-3">
                    {keyFeatures.map(feature => (
                        <li key={feature.text} className="flex items-center gap-3">
                            {feature.icon}
                            <span>{feature.text}</span>
                        </li>
                    ))}
                </ul>
            </div>
             {projectImage && (
                <div className="relative min-h-[300px] lg:min-h-full">
                    <Image
                        src={projectImage.imageUrl}
                        alt="CollegeLMS.in Dashboard"
                        fill
                        className="object-cover"
                        data-ai-hint={projectImage.imageHint}
                    />
                </div>
            )}
        </div>
        <CardFooter className="bg-secondary/30 p-4 flex-wrap justify-between items-center gap-4">
            <div>
                 <h4 className="font-semibold text-sm mb-2">Technology Stack:</h4>
                 <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">React.js</Badge>
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">MongoDB / Firebase</Badge>
                    <Badge variant="secondary">Cloud Hosting</Badge>
                    <Badge variant="secondary">SaaS Architecture</Badge>
                 </div>
            </div>
            <Button asChild>
                <a href="https://collegelms.in" target="_blank" rel="noopener noreferrer">
                    View Live Website <ExternalLink className="ml-2 h-4 w-4" />
                </a>
            </Button>
        </CardFooter>
      </Card>
      
      {/* Demo Projects */}
      <section className="mt-20">
         <h2 className="font-headline text-3xl font-bold text-center mb-4">Practice & Demo Projects</h2>
         <p className="text-muted-foreground text-center mb-12 max-w-3xl mx-auto">Some projects are developed for learning and demonstration purposes to showcase our development quality and design standards.</p>
         <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
           {demoProjects.map(project => (
             <Card key={project.title}>
              {project.image && (
                <div className="relative h-60 w-full">
                  <Image src={project.image.imageUrl} alt={project.title} fill className="object-cover rounded-t-lg" />
                </div>
              )}
               <CardHeader>
                 <CardTitle>{project.title}</CardTitle>
               </CardHeader>
               <CardContent>
                 <p className="text-muted-foreground">{project.description}</p>
               </CardContent>
               <CardFooter>
                 <Badge variant="outline">Tech Used: {project.tech}</Badge>
               </CardFooter>
             </Card>
           ))}
         </div>
      </section>

      {/* Other Capabilities */}
      <section className="mt-20">
         <h2 className="font-headline text-3xl font-bold text-center mb-12">Other Development Capabilities</h2>
         <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
             {otherCapabilities.map(capability => (
                <Card key={capability.title} className="bg-secondary/30 border-0 p-6">
                    <CardHeader>
                        <CardTitle className="font-headline flex items-center gap-3">
                           <Rocket className="h-6 w-6 text-primary" /> 
                           {capability.title}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{capability.description}</p>
                    </CardContent>
                </Card>
             ))}
         </div>
      </section>

      <Separator className="my-20" />
      
       {/* Trust Line */}
       <div className="text-center max-w-3xl mx-auto">
           <h3 className="font-headline text-xl font-semibold">Our Commitment to Confidentiality</h3>
            <p className="text-muted-foreground mt-2">
                All showcased projects are developed and maintained by Qubnix Technologies. Some internal modules and client-specific features are protected under confidentiality.
            </p>
       </div>

      {/* CTA */}
      <section className="mt-20 text-center bg-primary/10 rounded-lg p-8">
        <h2 className="font-headline text-3xl font-bold">Want a similar system for your organization?</h2>
        <p className="mt-2 text-muted-foreground">Let's discuss how we can build a solution tailored to your needs.</p>
        <Button asChild size="lg" className="mt-6">
            <Link href="/contact">Request a Demo</Link>
        </Button>
      </section>
    </div>
  );
}
