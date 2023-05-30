import Card from './Card';
import Image from 'next/image';

type Hobby = {
  image: any;
  imageAlt: string;
  name: string;
  description: string;
};

const hobbies: Hobby[] = [
  {
    image: '/images/hobbies/hobby-history.jpeg',
    imageAlt: 'A photograph of an ancient Greek manuscript.',
    name: 'Church History & Historical Theology',
    description:
      'I am currently writing a PhD dissertation on the topic of conversion and the early church.',
  },
  {
    image: '/images/hobbies/hobby-coding.png',
    imageAlt: 'A screenshot of React code in the NextJS framework.',
    name: 'Coding & Web Development',
    description:
      'Ever since I first altered the HTML attributes of my MySpace page, I have been fascinated by web development.',
  },
  {
    image: '/images/hobbies/hobby-cycling.webp',
    imageAlt: 'A photograph of a man cycling on a Peloton.',
    name: 'Cycling',
    description:
      'I recently bought a Peloton to combat my sedentary lifestyle and I am really enjoying the exercise.',
  },
];

export default function Hobbies() {
  return (
    <Card width="w-1/3">
      <section className="space-y-8">
        <h2 className="text-heading font-medium text-primarytext">Hobbies</h2>
        {hobbies.map((hobby: Hobby) => (
          <div>
            <Image
              src={hobby.image}
              width={500}
              height={500}
              alt={hobby.imageAlt}
              className="mb-7 w-full rounded-theme"
            />
            <h3 className="mb-2.5 text-subheading font-semibold text-[#333333]">
              {hobby.name}
            </h3>
            <p className="text-body font-medium text-secondarytext">
              {hobby.description}
            </p>
          </div>
        ))}
      </section>
    </Card>
  );
}
