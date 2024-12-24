import { Title } from "@mantine/core";
import {UserInfo} from "./UserInfo.tsx";

export default function ContactMe(){
    return (
        <>
            <Title>Contact me</Title>
            <UserInfo title={'Software Engineer'} name={'Syed Ashar'} email={'syedashar25@gmail.com'}/>
        </>
    )
}