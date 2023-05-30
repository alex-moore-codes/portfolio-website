import Card from './Card';
import ProgressBar from './ProgressBar';

export type Skill = {
  name: string;
  progress: number;
};

const skills: Skill[] = [
  {
    name: 'React',
    progress: 74,
  },
  {
    name: 'CSS',
    progress: 85,
  },
  {
    name: 'Tailwind',
    progress: 85,
  },
  {
    name: 'NextJS',
    progress: 94,
  },
  {
    name: 'Vercel',
    progress: 89,
  },
  {
    name: 'Typescript',
    progress: 83,
  },
];

export default function Skills() {
  return (
    <Card width="w-1/2">
      <section className="space-y-4">
        <h2 className=" textsubheading font-bold text-primarytext">
          FRONT END
        </h2>
        <div className="space-y-4">
          {skills.map((skill: Skill) => (
            <div key={skill.name} className="flex font-medium">
              <div className="w-2/5 sm:w-1/3 md:w-1/4 lg:w-1/5">
                <p className="text-body">{skill.name}</p>
              </div>
              <div className="flex w-full flex-col justify-center">
                <ProgressBar
                  key={skill.name + skill.progress}
                  progress={skill.progress}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </Card>
  );
}
