'use client'; // Ensures this is a client-side component

import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageWrapper } from '../pageWrapper';

export default function Hero() {
  return (
    <PageWrapper>
      <div className="max-w-sm mx-auto p-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Alisina Sadat</h2>
          <p className="text-lg">Full-Stack Developer</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} />
            </a>
            
          </div>
          <div className="mt-6 flex justify-center">
            <a href="/cv/alisina.pdf" download="alisina.pdf" target="_blank" rel="noopener noreferrer">
              <Button className="flex items-center space-x-2">
                <span>Download CV</span>
                <Download size={24} />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
