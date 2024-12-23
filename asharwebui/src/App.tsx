import './App.css'
import {TopHeader} from "./screens/home/home-components/TopHeader.tsx";
import {Route, Routes} from "react-router-dom";
import Home from "./screens/home/HomePage.tsx";
import Projects from "./screens/projects/Projects.tsx";
import Blog from "./screens/blog/Blog.tsx";
import AboutMe from "./screens/aboutme/AboutMe.tsx";


function App() {

  return (
    <>
        {/*this header stays on every page*/}
        <TopHeader/>


        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/projects'} element={<Projects/>}/>
            <Route path={'/blog'} element={<Blog/>}/>
            <Route path={'/aboutme'} element={<AboutMe/>}/>
        </Routes>




    </>
  )
}

export default App
