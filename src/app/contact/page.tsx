import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Qubnix Technologies',
  description: 'Get in touch with Qubnix Technologies for project inquiries or internship opportunities.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-20">
      <div className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Contact Us
        </h1>
        <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
          Have a project in mind, a question about our internships, or just want to say hello? We'd love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <Card className="p-2">
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Send a Message</CardTitle>
            <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Enter your message" required rows={5} />
              </div>
              <Button type="submit" className="w-full" size="lg">Send Message</Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-8 rounded-lg bg-secondary/50 p-8">
            <h2 className="font-headline text-2xl font-bold">Contact Information</h2>
            <div className="space-y-6">
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 rounded-md bg-primary/10 p-4">
                        <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg">Email</h3>
                        <a href="mailto:info.qubnixtechnologies@gmail.com" className="text-muted-foreground hover:text-primary text-lg">
                            info.qubnixtechnologies@gmail.com
                        </a>
                        <p className="text-sm text-muted-foreground">For all inquiries</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 rounded-md bg-primary/10 p-4">
                        <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg">Phone</h3>
                        <p className="text-muted-foreground text-lg">(+91) 7797919640</p>
                        <p className="text-muted-foreground text-lg">(+91) 9475057729</p>
                         <p className="text-sm text-muted-foreground">Mon-Fri, 10am - 6pm IST</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 rounded-md bg-primary/10 p-4">
                        <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg">Location</h3>
                        <p className="text-muted-foreground text-lg">Fully Remote</p>
                         <p className="text-sm text-muted-foreground">We are a globally distributed team.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
