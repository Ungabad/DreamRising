import Section from "./Section";
import Heading from "./Heading";
import { image1, image2, GidayMe, check, stairs, DougLarry } from "../assets";
import { brainwaveServicesIcons, DreamRisingServices } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

import Generating from "./Generating";

const Services = () => {
  return (
    <Section id='outlook'>
      <div className='container'>
        <Heading
          title='Mission Statement'
          text='To provide comprehensive support, education and resources to justice-impacted, underprivilaged and oppressed individuals and families. Empowering them to rebuild their lives and achieve equitable opportunities.'
        />

        <div className='relative'>
          <div className='relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]'>
            <div className='absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto'>
              <img
                className='w-full h-full object-cover md:object-right'
                width={800}
                alt='3 Students around a table'
                height={730}
                src={stairs}
              />
            </div>

            <div className='relative z-1 max-w-[17rem] ml-auto'>
              <h4 className='h6 mb-2'>Rising Demand</h4>
              <p className='body-2 mb-[3rem] text-n-3'>
                Over 70 million Americans with criminal records need support
              </p>
              <h4 className='h6 mb-2'>Digital Skills Gap</h4>
              <p className='body-2 mb-[3rem] text-n-3'>
                52% in underserved areas lack digital literacy
              </p>
              <h4 className='h6 mb-2'>Entrepreneur Growth</h4>
              <p className='body-2 mb-[3rem] text-n-3'>
                Minority owned business grew by 35% over the past decade
              </p>
              <h4 className='h6 mb-2'>Philanthropic Funding</h4>
              <p className='body-2 mb-[3rem] text-n-3'>
                Charitable giving in the U.S. reached $499 billion in 2023
              </p>
              <h4 className='h6 mb-2'>Community Driven</h4>
              <p className='body-2 mb-[3rem] text-n-3'>
                Located programs have proven to reduce recidivism up to 25%
              </p>
            </div>
          </div>

          <div className='relative z-1 grid gap-5 lg:grid-cols-2'>
            <div className='relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden'>
              <div className='absolute inset-0'>
                <img
                  src={DougLarry}
                  className='h-auto w-auto object-cover'
                  width={500}
                  height={500}
                  alt='Students Walking'
                />
              </div>

              <div className='absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15'>
                <h4 className='h4 mb-4'>Our Services</h4>
                <p className='body-2 mb-[3rem] text-n-3'>
                  <ul className='body-2'>
                    {DreamRisingServices.map((item, index) => (
                      <li
                        key={index}
                        className='flex items-start py-4 border-t border-n-6'
                      >
                        <img width={24} height={24} src={check} />
                        <p className='ml-4'>{item}</p>
                      </li>
                    ))}
                  </ul>
                </p>
              </div>
            </div>

            <div className='p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]'>
              <div className='py-12 px-4 xl:px-8'>
                <h4 className='h4 mb-4'>Founders of Dream Rising</h4>
                <p className='body-2 mb-[2rem] text-n-3'>
                  Giday Adhanom and Salamasina Tanoai are visionary leaders and
                  advocates for social change who co-founded Dream Rising, an
                  organization that will break cycles of poverty, oppression,
                  and disenfranchisement in the state of Washington. Both Giday
                  and Salamasina bring a wealth of personal and professional
                  experiences shaped by overcoming systemic challenges,
                  including justice involvement, economic hardships, and social
                  inequities.
                </p>
              </div>

              <div className='relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]'>
                <img
                  src={GidayMe}
                  className='w-full h-full object-cover'
                  width={520}
                  height={400}
                  alt='The founder of Dream Rising'
                />
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
