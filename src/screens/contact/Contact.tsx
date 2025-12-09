import {UserInfo} from "./UserInfo.tsx";
import {ContactInfo} from "./ContactInfo.tsx";
import { Stack, Center } from "@mantine/core";

export default function Contact(){
    return (
        <Stack gap="xl">
            <ContactInfo/>
            <Center>
                <UserInfo title={'Software Engineer'} name={'Syed Ashar'} email={'syedashar25@gmail.com'}/>
            </Center>
        </Stack>
    )
}