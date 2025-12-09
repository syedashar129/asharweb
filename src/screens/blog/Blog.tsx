import { Title, Stack } from "@mantine/core";
import {HomeBlogCard} from "./HomeBlogCard.tsx";
import {TableOfContents} from "./TableOfContents.tsx";


export default function Blog(){

    return (
        <Stack gap="md">
            <Title mb="sm" className="gradient-text" size="h1" fw={900}>Blog</Title>
            <TableOfContents/>
            <HomeBlogCard/>
        </Stack>
    )
}
