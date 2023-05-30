import Card from './Card';
import Image from 'next/image';
import ProfilePic from 'public/images/profile.jpg';
import { EnvelopeIcon } from '@heroicons/react/24/solid';

export default function Bio() {
  return (
    <Card>
      <section className="flex flex-col md:flex-row">
        <Image
          src={ProfilePic}
          alt="Picture of the developer"
          className="w-full rounded-theme md:h-48 md:w-48"
        />
        <div className="mt-8 flex-col md:ml-8 md:mt-0">
          <div className="flex flex-col justify-between lg:flex-row">
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
              <span className="textsubheading font-medium">
                alex.moore.codes@gmail.com
              </span>
            </div>
          </div>
          <div className="mt-4">
            <span className="text-body font-medium text-secondarytext">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
              omnis molestiae dolore exercitationem incidunt minus, amet animi
              nobis voluptatum, nostrum iure sed, voluptas temporibus aspernatur
              eum natus eveniet unde expedita!
            </span>
          </div>
        </div>
      </section>
    </Card>
  );
}
