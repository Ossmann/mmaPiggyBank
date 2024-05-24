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

            <p>In the present section I will describe the technical skills I was able to hone through my work integrated learning placement. For each technical skill I will apply the CARL (Context, Action, Result, Learning) reflective framework to showcase what I have learned. I will also lay out how each technical skills I worked on during my placement. I am happy I had to opportunity to develop new skills in a variety of areas such as apples VisionOS framework, the web-development framework nextjs and Generative Artificial Intelligence development through my WIL Placement.</p>

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
              <div className="flex items-center text-black font-semibold hover:underline cursor-pointer" id="headline1">
                ChatGPT AI API
                <ChevronDownIcon className="w-5 h-5 ml-1" />
              </div>
            </Link>
          </li>
          <li>
            <Link href="#headline5" passHref>
              <div className="flex items-center text-black font-semibold hover:underline cursor-pointer" id="headline1">
                7822ICT Reflection
                <ChevronDownIcon className="w-5 h-5 ml-1" />
              </div>
            </Link>
          </li>
        </ul>

        </div>

            <div className='text-xl font-semibold pt-6' >
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
                  <p className="caption text-xs italic text-center mt-4" id="headline2">
                    Design of the platform using Figma.
                  </p>
                </div>
              </div>




            <div className='text-xl font-semibold pt-6' >
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
                  src="/VisionOs.jpg"
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
                <p className="caption text-xs italic text-center mt-4" id="headline3">
                  Screenshot of XCode of my VisionOS project.
                </p>
              </div>
            </div>


            <div className='text-xl font-semibold pt-6'>
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
                  <p className="caption text-xs italic text-center mt-4" id="headline4">
                    The next.js project in VSCode.
                  </p>
                </div>
              </div>

            <div className='text-xl font-semibold pt-6' >
            ChatGPT AI API
            </div>
            <div className='underline font-medium py-3'>
            Context
            </div>
            <p>An important feature of the new platform was the integration of a new chat-based generative Artificial Intelligence.</p>
            <div className='underline font-medium py-3'>
            Action
            </div>
            <p>Consequently I learned about the ChatGPT API and how to integrate it into a web development project. I used the API management framework Axios to pass information to the API and its responses back into the front-end.
</p>
            <div className='underline font-medium py-3'>
            Result
            </div>
            <p>The Result was a fully functioning Chat Bot that could act as a sales consultant for the culture software group.
</p>
            <div className='underline font-medium py-3'>
            Learning
            </div>
          <p>During this task I was again able to draw on a lot of valuable lessons I gained through my web-development course. Additionally I gained new skills in AI development.
</p>

          <div className='py-12 flex justify-center'>
            <div className='text-center'>
            <video width="720" height="440" controls preload="none" loop autoPlay muted>
              <source src="/AIChatbot.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
                  <p className="caption text-xs italic text-center mt-4 " id='headline5'>
                    Integration of the OpenAI API into my <br />
                    AI Chatbot as Culture Software Group sales consultant
                  </p>
                </div>
              </div>


              <div className='text-xl font-semibold pt-6' >
            Reflection for 7822ICT
            </div>

            <div className='underline font-medium py-3'>
            How my learning changed through my graduate studies
            </div>

            <p>The way I acquire new knowledge and new skills as changed significantly over time. My undergraduate studies have been in social sciences where the study processes is centred very much on the critical discussion of literature. This helped my to evaluate scientific papers related to new technical developments during my graduate studies. At the same time however, the learning process required for a technical degree differs significantly as it is very important to develop the skill to follow step-by-step technical instructions in a detailed way. Furthermore, I had to develop advanced skills in fixing technical problems on my own by doing my own research. At my previous jobs where I was working on technical projects I always had a mentor or senior developer to help me and give me feedback. During my masters I had limited access to professors and tutors but most of the time I had to solve technical challenges by myself.  I had to develop the ability to understand and apply complex technical documentations by myself. I started to enjoy actively learning new technologies, continued to learn by myself during my placement and will continue to do so in my future career.</p>

            <p className='py-2'>Additionally, the scope of technical issues I was faced with during my studies required me to develop the ability to connect different domains: from front-end development to back and data-base management and network security or business analysis.</p>

            <p>In particular I developed 2 new critical workplace skills compared to my time as an undergraduate student:</p>

            <div className='underline font-medium py-3'>
            Complex Problem Solving
            </div>
            <p>The abilities I developed during my graduate studies helped me during my placement as I was able to develop new products with new technologies that no one at fluxguide was an expert in. Two years ago before I had started my masters I would have never believed that I would be able to learn a new 3D platform in VisionOS and a new web-development framework by myself in 3 months while delivering professionals products. As mentioned, no developer in fluxguide was an expert in those technologies. For example when building the new AR model in Vision Pro with 3D objects, the still immature documentation did not explain how to implement shaders effectively to light new objects adequately. This posed a significant challenge to me and the CTO was not able to help me either. I experimented with various approaches and read every developer forum on the subject I could find. In the end I managed to develop a shader mask that worked by mapping an image file with a black dot on my model. </p>

            <div className='underline font-medium py-3'>
            Decision Making
            </div>

            <p>When I first started trying to build technical projects I would try to build a working solution as quickly as possible and often times I would get discouraged or loose my nerve if I would not be able to develop a solution immediately. Throughout my graduate studies I was able to work on projects without the immediate pressure to need to publish. Instead, projects were drawn out over the course of a semester and holistic learning was actively promoted. This approach increased my confidence in taking a step back when facing difficult decisions and to decide for the sustainable long-term solution instead of a quick and dirty fix. In the past, at work I would sometimes get in trouble by taking a rushed decision under pressure. Now, during my placement I was able to keep calm and focus on the long-term result to successfully deliver high-quality solutions thanks to my graduate study experience.</p>

          </div>
        </div>
      </div>
    </div>
  );
}