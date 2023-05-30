import Bio from './components/Bio';
import Skills from './components/Skills';
import Hobbies from './components/Hobbies';
import Projects from './components/Projects';

export default function Home() {
  return (
    <>
      <Bio />
      <Skills />
      <div className="flex flex-col-reverse xl:flex-row xl:space-x-9 xl:space-y-0">
        <div className="mt-9 xl:mt-0">
          <Hobbies />
        </div>
        <Projects />
      </div>
    </>
  );
}
