
import { Button } from '@/components/ui/button';
import { CheckCircle, Zap, Code2, Smartphone, PenTool, ShieldCheck, Cloud, LayoutGrid } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Professional IT Services | Qubnix Technologies',
  description: 'We provide end-to-end digital solutions to help businesses establish a strong online presence and streamline their operations with technology.',
};

const services = [
  {
    icon: <Code2 className="h-8 w-8 text-primary" />,
    title: 'Website Development',
    description: 'We design and develop fast, responsive, and professional websites for businesses and startups.',
    features: [
      'Business websites',
      'Portfolio websites',
      'College/Institute websites',
      'Custom features',
    ],
  },
  {
    icon: <Smartphone className="h-8 w-8 text-primary" />,
    title: 'Web Application Development',
    description: 'Custom web and mobile applications built with modern technologies.',
    features: [
      'Custom web apps',
      'Admin panels',
      'Student/employee management systems',
      'Firebase / MERN stack apps',
    ],
  },
  {
    icon: <Cloud className="h-8 w-8 text-primary" />,
    title: 'SaaS Product Development',
    description: 'End-to-end development of Software-as-a-Service products, from idea to launch.',
    features: [
        'Multi-tenant architecture',
        'Subscription & billing integration',
        'Scalable cloud infrastructure',
        'User-centric design',
    ],
  },
  {
    icon: <PenTool className="h-8 w-8 text-primary" />,
    title: 'UI/UX Design',
    description: 'Clean, user-friendly, and professional designs for a better user experience.',
    features: [
        'Website UI design',
        'App UI design',
        'Dashboard layouts',
        'Figma prototypes'
    ],
  },
  {
    icon: <LayoutGrid className="h-8 w-8 text-primary" />,
    title: 'Admin Dashboards',
    description: 'Powerful and intuitive admin panels to manage your data and operations.',
    features: [
      'Data visualization',
      'User management',
      'Reporting and analytics',
      'Content management systems (CMS)',
    ],
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: 'Maintenance & Support',
    description: 'We provide post-development support, updates, and technical assistance.',
    features: [
        'Bug fixing',
        'Performance optimization',
        'Regular updates',
        'Technical support'
    ]
  },
];

const technologies = [
    { name: 'React', icon: <svg role="img" viewBox="0 0 24 24" className="h-10 w-10" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><title>React</title><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 3.2.8 1.6 2.8 3.2 6 3.2s5.2-1.6 6-3.2c-.8-1.6-2.8-3.2-6-3.2zM12 18c-3.2 0-5.2-1.6-6-3.2.8-1.6 2.8-3.2 6-3.2s5.2 1.6 6 3.2c-.8 1.6-2.8 3.2-6 3.2zm0-10.8c-2.206 0-4 .9-4 2s1.794 2 4 2 4-.9 4-2-1.794-2-4-2zm0 8.8c-2.206 0-4 .9-4 2s1.794 2 4 2 4-.9 4-2-1.794-2-4-2z"/></svg> },
    { name: 'Node.js', icon: <svg role="img" viewBox="0 0 24 24" className="h-10 w-10" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><title>Node.js</title><path d="M12 2l-10 6v12l10 6 10-6V8l-10-6zm8.6 6.3l-8.6 5.1-8.6-5.1 8.6-5.1 8.6 5.1zM4 9.1v8.8l8 4.8v-8.8L4 9.1zm16 .1v8.8l-8 4.8v-8.8l8-4.8z"/></svg> },
    { name: 'MongoDB', icon: <svg role="img" viewBox="0 0 24 24" className="h-10 w-10" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><title>MongoDB</title><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.24 13.32c-.3.48-.75.84-1.28.96-.52.12-1.07.06-1.57-.15-.5-.21-1.04-.59-1.38-1.08-.34-.49-.5-1.04-.42-1.6.08-.56.38-1.12.82-1.54.44-.42.99-.7 1.57-.78.58-.08 1.16.08 1.66.42.5.34.88.84 1.05 1.42.17.58.11 1.2-.15 1.77z"/></svg> },
    { name: 'Firebase', icon: <svg role="img" viewBox="0 0 24 24" className="h-10 w-10" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><title>Firebase</title><path d="M4.17 21.32L14.5 1.25l1.83 3.17L6 24l-1.83-2.68zM6.67 2.5L5.5 4.42l8.17 14.17 1.16-2L6.67 2.5zM15.5 7.08l-5.67 9.83L12 21.08l5.67-9.83-2.17-4.17z"/></svg> },
    { name: 'JavaScript', icon: <svg role="img" viewBox="0 0 24 24" className="h-10 w-10" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><title>JavaScript</title><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.5 17H7.75c-.41 0-.75-.34-.75-.75V11c0-.41.34-.75.75-.75h1.75c.41 0 .75.34.75.75v5.5c0 .41-.34.75-.75.75zm6.75-4.5c0 .41-.34.75-.75.75h-1.5v2.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V11c0-.41.34-.75.75-.75h2.25c.41 0 .75.34.75.75v1.5z"/></svg> },
    { name: 'Figma', icon: <svg role="img" viewBox="0 0 24 24" className="h-10 w-10" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><title>Figma</title><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm-2 8a2 2 0 114 0 2 2 0 01-4 0zm2 4a2 2 0 100 4 2 2 0 000-4zm-2 2a2 2 0 114 0 2 2 0 01-4 0zm6-2a2 2 0 100-4 2 2 0 000 4z"/></svg> },
    { name: 'HTML5', icon: <svg role="img" viewBox="0 0 24 24" className="h-10 w-10" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><title>HTML5</title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622-13.317.002.69 8.01h9.126l-.387 4.26-2.979.81-2.932-.81-.186-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/></svg> },
    { name: 'CSS3', icon: <svg role="img" viewBox="0 0 24 24" className="h-10 w-10" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><title>CSS3</title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622-13.317.002.69 8.01h9.126l-.387 4.26-2.979.81-2.932-.81-.186-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/></svg> },
];

const whyChooseUs = [
    { title: 'Affordable Pricing', description: 'High-quality solutions that respect your budget.' },
    { title: 'On-Time Delivery', description: 'We value your time and adhere to project deadlines.' },
    { title: 'Transparent Communication', description: 'Regular updates and a collaborative development process.' },
    { title: 'Long-Term Support', description: 'Our partnership extends beyond project completion.' },
    { title: 'Proven Development Experience', description: 'Our portfolio of live projects demonstrates our expertise.' },
];

export default function ServicesPage() {
  return (
    <div>
        <section className="bg-background py-16 md:py-24">
            <div className="container mx-auto px-4 text-center">
                <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                    Our Professional IT Services
                </h1>
                <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
                    We provide end-to-end digital solutions to help businesses establish a strong online presence and streamline their operations with technology.
                </p>
            </div>
        </section>

        <section className="py-16 md:py-24 bg-secondary/30">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                    <div key={index} className="space-y-4 p-8 rounded-lg bg-background shadow-lg transition-transform hover:-translate-y-2">
                        <div className="flex items-center gap-4">
                            {service.icon}
                            <h3 className="font-headline text-2xl font-bold">{service.title}</h3>
                        </div>
                        <p className="text-muted-foreground">{service.description}</p>
                        <ul className="space-y-2 pt-2">
                        {service.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-3">
                                <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                                <span className="text-foreground/90">{feature}</span>
                            </li>
                        ))}
                        </ul>
                    </div>
                    ))}
                </div>
            </div>
        </section>

        <section className="bg-background py-16 md:py-24">
            <div className="container mx-auto px-4 text-center">
                <h2 className="font-headline text-3xl font-bold">Technologies We Use</h2>
                <div className="mt-12 flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
                    {technologies.map(tech => (
                        <div key={tech.name} className="flex flex-col items-center gap-2 text-muted-foreground transition-transform hover:scale-110 hover:text-primary">
                            {tech.icon}
                            <span className="text-sm font-semibold">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section className="bg-secondary/30 py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="font-headline text-3xl font-bold">Why Work With Qubnix</h2>
                </div>
                <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {whyChooseUs.map((item, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <Zap className="h-6 w-6" />
                            </div>
                            <div>
                                <h4 className="font-bold text-lg">{item.title}</h4>
                                <p className="text-muted-foreground mt-1">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section className="border-t bg-primary/10">
            <div className="container mx-auto px-4 py-16 text-center">
                <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Have a project in mind? Let’s discuss it.</h2>
                <div className="mt-8">
                    <Button asChild size="lg">
                        <Link href="/contact">Start Your Project</Link>
                    </Button>
                </div>
            </div>
        </section>
    </div>
  );
}
