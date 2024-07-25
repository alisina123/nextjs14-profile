"use client";

import { useState, useEffect, useCallback, Suspense } from 'react';
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import HomePageLoading from './loading';
import { PageWrapper } from '../pageWrapper';

export default function ContactForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  // Function to check if all fields are filled
  const isFormValid = useCallback(() => {
    return firstName.trim() !== '' && 
           lastName.trim() !== '' && 
           email.trim() !== '' && 
           message.trim() !== '';
  }, [firstName, lastName, email, message]);

  // Update the button's disabled state based on form validity
  const [isButtonDisabled, setIsButtonDisabled] = useState(!isFormValid());

  useEffect(() => {
    setIsButtonDisabled(!isFormValid());
  }, [isFormValid]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/sendMail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, lastName, email, message }),
      });

      const data = await res.json();
      setLoading(false);
      setResponseMessage(data.message || 'Email sent successfully');

      // Reset form fields after successful submission
      setFirstName('');
      setLastName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      setLoading(false);
      setResponseMessage('Error sending email. Please try again later.');
      console.error('Error:', error);
    }
  };

  return (
    <PageWrapper>
      <Suspense fallback={<HomePageLoading />}>
        <section className="mb-6 mt-10">
          <Card className="mx-auto max-w-md">
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
              <CardDescription>Fill out the form below and we&apos;ll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input
                      id="first-name"
                      placeholder="Enter your first name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input
                      id="last-name"
                      placeholder="Enter your last name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    placeholder="Enter your email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    className="min-h-[120px]"
                    id="message"
                    placeholder="Enter your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>
                <Button className="w-full" type="submit" disabled={loading || isButtonDisabled}>
                  {loading ? 'Sending...' : 'Submit'}
                </Button>
                {responseMessage && (
                  <p className="mt-4 text-center">{responseMessage}</p>
                )}
              </form>
            </CardContent>
          </Card>
        </section>
      </Suspense>
    </PageWrapper>
  );
}
