import Navbar from '../components/navbar';
import Image from 'next/image';

export default function AboutMe() {
  return (
    <div className='relative h-screen'>
      <div className='fixed top-0 left-0 right-0 z-20'>
        <Navbar />
       </div>

      <div className='p-20'>
        <div className='relative'>
          <div className='absolute inset-0 bg-white opacity-75'></div>
          <div className='relative p-20'>
            <div className='text-4xl font-bold pb-8'>
              Hello, I am Jakob 👋
            </div>
            <div className='float-right p-4'>
                  <Image
                    src="/beach.jpg" 
                    alt="Beach"
                    width={600}
                    height={600}
                    className=''
                  />
   
                </div>
            <div className='text-xl font-semibold pt-2 pb-3'>
            Software Developer
            </div>

            <p>Welcome to my page. I am a software developer originally from Vienna, Austria now based on the Gold Coast. I have a passion for immersive technologies and digital experiences. Through my previous jobs I was able to collect more than 5 years professional experience in developing digital solutions. 
</p>

<p className='py-2'>I graduated from Griffith University Master of Information Technology.</p>

<p className='py-2'>I am always looking for interesting opportunities to apply my skills as a software developer. In my next endeavour I am looking to build on the state-of-the-art web development and augmented reality skills I developed through my work and studies.
</p>

<p className='py-4'>In the long run, I want to establish myself as an internationally sought after industry expert for 3D- and augmented reality software development. 
</p>

<div className='mt flex space-x-4 pt-10 text-gray-800 font-semibold '>
  <p className='hover:underline'><a href="mailto:Jakobossmann@gmail.com" target="_blank" rel="noopener noreferrer">Email</a></p>
    <p className='hover:underline'><a href="https://product-finder-eosin.vercel.app/">Youtube</a></p>
    <p className='hover:underline'><a href="https://github.com/Ossmann">Github</a></p>
    <p className='hover:underline'><a href="https://www.linkedin.com/in/jakobossmann/">Linkedin</a></p>
</div>
  
          </div>
        </div>
      </div>
    </div>
  );
}
