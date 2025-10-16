
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { causes } from '@/lib/data';
import { cn } from '@/lib/utils';
import { DollarSign } from 'lucide-react';

const donationSchema = z.object({
  amount: z.string().min(1, 'Please select or enter an amount.'),
  customAmount: z.string().optional(),
  cause: z.string(),
  firstName: z.string().min(1, 'First name is required.'),
  lastName: z.string().min(1, 'Last name is required.'),
  email: z.string().email('Invalid email address.'),
});

type DonationFormValues = z.infer<typeof donationSchema>;

const predefinedAmounts = ['10000', '25000', '50000', '100000'];

export function DonationForm() {
  const searchParams = useSearchParams();
  const selectedCauseId = searchParams.get('cause') || 'general';
  const { toast } = useToast();
  const [isCustom, setIsCustom] = useState(false);
  const [toastMessage, setToastMessage] = useState<{ title: string; description: string } | null>(null);


  const form = useForm<DonationFormValues>({
    resolver: zodResolver(donationSchema),
    defaultValues: {
      amount: '25000',
      customAmount: '',
      cause: selectedCauseId,
      firstName: '',
      lastName: '',
      email: '',
    },
  });

  useEffect(() => {
    form.setValue('cause', selectedCauseId);
  }, [selectedCauseId, form]);

  useEffect(() => {
    if (toastMessage) {
      toast(toastMessage);
    }
  }, [toastMessage, toast]);

  function onSubmit(data: DonationFormValues) {
    const finalAmount = data.amount === 'custom' ? data.customAmount : data.amount;
    const selectedCause = causes.find(c => c.id === data.cause);
    const causeTitle = selectedCause ? selectedCause.title : 'General Fund';
    
    setToastMessage({
      title: 'Thank you for your donation!',
      description: `Your generous gift of ₦${finalAmount} to ${causeTitle} has been processed.`,
    });
    console.log({ ...data, finalAmount });
    form.reset();
    setIsCustom(false);
  }
  
  const selectedAmount = form.watch('amount');
  useEffect(() => {
      setIsCustom(selectedAmount === 'custom');
  }, [selectedAmount]);

  return (
    <Card className="shadow-lg">
      <CardContent className="p-6 md:p-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="cause"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Donate To</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a cause" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="general">General Fund</SelectItem>
                      {causes.map(cause => (
                        <SelectItem key={cause.id} value={cause.id}>{cause.title}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Select Amount</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="grid grid-cols-2 md:grid-cols-5 gap-4"
                    >
                      {predefinedAmounts.map(amount => (
                        <FormItem key={amount} className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                             <RadioGroupItem value={amount} id={`amount-${amount}`} className="sr-only" />
                          </FormControl>
                          <FormLabel htmlFor={`amount-${amount}`} className={cn(
                              "flex items-center justify-center w-full p-4 rounded-md border-2 transition-colors cursor-pointer",
                              field.value === amount 
                                ? "bg-primary/10 border-primary text-primary" 
                                : "bg-transparent border-border hover:bg-accent"
                          )}>
                            ₦{Number(amount).toLocaleString()}
                          </FormLabel>
                        </FormItem>
                      ))}
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="custom" id="amount-custom" className="sr-only" />
                        </FormControl>
                        <FormLabel htmlFor="amount-custom" className={cn(
                              "flex items-center justify-center w-full p-4 rounded-md border-2 transition-colors cursor-pointer",
                              field.value === 'custom'
                                ? "bg-primary/10 border-primary text-primary" 
                                : "bg-transparent border-border hover:bg-accent"
                          )}>
                          Custom
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {isCustom && (
              <FormField
                control={form.control}
                name="customAmount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Custom Amount</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" aria-hidden="true">₦</span>
                        <Input type="number" placeholder="Enter amount" className="pl-10" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Aisha" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Rahman" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
            </div>
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="a.rahman@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button type="submit" className="w-full text-lg h-12 font-bold">Donate Now</Button>
          </form>
        </Form>
        <div aria-live="polite" className="sr-only">
          {toastMessage && (
            <div>
              <p>{toastMessage.title}</p>
              <p>{toastMessage.description}</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
