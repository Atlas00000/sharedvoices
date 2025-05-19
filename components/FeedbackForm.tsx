import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import logger from '@/lib/logger';

const feedbackSchema = z.object({
  feedback: z.string().min(10, 'Feedback must be at least 10 characters'),
  type: z.enum(['bug', 'feature', 'improvement', 'other']),
  email: z.string().email().optional(),
});

type FeedbackFormData = z.infer<typeof feedbackSchema>;

export function FeedbackForm() {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  const form = useForm<FeedbackFormData>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      feedback: '',
      type: 'improvement',
      email: '',
    },
  });

  const onSubmit = async (data: FeedbackFormData) => {
    try {
      // Log feedback
      logger.info('User feedback received:', data);
      
      // Here you would typically send the feedback to your backend
      // await fetch('/api/feedback', { method: 'POST', body: JSON.stringify(data) });
      
      toast({
        title: 'Thank you for your feedback!',
        description: 'We appreciate your input to help improve our platform.',
      });
      
      setIsOpen(false);
      form.reset();
    } catch (error) {
      logger.error('Error submitting feedback:', error);
      toast({
        title: 'Error',
        description: 'Failed to submit feedback. Please try again.',
        variant: 'destructive',
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" aria-label="Provide feedback">
          Feedback
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Share Your Feedback</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Feedback Type</FormLabel>
                  <FormControl>
                    <select
                      {...field}
                      className="w-full p-2 border rounded-md"
                      aria-label="Select feedback type"
                    >
                      <option value="bug">Bug Report</option>
                      <option value="feature">Feature Request</option>
                      <option value="improvement">Improvement</option>
                      <option value="other">Other</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="feedback"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Feedback</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Share your thoughts..."
                      className="min-h-[100px]"
                      aria-label="Feedback text"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email (optional)</FormLabel>
                  <FormControl>
                    <input
                      {...field}
                      type="email"
                      placeholder="your@email.com"
                      className="w-full p-2 border rounded-md"
                      aria-label="Email address"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Submit Feedback
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
} 