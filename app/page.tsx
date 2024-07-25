// 'use client'; // Ensures this is a client-side component

import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { sleep } from "@/lib/utils";
import Hero from './hero/page';
import { Suspense } from 'react';
import HeroLoading from './hero/heroLoading';

export default async function Home() {
 

  return (
     <div className='containter'>

      {/* <Suspense fallback={<HeroLoading />}>
   
      </Suspense> */}
      <Hero />
     
     

     </div>
  );
};

