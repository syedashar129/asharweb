import './App.css'
import { TopHeader } from "./screens/home/home-components/TopHeader.tsx";
import Home from "./screens/home/HomePage.tsx";
import Projects from "./screens/projects/Projects.tsx";
import Blog from "./screens/blog/Blog.tsx";
import Contact from "./screens/contact/Contact.tsx";
import { Hobbies } from "./screens/home/home-components/Hobbies.tsx";
import { BackgroundAnimation } from "./components/BackgroundAnimation.tsx";
import { Container, Divider } from "@mantine/core";


function App() {

  return (
    <>
      <BackgroundAnimation />
      {/*this header stays on every page*/}
      <TopHeader />

      {/* Home Section */}
      <section id="home" className="page-section">
        <Container size="xl">
          <Home />
        </Container>
      </section>

      <Divider size="sm" my="xl" variant="dashed" />

      {/* Projects Section */}
      <section id="projects" className="page-section">
        <Projects />
      </section>

      <Divider size="sm" my="xl" variant="dashed" />

      {/* Blog Section */}
      <section id="blog" className="page-section">
        <Container size="xl" py="xl">
          <Blog />
        </Container>
      </section>

      <Divider size="sm" my="xl" variant="dashed" />

      {/* Hobbies Section */}
      <section id="hobbies" className="page-section">
        <Container size="xl" py="xl">
          <Hobbies />
        </Container>
      </section>

      <Divider size="sm" my="xl" variant="dashed" />

      {/* Contact Section */}
      <section id="contact" className="page-section">
        <Container size="xl" py="xl">
          <Contact />
        </Container>
      </section>

    </>
  )
}

export default App
