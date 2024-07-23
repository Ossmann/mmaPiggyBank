import Navbar from './components/navbar';
import { promises as fs } from 'fs';
import {
  ChevronDownIcon
} from '@heroicons/react/24/solid';

export default async function Portfolio() {

  const file = await fs.readFile(process.cwd() + '/public/content.json', 'utf8');
  const content = JSON.parse(file);

  return (
    <div className='relative h-screen'>
      <div className='p-20'>
      <div className='fixed top-0 left-0 right-0 z-20'>
        <Navbar />
      </div>

      {/* Intro */}
      <section id="home" className="h-screen flex flex-col justify-center space-y-10 w-full items-center text-center">
        <h1 className="text-3xl md:text-6xl font-bold mb-4">Hi, I am Jakob 👋🏼</h1>
        <p className="w-3/4">I&apos;m Jakob, a software engineer on the Gold Coast with with 5+ years of developing digital solutions and a passion for immersive technologies.</p>
        <div className="flex gap-5">
          <a href="mailto:Jakobossmann@gmail.com">
            <button className="flex items-center justify-center rounded-full px-4 py-2 hover:scale-105 bg-black text-white hover:bg-blue-800">
              Get in touch
            </button>
          </a>
          <a download="" target="_blank" href="/public/CV_Jakob_Ossmann.pdf">
            <button className="flex items-center justify-center rounded-full px-4 py-2 hover:scale-105 bg-gray-300 text-white hover:bg-blue-800">Download resume</button>
          </a>
        </div>
        <a href="#portfolio" className='pt-10'>
          <ChevronDownIcon className="h-16 w-16 text-black animate-bounce " />
        </a>
      </section>

      <div id="portfolio"></div>

      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 space-x-2'>
        {content.projects.map((project, index) => (
          <div key={index} className='border p-8 rounded-md hover:border-2 hover:border-black'>
            <img
              src={project.image}
              alt={project.title}
              className='w-full h-64 object-cover rounded-md'
            />
            <h2 className='text-2xl font-bold mt-4'>{project.title}</h2>
            <p className='text-lg mt-2'>{project.description}</p>
          </div>
        ))}
      </div>
      {/* Empty bottom space */}
      <div className='p-20'></div>
    </div>
    </div>
  );
}
