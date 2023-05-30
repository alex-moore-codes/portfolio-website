import Card from './Card';
import Image from 'next/image';
import ProfilePic from 'public/images/profile.jpg';
import { EnvelopeIcon } from '@heroicons/react/24/solid';

export default function Bio() {
  const bio: string =
    'Hey my name is Alex! I am a PhD student with a passion for ancient Christian history and web development. I am a natural problem-solver and coding gives me an outlet for mindless tinkering. Turns out, I have gotten pretty good at it. I have built a few projects you can review down below, and I am even considering building my own app for a business endeavor. Inquiries? Send me an email.';

  return (
    <Card>
      <section className="flex flex-col md:flex-row">
        <Image
          src={ProfilePic}
          alt="Picture of the developer"
          className="w-full rounded-theme md:h-48 md:w-48"
        />
        <div className="mt-8 grow flex-col md:ml-8 md:mt-0">
          <div className="flex flex-col justify-between xl:flex-row">
            <div>
              <h1>
                <span className="text-heading font-semibold text-primarytext">
                  Alex Moore
                </span>
                <br />
                <span className=" text-subheading font-medium text-secondarytext">
                  Full Stack Developer
                </span>
              </h1>
            </div>
            <div className="flex space-x-2 text-primarytext">
              <EnvelopeIcon className="h-6 w-6" />
              <a href="mailto:alex.moore.codes@gmail.com">
                <span className="textsubheading font-medium">
                  alex.moore.codes@gmail.com
                </span>
              </a>
            </div>
          </div>
          <div className="mt-4">
            <span className="text-body font-medium text-secondarytext">
              {bio}
            </span>
          </div>
        </div>
      </section>
    </Card>
  );
}
