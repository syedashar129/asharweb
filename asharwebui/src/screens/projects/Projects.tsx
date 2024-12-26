import {ProjectItem} from "./ProjectItem.tsx";


export default function Projects(){

    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
            {/*tags={} title={} githubLink={} image={} desciption={}*/}
            <ProjectItem
                projTitle={'Real Estate Property Appreciation + Rent predictor'}
                type={'webapp'}
                projDescription={'This is an application which allows you to enter a house posting from zillow/redfin' +
                                 'and see what its projected growth is over the next 5 years in terms of rent and house value. ' +
                                 'It also provides comparisons based on the house region and the latest transactions + trends near the house.' +
                                 'Achieved this using a scikit-learn prediction model and the zillow api. Try it out :)'}
                badges={[
                    {emoji: '📚', label: 'React'},
                    {emoji: '📈', label: 'scikit-learn'},
                    {emoji: '🏠', label: 'zillow api'},
                    {emoji: '👨‍💻', label: 'kaggle dataset'}
                ]}
                imgSrc={'https://images.squarespace-cdn.com/content/v1/5e6e7c66ddeb2e162edb8cf4/1625591303235-8JO5E94PA2WI652O5UF9/Rental-Property.jpg'}
                githubLink={''}
            />
            <ProjectItem
                projTitle={'StockScope'}
                type={''}
                projDescription={'This is an application which provides insight of a certain stock based on its ticker/name' +
                                 'By extracting information of the stock '}
                badges={[]}
                imgSrc={''}
                githubLink={''}
            />
            <ProjectItem
                projTitle={'Personal Website'}
                type={'webapp'}
                projDescription={'This is a website to learn more about me, Syed Ashar! And YOU are currently on it!'}
                badges={[
                    {emoji: '📚', label: 'React'},
                    {emoji: '🔐', label: 'Typescript'},
                    {emoji: '🎨', label: 'Mantine'},
                    {emoji: '⚡️', label: 'Vite'},
                ]}
                imgSrc={'https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_1280.jpg'}
                githubLink={'https://github.com/syedashar129/asharweb'}
            />
            <ProjectItem
                projTitle={'FoodieConnect'}
                type={'android mobile app'}
                projDescription={''}
                badges={[]}
                imgSrc={''}
                githubLink={''}
            />
            <ProjectItem
                projTitle={'Spotify Clone'}
                type={''}
                projDescription={''}
                badges={[]}
                imgSrc={''}
                githubLink={''}
            />
        </div>
    )
}
