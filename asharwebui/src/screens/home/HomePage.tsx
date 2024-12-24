import {MainHeader} from "./home-components/MainHeader.tsx";
import {ItemCard} from "./home-components/ItemCard.tsx";
import {InfoCard} from "./home-components/InfoCard.tsx";
import {Hobbies} from "./home-components/Hobbies.tsx";

export default function Home(){
    return (
        <>
            <MainHeader/>

            {/*this is UT/UTD/Side project*/}
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '64px'}}>
                <ItemCard category={'Masters'} title={'Masters in Computer Science at UT Austin'} years={'(2024-2025)'}
                          image={'https://yt3.googleusercontent.com/ytc/AIdro_kc5vR0K17o85Cr-KT7zRincym_SDnnmtDvqDavIR7pBT8=s900-c-k-c0x00ffffff-no-rj'}/>
                <ItemCard category={'Bachelors'} title={'Bachelors in Computer Science at UTD'} years={'(2020-2023)'}
                          image={'https://play-lh.googleusercontent.com/RsB_VJH7T35Kk7YSHHG-snvEDYLyyajgWzkXsa6BHRL5dghwydIds8DG9tr8CdofyIk'}/>
                <ItemCard category={'My Projects'} title={'Side projects!'} years={''}
                          image={'https://static.vecteezy.com/system/resources/previews/007/642/438/non_2x/laptop-electronic-portable-computer-notebook-line-pop-art-potrait-logo-colorful-design-illustration-vector.jpg'}/>
            </div>

            {/*experience section*/}
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px'}}>
                <InfoCard/>
                <InfoCard/>
                <InfoCard/>
            </div>

            {/*hobbies section*/}
            <Hobbies/>
        </>
    )
}
