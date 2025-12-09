import { MainHeader } from "./home-components/MainHeader.tsx";
import { InfoCard } from "./home-components/InfoCard.tsx";
import classes from "../../styles/home/Hobbies.module.css";
import { Text, SimpleGrid } from "@mantine/core";
import GithubGraph from "./home-components/GithubGraph.tsx";

export default function Home() {
    return (
        <>
            <MainHeader />
            <GithubGraph />

            {/*experience section*/}
            <Text className={classes.supTitle}>Syed's Experience</Text>
            <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="md" mt="md">
                <InfoCard
                    cardTitle={'Software Engineer'}
                    cardDescription={'Currently, I work as a Software Engineer at JPMorgan Chase, working on the Syndication Trades team. My primary tech stack includes Spring Boot, React, and SQL, complemented by experience with AWS and Terraform for cloud and infrastructure management.'}
                    iconName={'laptop'} />
                <InfoCard
                    cardTitle={'Software Engineer Intern'}
                    cardDescription={'I interned at JPMorganChase (2022) as a SWE intern where I worked on creating dashboards to monitor our server metrics and health.' +
                        'During this internship, I worked with React, SpringBoot, Grafana, and Prometheus'}
                    iconName={'laptop'} />
                <InfoCard
                    cardTitle={'Certifications'}
                    cardDescription={'I have attained the AWS Solutions Architect Associate certification'}
                    iconName={'certificate'} />
            </SimpleGrid>
        </>
    )
}
