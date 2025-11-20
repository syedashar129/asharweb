import { ProjectItem } from "./ProjectItem.tsx";
import { SimpleGrid, Container } from '@mantine/core';

export default function Projects() {

    const projects = [
        {
            title: 'AshFantasy',
            type: 'Discord Bot',
            description: 'A fantasy football Discord bot that sends real-time notifications for big plays, provides injury updates throughout the week, and delivers major headlines using ESPN data. Keeps your league up to date effortlessly.',
            badges: [
                { emoji: '🤖', label: 'Discord.js' },
                { emoji: '🏈', label: 'ESPN API' },
                { emoji: '⚡', label: 'Node.js' },
                { emoji: '☁️', label: 'AWS Lambda' }
            ],
            imgSrc: 'https://loremflickr.com/800/600/football,stadium?lock=1',
            githubLink: ''
        },
        {
            title: 'Real Estate Property Appreciation + Rent predictor',
            type: 'Web App',
            description: 'An application that allows you to enter a house posting from Zillow/Redfin and see its projected growth over the next 5 years in terms of rent and house value. Provides comparisons based on region and latest trends using a scikit-learn prediction model.',
            badges: [
                { emoji: '📚', label: 'React' },
                { emoji: '📈', label: 'scikit-learn' },
                { emoji: '🏠', label: 'Zillow API' },
                { emoji: '👨‍💻', label: 'Kaggle Dataset' }
            ],
            imgSrc: 'https://images.squarespace-cdn.com/content/v1/5e6e7c66ddeb2e162edb8cf4/1625591303235-8JO5E94PA2WI652O5UF9/Rental-Property.jpg',
            githubLink: ''
        },
        {
            title: 'StockScope',
            type: 'AI Analysis Tool',
            description: 'An AI-powered tool that provides deep insights into stocks based on their ticker. It extracts and analyzes financial data to give you a comprehensive "scope" of the stock\'s performance and potential.',
            badges: [
                { emoji: '🧠', label: 'AI/ML' },
                { emoji: '🐍', label: 'Python' },
                { emoji: '📊', label: 'Data Viz' },
                { emoji: '💰', label: 'Finance API' }
            ],
            imgSrc: 'https://loremflickr.com/800/600/finance,stock,chart?lock=1',
            githubLink: ''
        },
        {
            title: 'FoodieConnect',
            type: 'Android Mobile App',
            description: 'A mobile application connecting food lovers. Discover new places, share your culinary experiences, and connect with other foodies in your area.',
            badges: [
                { emoji: '📱', label: 'Android' },
                { emoji: '☕', label: 'Java' },
                { emoji: '🔥', label: 'Firebase' },
            ],
            imgSrc: 'https://cdn.dribbble.com/users/1615584/screenshots/15710288/media/7844a209562d350a784527d0e6e230a5.jpg?resize=400x300&vertical=center',
            githubLink: ''
        },
        {
            title: 'Personal Website',
            type: 'Web App',
            description: 'This website! A place to showcase my experience, projects, and skills. Built with modern web technologies for high performance and great aesthetics.',
            badges: [
                { emoji: '📚', label: 'React' },
                { emoji: '🔐', label: 'Typescript' },
                { emoji: '🎨', label: 'Mantine' },
                { emoji: '⚡️', label: 'Vite' },
            ],
            imgSrc: 'https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_1280.jpg',
            githubLink: 'https://github.com/syedashar129/asharweb'
        }
    ];

    return (
        <Container size="xl" py="xl">
            <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
                {projects.map((project, index) => (
                    <ProjectItem
                        key={index}
                        projTitle={project.title}
                        type={project.type}
                        projDescription={project.description}
                        badges={project.badges}
                        imgSrc={project.imgSrc}
                        githubLink={project.githubLink}
                    />
                ))}
            </SimpleGrid>
        </Container>
    )
}
