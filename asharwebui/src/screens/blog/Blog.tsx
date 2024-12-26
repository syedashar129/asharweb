import { Title } from "@mantine/core";
import {HomeBlogCard} from "./HomeBlogCard.tsx";
import {TableOfContents} from "./TableOfContents.tsx";


export default function Blog(){

    return (
        <>
            <Title>Blog</Title>
            <TableOfContents/>
            <HomeBlogCard/>
        </>
    )
}
