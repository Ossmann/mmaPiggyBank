import Navbar from '../components/navbar';
import Image from 'next/image';
import Link from 'next/link';
import {
  ChevronDownIcon
} from '@heroicons/react/24/solid';

export default function Skills() {
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
              My Technical Skills
            </div>

            <p>In the present section I will describe the technical skills I was able to hone throughout my WIL Placement. For each technical skill I will apply the CARL (Context, Action, Result, Learning) reflective framework to showcase what I have learned. I will also lay out how each technical skills I worked on during my placement. I am happy I had to opportunity to develop new skills in a variety of areas such as apples VisionOS framework, the web-development framework nextjs and Generative Artificial Intelligence development through my WIL Placement.</p>

        <div className='py-4'>
        <ul className="space-y-4">
          <li>
            <Link href="#headline1" passHref>
              <div className="flex items-center text-black font-semibold hover:underline cursor-pointer">
                Figma <ChevronDownIcon className="w-5 h-5 ml-1" />
              </div>
            </Link>
          </li>
          <li>
            <Link href="#headline2" passHref>
              <div className="flex items-center text-black font-semibold hover:underline cursor-pointer">
                VisionOS
                <ChevronDownIcon className="w-5 h-5 ml-1" />
              </div>
            </Link>
          </li>
          <li>
            <Link href="#headline3" passHref>
              <div className="flex items-center text-black font-semibold hover:underline cursor-pointer">
                Next.js
                <ChevronDownIcon className="w-5 h-5 ml-1" />
              </div>
            </Link>
          </li>
          <li>
            <Link href="#headline4" passHref>
              <div className="flex items-center text-black font-semibold hover:underline cursor-pointer">
                ChatGPT AI API
                <ChevronDownIcon className="w-5 h-5 ml-1" />
              </div>
            </Link>
          </li>
        </ul>

        </div>

            <div className='text-xl font-semibold pt-6' id="headline1">
            Figma for User Experience Design
            </div>
            <div className='underline font-medium py-3'>
            Context
            </div>
            <p>At the start of my placement I had to create design foundations for the new proposed tool in accordance with the corporate design guidelines of the Culture Software Group. During my studies I had used the web-based tool Figma to draft layouts for assignments.
</p>
            <div className='underline font-medium py-3'>
            Action
            </div>
            <p>Now, with Figma I created first low poly designs. Then I took those to the various stakeholders in Europe and in Australia to receive feedback and new specifications from them. Finally, I created a full fletched design of the platform as a working click dummy. I made sure to get the feedback and the help from the most senior designer at fluxguide to improve my layouts.
</p>
            <div className='underline font-medium py-3'>
            Result
            </div>
            <p>This task taught me new UX design skills. Specifically I learned how to design multiple iterations quickly by building on design components and responsive design tools in Figma. UX design was not part of my software development major, however design skills are very useful to have for developers.
</p>
            <div className='underline font-medium py-3'>
            Learning
            </div>
            <p>I was happy with my design approach which I would do similar in the future. However, in a future project, I would make sure earlier to get assets such as logos, fonts or images from different stakeholders as this proofed to be the most time consuming task.
</p>


            <div className='my-4 text-sm leading-8'>
              <p>The Design Clickdummy can be accessed here: <a href="https://www.figma.com/proto/8MWy4DozNGpgN2ZPp4lKLb/culture-Australia-platform?node-id=2-2&t=GlmFdqZHxQniImPk-0&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=2%3A2" className="text-blue-800 font-semibold">LINK</a></p>
            </div>

            <div className='py-12 flex justify-center'>
            <div className='text-center'>
                  <Image
                    src="/Figma.jpg" 
                    alt="Figma Design"
                    width={1000}
                    height={1000}
                    className='mx-auto'
                  />
                  <p className="caption text-xs italic text-center mt-4">
                    Design of the platform using Figma.
                  </p>
                </div>
              </div>




            <div className='text-xl font-semibold pt-6' id="headline2">
            Swift and VisionOS for Mixed Reality Development
            </div>
            <div className='underline font-medium py-3'>
            Context
            </div>
            <p>Augmented Reality for museums is one of the major product areas of fluxguide. The platform they rely on most for AR, has some flaws in the quality of image tracking and stability. Recently, Apple released their new Apple Vision Pro. The Vision Pro offers new spatial computing capabilities which I was eager to try out. Since the platform was brand-new example apps were needed to showcase to potential customers.</p>
            <div className='underline font-medium py-3'>
            Action
            </div>
            <p>I jumped on the opportunity and started working myself into development for the vision pro. I was able to draw on lessons learned from my Mobile App development class where I had learned swift as native apps for VisionOS are built with swift.
</p>
            <div className='underline font-medium py-3'>
            Result
            </div>
            <p>I was able to develop two different prototypes of AR apps for museums, that the managers at fluxguide were excited about and used as showcase at exhibitions.
</p>
            <div className='underline font-medium py-3'>
            Learning
            </div>
            <p>Working on new apps for the apple vision pro taught my a variety of new skills. I learned how to build with Apples RealityKit framework that is used to create augmented reality effects. Furthermore, I learned how to correctly utilise the different types of canvases in 3D development: Windows, Volumes and Spaces (See image below). Also, I learned how utilise the new capabilities of VisionOS to seamlessly switch between the different modes of immersion and mixed view. I managed what no fluxguide app could do before to make objects in AR clickable.  Since development for VisionOS is fairly new, AI chatbots like ChatGPT cannot really help with the problems. The best way to learn is to connect with other developers. In the future I want to connect more with others who work on Apple Vision apps to improve and learn new skills.</p>


            <div className='py-12 flex justify-center'>
              <div className='flex flex-col items-center mr-8'>
                <Image
                  src="/VisionOS.jpg"
                  alt="VisionOS canvases"
                  width={500}
                  height={500}
                />
                <p className="caption text-xs italic text-center mt-4">
                  VisionOS canvas types: <a href="https://developer.apple.com/visionos/" className="text-blue-500">https://developer.apple.com/visionos/</a>
                </p>
              </div>
              <div className='flex flex-col items-center ml-8'>
                <Image
                  src="/XCode.jpg"
                  alt="XCode"
                  width={700}
                  height={700}
                />
                <p className="caption text-xs italic text-center mt-4">
                  Screenshot of XCode of my VisionOS project.
                </p>
              </div>
            </div>


            <div className='text-xl font-semibold pt-6' id="headline3">
            NEXTJS and React Web Development
            </div>
            <div className='underline font-medium py-3'>
            Context
            </div>
            <p>I had the task to build a new web-platform that would have state-of-the art performance and search engine optimisation.
</p>
            <div className='underline font-medium py-3'>
            Action
            </div>
            <p>I chose to build with the NEXTJS web development framework. This was challenging for me in the beginning as it was new to me. During my masters I have learned the larval framework. However, I was able to successfully translate many approaches such as routing between pages, sql queries and CSS layout I had learned in class to this new framework. For styling I used the new tailwind framework which I also had first heard of in my web development class. As database I used a Postgres Database where I could draw on knowledge from my Database Design class.
</p>
            <div className='underline font-medium py-3'>
            Result
            </div>
            <p>The result was a responsive platform that fulfils all original requirements and is optimised for SEO.
</p>
            <div className='underline font-medium py-3'>
            Learning
            </div>
            <p>Through my placement I had the chance to learn NEXTJS which I am sure I will continue a lot in the future. Without the placement I would probably not have taken the time to work myself into this new framework.</p>

            <div className='py-12 flex justify-center'>
            <div className='text-center'>
                  <Image
                    src="/next_code.jpg" 
                    alt="Next.js"
                    width={1000}
                    height={1000}
                    className='mx-auto'
                  />
                  <p className="caption text-xs italic text-center mt-4">
                    The next.js project in VSCode.
                  </p>
                </div>
              </div>

            <div className='text-xl font-semibold pt-6' id="headline4">
            ChatGPT AI API
            </div>
            <p>An important feature of the new platform was the integration of a new chat-based generative Artificial Intelligence.</p>
            <div className='underline font-medium py-3'>
            Context
            </div>
            <div className='underline font-medium py-3'>
            Action
            </div>
            <p>Consequently I learned about the ChatGPT API and how to integrate it into a web development project. I used the API management framework Axios to pass information to the API and its responses back into the front-end.
</p>
            <div className='underline font-medium py-3'>
            Result
            </div>
            <p>The Result was fully functioning Chat Bot that could act as a sales consultant for the culture software group.
</p>
            <div className='underline font-medium py-3'>
            Learning
            </div>
          <p>During this task I was again able to draw on a lot of valuable lessons I gained through my web-development course. Additionally I gained new skills in AI development.
</p>

          <div className='py-12 flex justify-center'>
            <div className='text-center'>
                  <Image
                    src="/OpenAI_Code.jpg" 
                    alt="OpenAI_Code.js"
                    width={400}
                    height={400}
                    className='mx-auto'
                  />
                  <p className="caption text-xs italic text-center mt-4">
                    Integration of the OpenAI API into my project.
                  </p>
                </div>
              </div>


          </div>
        </div>
      </div>
    </div>
  );
}
