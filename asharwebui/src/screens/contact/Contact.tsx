import {UserInfo} from "./UserInfo.tsx";
import {ContactInfo} from "./ContactInfo.tsx";

export default function Contact(){
    return (
        <>
            <UserInfo title={'Software Engineer'} name={'Syed Ashar'} email={'syedashar25@gmail.com'}/>
            <ContactInfo/>
        </>
    )
}