import { Title, Stack } from "@mantine/core";
import {HomeBlogCard} from "./HomeBlogCard.tsx";
import {TableOfContents} from "./TableOfContents.tsx";


export default function Blog(){

    return (
        <Stack gap="xl">
            <Title mb="md">Blog</Title>
            <TableOfContents/>
            <HomeBlogCard/>
        </Stack>
    )
}
