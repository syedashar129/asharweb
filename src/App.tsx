import { AboutMe } from './boxes/AboutMe';
import { ContactMe } from './boxes/ContactMe';
import { Experience } from './boxes/Experience';
import { Resume } from './boxes/Resume';
import { Skills } from './boxes/Skills';
import { BackgroundAnimation } from './components/magicui/BackgroundAnimation';

function App() {
  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 bg-[#0a1929]">
      <BackgroundAnimation />
      <div className="relative z-10 w-full max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {/* Large box - About Me */}
          <div className="md:col-span-2 lg:col-span-2">
            <AboutMe />
          </div>
          
          {/* Small box - Resume */}
          <div className="md:col-span-1">
            <Resume />
          </div>
          
          {/* Large box - Experience with Marquee */}
          <div className="md:col-span-2 lg:col-span-3">
            <Experience />
          </div>
          
          {/* Skills and Contact Me on the same level */}
          <div className="md:col-span-1">
            <Skills />
          </div>
          <div className="md:col-span-2">
            <ContactMe />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;