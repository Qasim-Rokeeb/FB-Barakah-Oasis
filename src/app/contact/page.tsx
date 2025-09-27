import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { faqs } from "@/lib/data";
import { Mail, Phone, MapPin } from "lucide-react";
import DonationForm from "@/components/DonationForm"; // Re-using form for layout consistency

export default function ContactPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1>Contact Us</h1>
          <p className="text-muted-foreground">
            We'd love to hear from you. Whether you have a question, a suggestion, or just want to say hello, please get in touch.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                {/* A simple form for contact */}
                <form className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">Full Name</label>
                        <input type="text" name="name" id="name" className="block w-full rounded-md border-border shadow-sm focus:ring-primary focus:border-primary sm:text-sm h-10 px-3 bg-secondary/50" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">Email</label>
                        <input type="email" name="email" id="email" className="block w-full rounded-md border-border shadow-sm focus:ring-primary focus:border-primary sm:text-sm h-10 px-3 bg-secondary/50" />
                    </div>
                     <div>
                        <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-1">Message</label>
                        <textarea name="message" id="message" rows={4} className="block w-full rounded-md border-border shadow-sm focus:ring-primary focus:border-primary sm:text-sm p-3 bg-secondary/50"></textarea>
                    </div>
                    <button type="submit" className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary h-12">
                        Send Message
                    </button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="mt-12 space-y-6">
                <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 bg-primary/20 rounded-lg p-3">
                        <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">Phone</h3>
                        <p className="text-muted-foreground hover:text-clay transition-colors m-0"><a href="tel:+1234567890">+1 (234) 567-890</a></p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 bg-primary/20 rounded-lg p-3">
                        <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">Email</h3>
                        <p className="text-muted-foreground hover:text-clay transition-colors m-0"><a href="mailto:contact@barakahoasis.org">contact@barakahoasis.org</a></p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 bg-primary/20 rounded-lg p-3">
                        <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">Address</h3>
                        <p className="text-muted-foreground m-0">123 Hope Street, Compassion City, 10101, USA</p>
                    </div>
                </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div>
            <h2 className="text-3xl font-bold font-headline mb-6">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map(faq => (
                <AccordionItem key={faq.id} value={faq.id}>
                  <AccordionTrigger className="text-left font-bold text-lg hover:no-underline">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
