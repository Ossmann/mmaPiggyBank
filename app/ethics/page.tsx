import Navbar from '../components/navbar';
import Image from 'next/image';

export default function Ethics() {
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
              My Ethics
            </div>
            <div className='text-xl font-semibold pt-2 pb-3'>
            An Example How I Dealt With Ethical Dilemmas in Practice
            </div>

            <p>In this section I will describe how I promote ethical behaviour during my application development process with an example from my placement.
</p>
        
            <div className='text-xl font-semibold pt-6 pb-3'>
              User data protection & appropriate use of data
            </div>

            <p>Appropriate user data protection and appropriate use of user data are highly relevant topics within the ICT industry. 
During my placement I was tasked with developing a new sales promotion platform with the ultimate goal to attract potential customers and generate sales leads.
As part of this platforms a questionnaire made it possible for the user to generate individualised product recommendations. My placement company was understandably interested in using this form as a tool to not only create product recommendations but to also potential to collect data on museums and its employees to be able to target them with sales campaigns.</p>
            
            <p>To offer users recommendation feature but, then use it as a data generation tool constitutes a questionable ethical practice. </p>
            
            <p>Therefore I tried to take steps to mitigate this issue. To ensure that the users would be aware that the data from the form would be not only stored but also potentially used, the disclaimer text was clearly visible included on the form and links to the data protection guidelines of fluxguide. Also, I made sure that the email contact field which would make it possible to identify the user, would be optional so the platform could be used without revealing personal information.
Finally, I argued successfully for the case of not adding an input field for the users name. If a users would be interested to share their name with the company they could always contact via email.</p>

      <div className='py-12 flex justify-center'>
                  <div className='text-center'>
                        <Image
                          src="/disclaimer.jpg" 
                          alt="Disclaimer foto"
                          width={500}
                          height={500}
                          className='mx-auto'
                        />
                        <p className="caption text-xs italic text-center mt-4" id="headline2">
                          Disclaimer and Optional Contact field in the form
                        </p>
                      </div>
                    </div>

            <p>With these measures I feel I successfully ensured ethical standards. What I would like to improve in the future is to build the form in a way that makes it clear that only two data points are actually intended for the recommendation feature and the others are for collection purposes mainly. However, I did not have the time nor the managerial support to make this distinction in the form.
            </p>

          
          </div>
        </div>
      </div>
    </div>
  );
}
