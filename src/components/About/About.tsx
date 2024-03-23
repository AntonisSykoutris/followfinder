'use client';

import Section from '@/components/General/Section';
import { LuCastle } from 'react-icons/lu';

type Props = {};

const features = [
  {
    name: 'Push to deploy',
    description:
      'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    icon: LuCastle
  },
  {
    name: 'SSL certificates',
    description:
      'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    icon: LuCastle
  },
  {
    name: 'Simple queues',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    icon: LuCastle
  },
  {
    name: 'Advanced security',
    description:
      'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    icon: LuCastle
  }
];

export default function About({}: Props) {
  return (
    <Section className='h-[130vh] sm:h-screen'>
      <div className='mx-auto max-w-2xl lg:text-center'>
        <h2 className='text-base font-semibold leading-7 text-indigo-600'>
          Deploy faster
        </h2>
        <p className='mt-2 text-3xl font-bold tracking-tight sm:text-4xl'>
          Everything you need to{' '}
          <span className='text-instagram'>deploy your app</span>
        </p>
        <p className='mt-6 text-lg leading-8 '>
          Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
          Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
          In mi viverra elit nunc.
        </p>
      </div>
      <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl'>
        <div className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
          {features.map(feature => (
            <div key={feature.name} className='relative pl-16'>
              <dt className='text-base font-semibold leading-7 '>
                <div className='instagram absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg'>
                  <feature.icon
                    className='h-6 w-6  text-primary-foreground'
                    aria-hidden='true'
                  />
                </div>
                {feature.name}
              </dt>
              <div className='mt-2 text-base leading-7 '>
                {feature.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
