// REACT / NEXT

import { FC } from 'react';
import Image from 'next/image';

// COMPONENTS

import { PageHeader } from '@/components/reusable/page-title/page-title';

// STYLES / ASSETS

import  * as PhoneIcon from '@/assets/svg/phone.svg';
import  * as MarkerIcon from '@/assets/svg/map-marker.svg';
import  * as EmailIcon from '@/assets/svg/email.svg';
import styles from './page.module.scss'

interface pageProps {}

const page: FC<pageProps> =({}) => {
    return (
        <>
            <PageHeader header={"Kontakt z PFFG"} />
            <div className={styles.wrapper}>
                <div className={styles.gridContainer}>
                    <div className={styles.gridContainer__gridImage}>
                        <img src='https://media.istockphoto.com/id/1444540661/pl/zdj%C4%99cie/pi%C5%82ka-no%C5%BCna-pi%C5%82ka-no%C5%BCna-i-u%C5%9Bcisk-d%C5%82oni-dru%C5%BCyny-na-boisku-przed-rozpocz%C4%99ciem-meczu-meczu-lub.jpg?s=2048x2048&w=is&k=20&c=YaqSkMhTxq39mVEPHuo4UPy88HK4a_fDaQQ2ELOwci8=' alt="niemamyprawautorskich" />
                    </div>
                    <div>
                        <img src="https://www.google.com/maps/d/thumbnail?mid=1vTtsqIyk7kbIPi8pffHUUAIV7ok&hl=pl" alt="temporary map" />
                    </div>
                    <div className={styles.gridContainer__gridItem}>
                            <h2>Jak nas znaleźć?</h2>
                            <div className={styles.gridContainer__gridItem__row}>
                                <Image priority src={MarkerIcon} alt="test" />
                                Aleja Zwycięstwa 51 80-213 Gdańsk
                            </div>
                            <div className={styles.gridContainer__gridItem__row}>
                                <Image priority src={PhoneIcon} alt="test" />
                                +48 608 528 501
                            </div>
                            <div className={styles.gridContainer__gridItem__row}>
                                <Image priority src={EmailIcon} alt="test" />
                                federacja.footgolf@gmail.com
                            </div>
                    </div>
                    <div className={styles.gridContainer__gridItem}>
                            <h2>Social Media</h2>
                            <div>Masz pytanie?</div>
                            <div>Zaczep nas na Facebooku!</div>
                            <button>napisz</button>
                    </div>
                </div>
            </div>
        </>  
    )
}

export default page;