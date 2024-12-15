import './App.css'
import {HeaderMenu} from "./screens/home/HeaderMenu.tsx";
import {MainHeader} from "./screens/home/MainHeader.tsx";
import {BlogCarousel} from "./screens/home/BlogCarousel.tsx";


function App() {

  return (
    <>
        <HeaderMenu/>
        <MainHeader/>
        <BlogCarousel/>
    </>
  )
}

export default App
