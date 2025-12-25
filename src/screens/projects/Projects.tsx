import { ProjectItem } from "./ProjectItem.tsx";
import { SimpleGrid, Container, Title } from '@mantine/core';

export default function Projects() {

    const projects = [
        {
            title: 'TikTok Automator',
            type: 'Automation Tool',
            description: 'An intelligent automation platform that generates and publishes educational coding content to TikTok. Designed to help developers stay current with programming trends and best practices through automated content creation and distribution.',
            badges: [
                { emoji: '🎬', label: 'TikTok API' },
                { emoji: '🐍', label: 'Python' },
                { emoji: '🤖', label: 'Automation' },
                { emoji: '📚', label: 'Content Creation' }
            ],
            imgSrc: 'https://loremflickr.com/800/600/tiktok,code,programming?lock=2',
            githubLink: ''
        },
        {
            title: 'TaskDo-Er',
            type: 'AI Agent',
            description: 'An intelligent financial management system leveraging RAG and LLM technologies to provide comprehensive answers about bills, budgeting, and financial data. Features autonomous agent capabilities to automatically manage financial tasks and deadlines.',
            badges: [
                { emoji: '🧠', label: 'LLM' },
                { emoji: '🔍', label: 'RAG' },
                { emoji: '🤖', label: 'AI Agent' },
                { emoji: '💰', label: 'Budgeting' }
            ],
            imgSrc: 'https://loremflickr.com/800/600/ai,automation,finance?lock=3',
            githubLink: ''
        },
        {
            title: 'Real Estate Property Appreciation + Rent Predictor',
            type: 'Web App',
            description: 'A predictive analytics platform that analyzes property listings from Zillow/Redfin to forecast rental income and property appreciation over 5 years. Utilizes scikit-learn machine learning models with regional trend analysis for accurate predictions.',
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
            description: 'An AI-powered financial analysis platform that delivers comprehensive stock insights through advanced data extraction and analysis. Provides detailed performance metrics, trend analysis, and investment potential assessments for informed decision-making.',
            badges: [
                { emoji: '🧠', label: 'AI/ML' },
                { emoji: '🐍', label: 'Python' },
                { emoji: '📊', label: 'Data Viz' },
                { emoji: '💰', label: 'Finance API' }
            ],
            imgSrc: 'https://loremflickr.com/800/600/finance,stock,chart?lock=1',
            githubLink: 'https://github.com/syedashar129/StockScope'
        },
        {
            title: 'FoodieConnect',
            type: 'Android Mobile App',
            description: 'A social mobile application that connects food enthusiasts. Enables users to discover new restaurants, share culinary experiences, and build a community of food lovers in their local area.',
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
            description: 'A modern, responsive portfolio website showcasing professional experience, technical projects, and skills. Built with React, TypeScript, and Mantine UI for optimal performance and user experience.',
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
        <Container size="xl" py="xl" px={{ base: 'xs', sm: 'md', md: 'xl' }}>
            <Title mb="xl" className="gradient-text" size="h1" fw={900}>Projects</Title>
            <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing={{ base: 'md', sm: 'lg' }}>
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
