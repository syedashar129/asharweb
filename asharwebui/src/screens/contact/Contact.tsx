import { Title } from "@mantine/core";
import {UserInfo} from "./UserInfo.tsx";
import {ContactInfo} from "./ContactInfo.tsx";

export default function Contact(){
    return (
        <>
            <Title>Contact me</Title>
            <UserInfo title={'Software Engineer'} name={'Syed Ashar'} email={'syedashar25@gmail.com'}/>
            <ContactInfo/>
        </>
    )
}