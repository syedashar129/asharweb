import {UserInfo} from "./UserInfo.tsx";
import {ContactInfo} from "./ContactInfo.tsx";
import { Title, Stack } from "@mantine/core";

export default function Contact(){
    return (
        <Stack gap="xl">
            <Title mb="md">Contact</Title>
            <UserInfo title={'Software Engineer'} name={'Syed Ashar'} email={'syedashar25@gmail.com'}/>
            <ContactInfo/>
        </Stack>
    )
}