import Navbar from './components/navbar';
import { promises as fs } from 'fs';
import {
  ChevronDownIcon
} from '@heroicons/react/24/solid';

export default async function Portfolio() {

  const file = await fs.readFile(process.cwd() + '/public/content.json', 'utf8');
  const content: { projects: Project[] } = JSON.parse(file);
  type Project = {
    title: string;
    image: string;
    href: string;
    description: string;
  };

  return (
    <div className='relative h-screen'>
      <div className='sm:p-20'>
      <div className='hidden md:block fixed top-0 left-0 right-0 z-20'>
        <Navbar />
      </div>

      {/* Intro */}
      <section id="home" className="h-screen flex flex-col justify-center space-y-10 w-full items-center text-center">
        <h1 className="text-3xl md:text-6xl font-bold mb-4">Hi, I am Jakob 👋🏼</h1>
        <div className="space-y-0 w-3/4">
          <p>I&apos;m Jakob, a software engineer on the Gold Coast with a passion for immersive technologies.</p>
          <p className="-mt-4">I am proficient in working in Linux and prioritize network- & cyber security.</p>
        </div>
        <div className="flex gap-5">
          <a href="mailto:Jakobossmann@gmail.com">
            <button className="flex items-center justify-center rounded-full px-4 py-2 hover:scale-105 bg-black text-white hover:bg-blue-800">
              Get in touch
            </button>
          </a>
          <a href="/CV_Jakob_Ossmann.pdf" download target="_blank" rel="noopener noreferrer">
            <button className="flex items-center justify-center rounded-full px-4 py-2 hover:scale-105 bg-gray-300 text-white hover:bg-blue-800">
              Download resume
            </button>
          </a>
        </div>
        <a href="#portfolio" className='pt-10'>
          <ChevronDownIcon className="h-16 w-16 text-black animate-bounce " />
        </a>
      </section>

      <div id="portfolio"></div>

      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-y-24 gap-x-2 '>
        {content.projects.map((project, index) => (
          <a key={index} href={project.href} target="_blank" className='border p-8 rounded-md hover:border-2 hover:border-black flex flex-col items-stretch'>
            <img
              src={project.image}
              alt={project.title}
              className='w-full h-64 object-cover rounded-md'
            />
            <h2 className='text-2xl font-bold mt-4'>{project.title}</h2>
            <p className='mt-2'>{project.description}</p>
          </a>
        ))}
      </div>
      {/* Empty bottom space */}
      <div className='p-16'></div>
    </div>
    </div>
  );
}
