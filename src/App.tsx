import { AboutMe } from './boxes/AboutMe';
import { ContactMe } from './boxes/ContactMe';
import { Experience } from './boxes/Experience';
import { Resume } from './boxes/Resume';
import { BackgroundAnimation } from './components/magicui/BackgroundAnimation';

function App() {
  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 bg-[#0a1929]">
      <BackgroundAnimation />
      <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Large box - About Me */}
        <div className="md:col-span-2 lg:col-span-2">
          <AboutMe />
        </div>
        
        {/* Medium box - Contact Me */}
        <div className="md:col-span-1">
          <ContactMe />
        </div>
        
        {/* Large box - Experience with Marquee */}
        <div className="md:col-span-2 lg:col-span-3">
          <Experience />
        </div>
        
        {/* Small box - Resume */}
        <div className="md:col-span-1">
          <Resume />
        </div>
      </div>
    </div>
  );
}
export default App;