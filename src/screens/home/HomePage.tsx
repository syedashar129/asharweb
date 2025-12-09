import { MainHeader } from "./home-components/MainHeader.tsx";
import { InfoCard } from "./home-components/InfoCard.tsx";
import classes from "../../styles/home/Hobbies.module.css";
import { Title, SimpleGrid } from "@mantine/core";
import GithubGraph from "./home-components/GithubGraph.tsx";

export default function Home() {
    return (
        <>
            <MainHeader />
            <GithubGraph />

            {/*experience section*/}
            <Title order={2} className={classes.supTitle} ta="center" mt="xl" mb="md">Professional Experience</Title>
            <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="md" mt="md">
                <InfoCard
                    cardTitle={'Software Engineer'}
                    cardDescription={'Currently building enterprise-grade applications at JPMorgan Chase on the Syndication Trades team. Specialized in full-stack development using Spring Boot, React, and SQL, with expertise in cloud infrastructure management via AWS and Terraform.'}
                    iconName={'laptop'} />
                <InfoCard
                    cardTitle={'Software Engineer Intern'}
                    cardDescription={'Developed real-time monitoring dashboards for server metrics and system health at JPMorgan Chase (2022). Implemented solutions using React, Spring Boot, Grafana, and Prometheus to enhance operational visibility and reliability.'}
                    iconName={'laptop'} />
                <InfoCard
                    cardTitle={'Certifications'}
                    cardDescription={'AWS Solutions Architect Associate certified, demonstrating expertise in designing and deploying scalable, highly available systems on AWS cloud infrastructure.'}
                    iconName={'certificate'} />
            </SimpleGrid>
        </>
    )
}
