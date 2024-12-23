import {ProjectItem} from "./ProjectItem.tsx";


export default function Projects(){

    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
            {/*tags={} title={} githubLink={} image={} desciption={}*/}
            <ProjectItem/>
            <ProjectItem/>
            <ProjectItem/>
            <ProjectItem/>
            <ProjectItem/>
        </div>
    )
}
