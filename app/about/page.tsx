import { Button } from "@/components/ui/button";
import Head from "next/head";
import { sleep } from "@/lib/utils";
import { PageWrapper } from "../pageWrapper";
export default async function About() {
  await sleep(1000)

  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Resume</h1>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Education</h2>
          <div className="flex">
            <div className="w-1/4">
              <p>2013 - 2016</p>
            </div>
            <div className="w-3/4">
              <h3 className="font-semibold">Bachelor of Computer Science</h3>
              <p>Kabul Polytechnic University</p>
            </div>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Experience</h2>
          <div className="space-y-4">
            <div className="flex">
              <div className="w-1/4">
                <p>Feb 2022 - Present</p>
              </div>
              <div className="w-3/4 mb-4">
                <h3 className="font-semibold">Full Stack Developer</h3>
                <p>Kabul - Afghanistan</p>
                <p>
              I develop and implement an inventory management system for the Government of Afghanistan using Odoo ERP. This involves designing and customizing the ERP solution to meet the specific needs of the government sector, ensuring efficient and effective inventory tracking and management.I develop and implement an inventory management system for the Government of Afghanistan using Odoo ERP. This involves designing and customizing the ERP solution to meet the specific needs of the government sector, ensuring efficient and effective inventory tracking and management.
             </p>
              </div>
            </div>
            <div className="flex">
              <div className="w-1/4">
                <p>Jan 2019 - Feb 2022</p>
              </div>
              <div className="w-3/4">
                <h3 className="font-semibold">Full Stack Developer</h3>
                <p>Kabul - Afghanistan</p>
                <p>I was responsible for designing, developing, and implementing government entities, working with image processing of Identity cards, and developing Property registration systems for government employees.</p>
              </div>
            </div>
            <div className="flex">
              <div className="w-1/4">
                <p>Jan 2018 - Dec 2018</p>
              </div>
              <div className="w-3/4">
                <h3 className="font-semibold">Web Designer  </h3>
                <p>Kabul - Afghanistan</p>
                <p>
              I was responsible to develop websites, and in a short time, I developed three websites for this company.I was responsible to develop websites, and in a short time, I developed three websites for this company.
</p>
              </div>
            </div>
            <div className="flex">
              <div className="w-1/4">
                <p>Oct 2016 - Jan 2018</p>
              </div>
              <div className="w-3/4">
                <h3 className="font-semibold">Software Developer  </h3>
                <p>Kabul - Afghanistan</p>
                <p>


                I was responsible for designing, developing, and analyzing the leave request management system and employee report management system in Parliament House.I was responsible for designing, developing, and analyzing the leave request management system and employee report management system in Parliament House.

</p>
              </div>
            </div>
            <div className="flex">
              <div className="w-1/4">
                <p>Oct 2016 - Jan 2018</p>
              </div>
              <div className="w-3/4 mt-6">
              <span className="m-1 p-1 bg-blue-200 rounded">JavaScript</span>
                <span className="m-1 p-1 bg-blue-200 rounded">React.js</span>
                <span className="m-1 p-1 bg-blue-200 rounded">Tailwind CSS</span>
                <span className="m-1 p-1 bg-blue-200 rounded">TypeScript</span>
                <span className="m-1 p-1 bg-blue-200 rounded">Redux</span>
                <span className="m-1 p-1 bg-blue-200 rounded">Strapi</span>
                <span className="m-1 p-1 bg-blue-200 rounded">PostgreSQL</span>
                <span className="m-1 p-1 bg-blue-200 rounded">MongoDB</span>
                <span className="m-1 p-1 bg-blue-200 rounded">Github</span>
              </div>
            </div>
            {/* Add more experience entries similarly */}
          </div>
        </section>

      
      </div>
    </PageWrapper>

  );

}