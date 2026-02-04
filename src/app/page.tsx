import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Code2, Smartphone, PenTool, Blocks, ShieldCheck, Rocket, GraduationCap, CircleCheck, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    icon: <Code2 className="h-10 w-10 text-primary" />,
    title: 'Website Design & Development',
  },
  {
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    title: 'Mobile & Web App Development',
  },
  {
    icon: <PenTool className="h-10 w-10 text-primary" />,
    title: 'UI/UX & Product Design',
  },
  {
    icon: <Blocks className="h-10 w-10 text-primary" />,
    title: 'Custom Software Solutions',
  },
   {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: 'Maintenance & Technical Support',
  },
];

const whyChooseUs = [
    'Affordable Pricing – Quality work within budget',
    'Modern Technology Stack – React, Node, MongoDB, Firebase',
    'On-time Delivery – We value deadlines',
    'Transparent Communication – Regular project updates',
    'Long-term Support – Post-delivery assistance'
];


export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-home');
  const portfolioImage1 = PlaceHolderImages.find(p => p.id === 'portfolio-1');
  const portfolioImage2 = PlaceHolderImages.find(p => p.id === 'portfolio-2');
  const flagshipProductImage = PlaceHolderImages.find(p => p.id === 'collegelms-dashboard');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex h-[90vh] min-h-[700px] w-full items-center justify-center bg-background text-center">
        {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover"
              style={{ objectPosition: 'center 70%' }}
              priority
              data-ai-hint={heroImage.imageHint}
            />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-white">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            We Build Powerful Websites & Apps That Grow Your Business
          </h1>
          <p className="mt-6 text-lg text-gray-200 md:text-xl">
            Qubnix Technologies delivers modern, scalable, and high-performance digital solutions for startups, businesses, and organizations. From idea to deployment — we handle everything.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg transition-transform hover:scale-105">
              <Link href="/contact"><Rocket className="mr-2 h-5 w-5" /> Start Your Project</Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="shadow-lg transition-transform hover:scale-105">
              <Link href="/apply"><GraduationCap className="mr-2 h-5 w-5" /> Apply for Internship</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-secondary py-6">
        <div className="container mx-auto px-4 text-center text-secondary-foreground">
            <p className="font-semibold tracking-wide">Trusted Technology Partner For: Startups • Local Businesses • Educational Institutes • Entrepreneurs</p>
            <p className="text-sm mt-2 opacity-80">Registered under MSME (Udyam) & National Career Service (Govt. of India)</p>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="services" className="w-full py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Core Expertise</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {services.map((service) => (
              <div key={service.title} className="flex flex-col items-center text-center p-6 rounded-xl transition-all duration-300 hover:bg-secondary/50 hover:shadow-lg">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 mb-4">
                    {service.icon}
                </div>
                <h3 className="font-headline text-xl font-bold">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="w-full bg-secondary py-16 md:py-24 lg:py-32">
        <div className="container mx-auto grid items-center gap-12 px-4 md:grid-cols-2 md:px-6">
            <div>
                 <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
                    Why Clients Choose Qubnix
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">We're more than just developers; we're your technology partners committed to your success.</p>
                <ul className="mt-8 space-y-6">
                    {whyChooseUs.map((point) => (
                        <li key={point} className="flex items-start">
                            <CircleCheck className="mr-4 mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                            <span className="text-lg text-muted-foreground">{point}</span>
                        </li>
                    ))}
                </ul>
            </div>
            {portfolioImage1 && (
                <div className="relative h-[400px] w-full">
                    <Image 
                        src={portfolioImage1.imageUrl}
                        alt="Abstract design representing modern technology"
                        fill
                        className="rounded-xl shadow-lg object-cover"
                        data-ai-hint="abstract technology"
                    />
                </div>
            )}
        </div>
      </section>

       {/* Flagship Product Section */}
      <section className="w-full py-16 md:py-24 lg:py-32">
        <div className="container mx-auto grid items-center gap-12 px-4 md:grid-cols-2 md:px-6">
          {flagshipProductImage && (
            <div className="relative h-[400px] w-full">
                <Image
                src={flagshipProductImage.imageUrl}
                alt="CollegeLMS.in Dashboard"
                fill
                className="rounded-xl shadow-lg object-cover"
                data-ai-hint={flagshipProductImage.imageHint}
                />
            </div>
          )}
          <div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
              🚀 Our Flagship Product
            </h2>
            <h3 className="mt-2 text-2xl font-semibold text-primary">
              CollegeLMS.in – Smart Learning Management System
            </h3>
            <p className="mt-4 text-muted-foreground md:text-xl">
              A live SaaS-based LMS platform built by Qubnix Technologies to
              digitize academic operations for colleges and institutes.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-3 font-medium text-lg"><CircleCheck className="h-5 w-5 text-green-500" /> Live Web Application</li>
              <li className="flex items-center gap-3 font-medium text-lg"><CircleCheck className="h-5 w-5 text-green-500" /> SaaS Architecture</li>
              <li className="flex items-center gap-3 font-medium text-lg"><CircleCheck className="h-5 w-5 text-green-500" /> Secure & Scalable</li>
              <li className="flex items-center gap-3 font-medium text-lg"><CircleCheck className="h-5 w-5 text-green-500" /> Built & Maintained In-house</li>
            </ul>
            <div className="mt-8">
              <Button asChild size="lg">
                <a href="https://collegelms.in" target="_blank" rel="noopener noreferrer">
                  View Live Project <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Internship Model Section */}
      <section className="w-full bg-secondary py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 text-center">
             <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
                We Build Projects With a Growing Developer Community
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-xl">
                At Qubnix Technologies, projects are developed with the support of trained interns under expert supervision. This allows us to deliver quality solutions while creating real industry exposure for students.
            </p>
            <div className="mt-8 flex justify-center gap-8 font-semibold text-lg">
                <div className="flex items-center gap-2"><CircleCheck className="h-6 w-6 text-primary" /> Real Projects</div>
                <div className="flex items-center gap-2"><CircleCheck className="h-6 w-6 text-primary" /> Real Learning</div>
                <div className="flex items-center gap-2"><CircleCheck className="h-6 w-6 text-primary" /> Real Results</div>
            </div>
        </div>
      </section>

       {/* Portfolio Preview */}
      <section className="w-full py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Some of Our Work</h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
              Modern websites, dashboards, and applications built for learning and clients.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {portfolioImage1 && (
                <div className="relative h-[400px] w-full">
                    <Image 
                        src={portfolioImage1.imageUrl}
                        alt="Portfolio item 1"
                        fill
                        className="rounded-xl shadow-lg w-full h-auto object-cover"
                        data-ai-hint="website dashboard"
                    />
                 </div>
            )}
             {portfolioImage2 && (
                <div className="relative h-[400px] w-full">
                    <Image 
                        src={portfolioImage2.imageUrl}
                        alt="Portfolio item 2"
                        fill
                        className="rounded-xl shadow-lg w-full h-auto object-cover"
                        data-ai-hint="mobile app"
                    />
                 </div>
            )}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg">
                <Link href="/portfolio">View Portfolio <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="w-full bg-primary/10 py-16 md:py-28">
        <div className="container mx-auto text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">Have a project idea? Let’s turn it into reality.</h2>
            <div className="mt-6">
                <Button asChild size="lg">
                    <Link href="/contact">Discuss Your Project</Link>
                </Button>
            </div>
        </div>
      </section>

    </div>
  );
}
