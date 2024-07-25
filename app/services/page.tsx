import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Suspense } from 'react';
import { sleep } from "@/lib/utils";
import { PageWrapper } from "../pageWrapper";

export default async function Service() {
  await sleep(1000)
  return (
    <PageWrapper>
      <Suspense fallback={<p>Loading </p>}>
        <section className="w-full py-6 md:py-10 lg:py-15 items-center justify-center ">
          <div className="container grid items-center justify-center gap-6 px-4 md:px-6">
            <h1 className="text-center font-bold">Pricing</h1>
            <div className="grid w-full max-w-4xl grid-cols-1 gap-12 md:grid-cols-2">
            <Card className="flex flex-col rounded-lg border border-gray-200 dark:border-gray-800 w-full max-w-lg mx-auto p-6">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-center">STANDARD</CardTitle>
                  <CardDescription className="text-center"></CardDescription>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col justify-between">
                  <div className="space-y-4">
                    <div className="text-4xl text-center font-bold">$90</div>
                    <div className="text-sm text-gray-500 text-center dark:text-gray-400">per month</div>
                   
                  </div>
                  <p className="mt-4 text-center">For Simple Application</p>
                  <Button className="mt-auto mt-4">Get Started</Button>
                </CardContent>
              </Card>
              <Card className="flex flex-col rounded-lg border border-gray-200 dark:border-gray-800 w-full max-w-lg mx-auto p-6">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-center">PREMIUM</CardTitle>
                  <CardDescription> </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col justify-between">
                  <div className="space-y-4">
                    <div className="text-4xl font-bold text-center">$200</div>
                    <div className="text-sm text-gray-500 text-center dark:text-gray-400">per month</div>
                  </div>
                  <p className="mt-4 text-center">For complex Application</p>
                  <Button className="mt-auto">Get Started</Button>
                </CardContent>
              </Card>
          
            </div>
        
          </div>

        </section>
      </Suspense>

    </PageWrapper>

  );
}

