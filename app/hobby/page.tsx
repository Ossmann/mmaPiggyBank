import Navbar from '../components/navbar';
import Image from 'next/image';

export default function Hobby() {
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
              My Hobby
            </div>
            <div className='text-xl font-semibold pt-2 pb-3'>
            Sufring: My Perfect Contrast to Software Development
            </div>
        
            <p>When I am not developing software you can find me on the beach chasing waves. I live close  to Snapper Rocks, one of the best and most consistent surf spots in the world. A little far south is my favourite break called Kirra. When the swell is right, Kirra offers great waves for endless longboard rides, perfect for a right footer like me. </p>

            <p>Surfing brings the perfect balance to my life as a developer. Not only is it a great way to exercise after sitting at the computer all day, but I also find it a great way to clear my head. Whenever I am stuck on a difficult technical problem, I grab my board and head out into the water to get a fresh start.</p>

            <div className='py-2'>
              <p>Surfing has taught me great lessons about patience, perseverance and most importantly about adequately assessing my own skills. If you overestimate you abilities in surfing you can put yourself in danger but if you never dare to challenge yourself you will never be able to move up to exciting waves and experience the full joy of the sport. Similarly it is important in work to not overestimate my abilities in order to cause trouble. At the same time however, I am excited to challenge myself professionally and to build new great software.</p>
            </div>


            <div className='py-12 flex justify-center'>
            <div className='text-center'>
                  <Image
                    src="/beach.jpg" 
                    alt="beach foto"
                    width={600}
                    height={600}
                    className='mx-auto'
                  />
                  <p className="caption text-xs italic text-center mt-4" id="headline2">
                    When I am not at the computer, you will find me at the beach.
                  </p>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
