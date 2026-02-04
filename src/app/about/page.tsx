
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Target, Eye, Zap, Users, GraduationCap, Briefcase, BadgeCheck, HeartHandshake, BrainCircuit, Sparkles, Shield, Building, Store, School, User } from 'lucide-react';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us | Qubnix Technologies',
  description: 'Learn about Qubnix Technologies, our mission, vision, and the values that drive us to deliver exceptional IT solutions.',
};

const developmentProcess = [
  { step: "01", title: "Requirement Analysis", description: "We start by understanding your goals, target audience, and project requirements in detail." },
  { step: "02", title: "UI/UX Design", description: "We create wireframes and high-fidelity mockups to design a user-friendly and visually appealing interface." },
  { step: "03", title: "Development Phase", description: "Our developers bring the designs to life using modern technologies and best coding practices." },
  { step: "04", title: "Testing & Review", description: "We conduct rigorous testing to ensure the system is bug-free, performant, and meets all requirements." },
  { step: "05", title: "Deployment", description: "We deploy the application to a scalable cloud server and make it live for your users." },
  { step: "06", title: "Support & Maintenance", description: "We provide ongoing support and maintenance to ensure your system runs smoothly." },
];

export default function AboutUsPage() {
  const teamImage = PlaceHolderImages.find(p => p.id === 'about-us-team');

  const differentiators = [
    { icon: <Zap className="h-6 w-6 text-primary" />, text: "We focus on practical and result-driven development" },
    { icon: <Users className="h-6 w-6 text-primary" />, text: "We maintain transparent communication with clients" },
    { icon: <GraduationCap className="h-6 w-6 text-primary" />, text: "We combine development with learning through internships" },
    { icon: <Briefcase className="h-6 w-6 text-primary" />, text: "We ensure every project is handled professionally" },
  ];

  const values = [
    { icon: <BadgeCheck className="h-8 w-8 text-primary" />, title: "Quality First" },
    { icon: <HeartHandshake className="h-8 w-8 text-primary" />, title: "Client Satisfaction" },
    { icon: <BrainCircuit className="h-8 w-8 text-primary" />, title: "Continuous Learning" },
    { icon: <Sparkles className="h-8 w-8 text-primary" />, title: "Innovation" },
    { icon: <Shield className="h-8 w-8 text-primary" />, title: "Professional Ethics" },
  ];

  const partners = [
    { icon: <Building className="h-8 w-8 text-muted-foreground" />, name: "Startups" },
    { icon: <Store className="h-8 w-8 text-muted-foreground" />, name: "Small businesses" },
    { icon: <School className="h-8 w-8 text-muted-foreground" />, name: "Educational institutes" },
    { icon: <User className="h-8 w-8 text-muted-foreground" />, name: "Entrepreneurs" },
  ];


  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            About Qubnix Technologies
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
            Qubnix Technologies is an IT services company specializing in website development, web applications, SaaS platforms, and UI/UX design. We build scalable and reliable digital solutions for startups, businesses, and educational institutions.
          </p>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                <div className="flex flex-col items-center text-center p-8 rounded-lg bg-secondary/30">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                        <Target className="h-10 w-10 text-primary" />
                    </div>
                    <h2 className="font-headline text-3xl font-bold">Our Mission</h2>
                    <p className="text-lg text-muted-foreground max-w-md mx-auto mt-4">
                        To provide affordable and innovative technology solutions while maintaining quality, transparency, and long-term client relationships.
                    </p>
                </div>
                <div className="flex flex-col items-center text-center p-8 rounded-lg bg-secondary/30">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                        <Eye className="h-10 w-10 text-primary" />
                    </div>
                    <h2 className="font-headline text-3xl font-bold">Our Vision</h2>
                    <p className="text-lg text-muted-foreground max-w-md mx-auto mt-4">
                        To become a trusted IT solutions provider and a platform where students gain real industry experience through project-based internships.
                    </p>
                </div>
            </div>
        </div>
      </section>
      
      {/* What Makes Us Different */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto grid items-center gap-12 px-4 md:grid-cols-2 md:px-6">
            <div>
                 <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
                    What Makes Us Different
                </h2>
                <ul className="mt-6 space-y-6">
                    {differentiators.map((item) => (
                        <li key={item.text} className="flex items-start gap-4">
                           <div className="flex-shrink-0 rounded-full bg-primary/10 p-3"> {item.icon}</div>
                            <span className="text-lg text-muted-foreground pt-2">{item.text}</span>
                        </li>
                    ))}
                </ul>
            </div>
            {teamImage && (
                <div className="relative w-full h-96">
                    <Image 
                        src={teamImage.imageUrl}
                        alt={teamImage.description}
                        fill
                        className="rounded-xl shadow-lg object-cover"
                        data-ai-hint={teamImage.imageHint}
                    />
                </div>
            )}
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
                    Our Development Process
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
                    We follow a structured and agile process to deliver high-quality products efficiently.
                </p>
            </div>
            <div className="relative">
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-border"></div>
                {developmentProcess.map((item, index) => (
                    <div key={item.step} className={`flex items-center w-full mb-8 md:mb-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        <div className="hidden md:flex w-1/2"></div>
                        <div className="hidden md:flex justify-center w-12">
                            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold z-10">{item.step}</div>
                        </div>
                        <div className="w-full md:w-1/2 bg-secondary/30 p-6 rounded-lg shadow-md">
                            <h3 className="font-headline text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-muted-foreground">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
      
       {/* Our Values Section */}
      <section id="values" className="w-full bg-secondary/30 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {values.map((service) => (
              <div key={service.title} className="text-center p-4 rounded-lg transition-shadow hover:shadow-lg">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                    {service.icon}
                </div>
                <h3 className="font-headline text-xl font-bold mt-4">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Who we work with */}
       <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 text-center">
                <h2 className="font-headline text-3xl font-bold">Who We Work With</h2>
                <div className="mt-12 flex flex-wrap justify-center items-center gap-x-16 gap-y-8">
                    {partners.map(tech => (
                        <div key={tech.name} className="flex flex-col items-center gap-2 transition-transform hover:scale-110 text-muted-foreground hover:text-primary">
                            {tech.icon}
                            <span className="font-semibold">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
      
      {/* CTA Section */}
      <section className="w-full bg-primary/10 py-16 md:py-24">
        <div className="container mx-auto text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Let’s build something great together.</h2>
            <div className="mt-6">
                <Button asChild size="lg">
                    <Link href="/contact">Contact Us</Link>
                </Button>
            </div>
        </div>
      </section>
    </div>
  );
}
