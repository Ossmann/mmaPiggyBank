import Navbar from '../components/navbar';
import Image from 'next/image';
import { Suspense } from 'react'
import VideoComponent from '../components/video';
import dynamic from 'next/dynamic';


export default function Placement() {
  return (
    <div className='relative h-screen'>
      <div className='fixed top-0 left-0 right-0 z-20'>
        <Navbar />
      </div>

      <div className='p-20'>
        <div className='relative'>
          <div className='absolute inset-0 bg-white opacity-75 z-0'></div>
          <div className='relative z-10 p-20'>
            <div className='text-4xl font-bold pb-8'>
              My Placement Experience with fluxguide
            </div>

            <p>In this section I will describe my WIL placement experience with fluxguide and what I learned from it. I will apply the DIEP framework (Describe, Interpret, Evaluate, Plan) to structure my reflection.</p>

            <div className='text-xl font-semibold pt-6 pb-3'>
              Description
            </div>
            <p>I did my Work Integrated Learning (WIL) placement with a software company called fluxguide that is headquartered in Vienna, Austria. Fluxguide had been recently acquired by the culture software group. Furthermore, the culture software group with their largest subsidiary company zetcom had at the start of my placement acquired the Brisbane based Australian company Ortelia to create a fully functional business unit in Australia. All those three companies (fluxguide, Ortelia and zetcom) are leaders in software for the cultural sector and especially museums. Fluxguide is especially leading in augmented reality for museums. Therefore, I was also looking into developing apps for the brand new apple Vision Pro headset as part of my WIL. My main task however, was to create a tool that would help connect those different product offerings of those different software companies. To achieve this I would be meeting regularly with teams in Europe and in Australia.</p>

            <div className='py-12'>
              <div className='flex flex-wrap justify-center'>
                <div className='p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/2'>
                  <Image
                    src="/csg_overview.jpg"
                    alt="Culture Software Group"
                    layout="responsive"
                    width={1000}
                    height={1000}
                    className='object-contain'
                  />
                </div>
                <div className='p-2 w-full sm:w-1/4 md:w-1/3 lg:w-1/2'>
                  <Image
                    src="/csg_global.jpg"
                    alt="Culture Software Group global"
                    layout="responsive"
                    width={1000}
                    height={1000}
                    className='object-contain'
                  />
                </div>
              </div>
            </div>


            <p>When I joined I noticed there was a lot of internal confusion between the 3 companies zetcom, fluxguide and Ortelia. Also, customers were confused about the interaction of the various products offered by the three companies and how they interlink.</p>

            <p>When I started talking to the company about the project, a crucial question was which tech stack to use. In conversation with the developers I noticed some uncertainty about their two main platforms moving forward: Vue.js for web development and Unity for Augmented Reality development. When I joined I also noticed there was the recent acquisition by the culture software group of the new Australian company Ortelia. There was some internal confusion between the 3 companies zetcom, fluxguide and Ortelia. Also customers were confused about the interaction of the various products offered by the three companies and how they would interlink.</p>

            <p>I started my project with a lot of excitement but I also noticed that the employees were very stressed at times and did not show a lot of intrinsic interest in my work.</p>

            <div className='text-xl font-semibold pt-6 pb-3'>
              Interpretation
            </div>

            <p>I felt a little bit overwhelmed at the beginning because I noticed a bit of confusion inside the group of companies and its various actors. At the same time however, I was excited about the opportunity to contribute to new expansion of the culture software group. I concluded that it is normal when various new companies start working together that there would be misunderstandings but I was nevertheless motivated to perform. That a lot of employees were busy and had to be motivated continuously to contribute to my project is understandable. Full-time professionals work themselves on large projects with prominent customers and large budgets and have their own deadlines to worry about.</p>

            <div className='text-xl font-semibold pt-6 pb-3'>
              Evaluation
            </div>

            <div className="float-right">
              <Image
                src="/AR.jpg"
                alt="Placeholder"
                width={400}
                height={400}
                className="p-6"
              />
              <p className="caption text-xs italic text-center">My Vision Pro apps trialed by happy visitors at the Cultura Suisse exhibition.</p>
            </div>

            <p>Having the opportunity to develop a new platform during a crucial merger and transformation process was a unique opportunity that helped me learn about how to navigate the diverging interests of individuals. I also learned how to develop an understanding for occupations and projects of others. Furthermore, I think I managed to acquire skills to motivate myself to continue working and to keep others interested in my project.</p>

            <div className='text-xl font-semibold pt-6 pb-3'>
              Learnings and Plan
            </div>

            <p>By developing crucial communication and self-motivation skills I managed to successfully complete all objectives that fluxguide had formulated for me at the start of my WIL. By trusting in my intuition to develop with Vision OS and nextjs I was furthermore able to create impressive results that all participants were excited about. I kept motivated to study myself the documentation on the new technology frameworks and facilitate regular meetings to keep the project on track. No matter what professional tasks I will pursue in the future, the ability to communicate between different actors with divergent interests will help me achieve my goals. This experience also gave me great confidence in my technical skills and my judgment of technology stacks. In the future I will draw upon this experience when making crucial tech decisions no matter where I will work. My ability to self-motivate myself to complete new innovative projects and to learn new tech skills will help me in all aspects of life moving forward.</p>

            <div className='my-4 text-sm leading-8'>
              <p>The final web-platform can be previewed here: <a href="https://product-finder-eosin.vercel.app/" className="text-blue-800 font-semibold">LINK</a></p>
              <p>Check out my Vision Pro projects on my YouTube channel: <a href="https://www.youtube.com/@jakobossmann2323" className="text-red-800 font-semibold">https://www.youtube.com/@jakobossmann2323</a></p>
            </div>
            
            {/* <section>
              <Suspense fallback={<p>Loading video...</p>}>
                <VideoComponent />
              </Suspense>
              {/* Other content of the page */}
            {/* </section> */}

            <div className='flex justify-center items-center py-4'>
              <div className='text-center'>
                <video width="600" height="600" controls preload="none" loop autoPlay muted>
                  <source src="/Statue_with_Info_explanation.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <p className="caption text-xs italic text-center mt-1">
                  Touch based object annotation in the Vision Pro
                </p>
              </div>
            </div>

            <div className='flex justify-center items-center py-4'>
              <div className='text-center'>
                <video width="600" height="600" controls preload="none" loop autoPlay muted>
                  <source src="/Vision ProVideo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <p className="caption text-xs italic text-center mt-1">
                  Viewing the new web-platform in mixed reality on the vision pro.
                </p>
              </div>
            </div>




          </div>
        </div>
      </div>
    </div>
  );
}
