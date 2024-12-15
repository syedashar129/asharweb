import './App.css'
import {TopHeader} from "./screens/home/TopHeader.tsx";
import {MainHeader} from "./screens/home/MainHeader.tsx";
import {BlogCarousel} from "./screens/home/BlogCarousel.tsx";


function App() {

  return (
    <>
        <TopHeader/>
        <MainHeader/>
        <BlogCarousel/>
    </>
  )
}

export default App
