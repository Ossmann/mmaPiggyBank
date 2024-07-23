import Navbar from './components/navbar';
import { promises as fs } from 'fs';
import path from 'path';
import Image from 'next/image';



export default async function Portfolio() {

  const file = await fs.readFile(process.cwd() + '/public/content.json', 'utf8');
  const content = JSON.parse(file);

  return (
    <div className='relative h-screen'>
      <div className='fixed top-0 left-0 right-0 z-20'>
        <Navbar />
       </div>

    {/* Intro */}
        <section id="home" className="h-screen flex flex-col justify-center space-y-10 w-full items-center text-center">
          <h1 className="text-3xl md:text-6xl font-bold mb-4">Hi, I am Jakob 👋🏼</h1>
          <p className="w-3/4">I'm Jakob, a software engineer on the Gold Coast with 2+ years experiece in web-development. Recently, I have been focussing on iOS and immersive technologies.</p>
          <div className="flex gap-5"><a href="mailto:Jakobossmann@gmail.com">
            <button className="flex items-center justify-center rounded-full px-4 py-2 hover:scale-105 bg-black text-white hover:bg-blue-800">
              Get in touch
            </button></a>
            <a download="" target="_blank" href="/public/CV_Jakob_Ossmann.pdf">
              <button className="flex items-center justify-center rounded-full px-4 py-2 hover:scale-105 bg-gray-300 text-white hover:bg-gray-800">Download resume</button></a>
              </div>
              <a href="#experience"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" className="svg-inline--fa fa-chevron-down fa-2x animate-bounce text-violet-300 cursor-pointer" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path></svg></a>
        </section>


       <div id="experience" className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 space-x-2'>
          {content.projects.map((project, index) => (
            <div key={index} className='border p-8 rounded-md'>
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
      </div>
  );
}
