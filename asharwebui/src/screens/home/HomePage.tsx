import {MainHeader} from "./home-components/MainHeader.tsx";
import {ItemCard} from "./home-components/ItemCard.tsx";

export default function Home(){
    return (
        <>
            <MainHeader/>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                <ItemCard category={'Masters'} title={'Masters in Computer Science at UT Austin'} image={'https://yt3.googleusercontent.com/ytc/AIdro_kc5vR0K17o85Cr-KT7zRincym_SDnnmtDvqDavIR7pBT8=s900-c-k-c0x00ffffff-no-rj'}/>
                <ItemCard category={'Bachelors'} title={'Bachelors in Computer Science at UTD'} image={'https://play-lh.googleusercontent.com/RsB_VJH7T35Kk7YSHHG-snvEDYLyyajgWzkXsa6BHRL5dghwydIds8DG9tr8CdofyIk'}/>
                <ItemCard category={'My Projects'} title={'Side projects!'} image={'https://static.vecteezy.com/system/resources/previews/007/642/438/non_2x/laptop-electronic-portable-computer-notebook-line-pop-art-potrait-logo-colorful-design-illustration-vector.jpg'}/>
            </div>
        </>
    )
}
