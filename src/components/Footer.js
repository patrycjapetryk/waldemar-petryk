import * as prismic from '@prismicio/client';

import { Bounded } from './Bounded';
import { Heading } from './Heading';
import { HorizontalDivider } from './HorizontalDivider';
import { PrismicRichText } from './PrismicRichText';
import { PrismicImage } from '@prismicio/react';

function SignUpForm({ settings }) {
  const { socialmediaDescription, socialmedia } = settings.data;
  console.log(socialmedia);

  return (
    <div className='px-4'>
      <div className='grid w-full max-w-xl grid-cols-1 gap-6'>
        <div className='text-center font-serif tracking-tight text-slate-500'>
          <PrismicRichText
            field={socialmediaDescription}
            components={{
              heading1: ({ children }) => (
                <Heading as='h2' className='mb-4 last:mb-0'>
                  {children}
                </Heading>
              ),
              paragraph: ({ children }) => <p className='mb-4 italic last:mb-0'>{children}</p>,
            }}
          />
        </div>
        <nav>
          <ul className='flex justify-center gap-3'>
            {socialmedia?.map((item, index) => (
              <li key={index}>
                <a href={item.link.url} target={item.link.target ? item.link.target : ''}>
                  <PrismicImage field={item.icon} className='w-10' />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export function Footer({ settings }) {
  return (
    <Bounded as='footer'>
      <div className='grid grid-cols-1 justify-items-center gap-24'>
        <HorizontalDivider />
        <SignUpForm settings={settings} />
        <div className='mx-auto w-full max-w-3xl text-center text-xs font-semibold tracking-tight text-slate-500'>
          @ {new Date().getFullYear()} Copyrights Waldemar Petryk
        </div>
      </div>
    </Bounded>
  );
}
