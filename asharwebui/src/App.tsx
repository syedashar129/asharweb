import './App.css'
import {TopHeader} from "./screens/home/home-components/TopHeader.tsx";
import {Route, Routes} from "react-router-dom";
import Home from "./screens/home/HomePage.tsx";
import Projects from "./screens/projects/Projects.tsx";
import Blog from "./screens/blog/Blog.tsx";
import ContactMe from "./screens/contact/ContactMe.tsx";


function App() {

  return (
    <>
        {/*this header stays on every page*/}
        <TopHeader/>


        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/projects'} element={<Projects/>}/>
            <Route path={'/blog'} element={<Blog/>}/>
            <Route path={'/contact'} element={<ContactMe/>}/>
        </Routes>




    </>
  )
}

export default App
