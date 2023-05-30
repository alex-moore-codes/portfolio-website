import Card from './Card';
import ProjectCard from './ProjectCard';

export type Project = {
  stack: string[];
  image: string;
  title: string;
  description: string;
  demoLink: string;
  codeLink: string;
};

const projects: Project[] = [
  {
    stack: [
      'NextJS',
      'Tailwind',
      'Typescript',
      'React',
      'Local Storage',
      'React Hooks',
    ],
    image: '/images/projects/display-todo.png',
    title: '#todo',
    description:
      'This simple todo app allows the user to keep track of their active and completed todos. Additionally, it leverages local storage on the browser to persist state after a page refresh or even after closing the window.',
    demoLink: 'https://simple-todo.alexmoore.codes',
    codeLink: 'https://github.com/alex-moore-codes/simple-todo',
  },
  {
    stack: [
      'NextJS',
      'Tailwind',
      'Typescript',
      'React',
      'Fetch API',
      'React Hooks',
    ],
    image: '/images/projects/display-random-quote.png',
    title: 'Random Quote',
    description:
      'My very first web development project ever. This app fetches a new random quote from an API every time the user requests it. The user can also click on the name of the author to see additional quotes from that source.',
    demoLink: 'https://random-quote.alexmoore.codes/',
    codeLink: 'https://github.com/alex-moore-codes/random-quote',
  },
];

export default function Projects() {
  return (
    <section className="space-y-4">
      <Card>
        <h2 className="text-subheading font-medium text-primarytext">
          {`Projects (${projects.length})`}
        </h2>
      </Card>
      {projects.map((project: Project) => (
        <ProjectCard
          key={project.demoLink}
          stack={project.stack}
          image={project.image}
          title={project.title}
          description={project.description}
          demoLink={project.demoLink}
          codeLink={project.codeLink}
        />
      ))}
    </section>
  );
}
