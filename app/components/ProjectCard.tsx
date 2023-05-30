import Card from './Card';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from './Projects';

export default function ProjectCard({ ...props }: Project) {
  return (
    <Card>
      <article className="flex w-full flex-col space-x-0 2xl:flex-row 2xl:space-x-9">
        <div>
          <Link href={props.demoLink} target="_blank">
            <Image
              src={props.image}
              width={500}
              height={500}
              alt="placeholder image"
              className="rounded-theme"
            />
          </Link>
        </div>
        <div className="flex flex-col justify-between lg:w-2/3">
          <div className="mb-4 flex flex-col">
            <div className="mb-4 mt-4 flex flex-row flex-wrap lg:mt-0">
              {props.stack.map((stack: string) => (
                <span
                  key={stack}
                  className="mr-3 inline-block whitespace-nowrap text-sm font-medium text-secondarytext"
                >
                  &#x23;{stack}
                </span>
              ))}
            </div>
            <h3 className="mb-4 text-heading font-medium text-[#333333]">
              {props.title}
            </h3>
            <p className="text-body font-medium text-secondarytext">
              {props.description}
            </p>
          </div>
          <div className="flex flex-row space-x-2">
            <Link href={props.demoLink} target="_blank">
              <button className="rounded-theme bg-primary px-9 py-3 font-medium text-white">
                Demo
              </button>
            </Link>
            <Link href={props.codeLink} target="_blank">
              <button className="rounded-theme border-[1px] border-solid border-primary bg-white px-9 py-3 font-medium text-primary">
                Code
              </button>
            </Link>
          </div>
        </div>
      </article>
    </Card>
  );
}
