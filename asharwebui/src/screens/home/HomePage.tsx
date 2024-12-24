import {MainHeader} from "./home-components/MainHeader.tsx";
import {ItemCard} from "./home-components/ItemCard.tsx";
import {InfoCard} from "./home-components/InfoCard.tsx";
import {Hobbies} from "./home-components/Hobbies.tsx";
import classes from "../../styles/home/Hobbies.module.css";
import {Text} from "@mantine/core";
import GithubGraph from "./home-components/GithubGraph.tsx";

export default function Home(){
    return (
        <>
            <MainHeader/>
            <GithubGraph/>

            {/*this is UT/UTD/Side project*/}
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '100px'}}>
                <ItemCard category={'Masters'} title={'Masters in Computer Science at UT Austin'} years={'(2024-2025)'}
                          image={'https://yt3.googleusercontent.com/ytc/AIdro_kc5vR0K17o85Cr-KT7zRincym_SDnnmtDvqDavIR7pBT8=s900-c-k-c0x00ffffff-no-rj'}/>
                <ItemCard category={'Bachelors'} title={'Bachelors in Computer Science at UTD'} years={'(2020-2023)'}
                          image={'https://play-lh.googleusercontent.com/RsB_VJH7T35Kk7YSHHG-snvEDYLyyajgWzkXsa6BHRL5dghwydIds8DG9tr8CdofyIk'}/>
                <ItemCard category={'My Projects'} title={'Side projects!'} years={''}
                          image={'https://static.vecteezy.com/system/resources/previews/007/642/438/non_2x/laptop-electronic-portable-computer-notebook-line-pop-art-potrait-logo-colorful-design-illustration-vector.jpg'}/>
            </div>

            {/*experience section*/}
            <Text className={classes.supTitle}>Syed's Experience</Text>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginTop:'16px'}}>
                <InfoCard
                    cardTitle={'Software Engineer'}
                    cardDescription={'Currently, I work as a Software Engineer at JPMorgan Chase, working on the Syndication Trades team. My primary tech stack includes Spring Boot, React, and SQL, complemented by experience with AWS and Terraform for cloud and infrastructure management.'}
                    iconName={'laptop'}/>
                <InfoCard
                    cardTitle={'Software Engineer Intern'}
                    cardDescription={'I interned at JPMorganChase (2022) as a SWE intern where I worked on creating dashboards to monitor our server metrics and health.' +
                                     'During this internship, I worked with React, SpringBoot, Grafana, and Prometheus'}
                    iconName={'laptop'}/>
                <InfoCard
                    cardTitle={'Certifications'}
                    cardDescription={'I have attained the AWS Solutions Architect Associate certification'}
                    iconName={'certificate'}/>
            </div>

            {/*hobbies section*/}
            <Hobbies/>
        </>
    )
}
