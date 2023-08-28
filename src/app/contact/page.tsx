// CORE
'use client';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

// COMPONENTS
import { PageHeader } from '@/components/reusable/page-title/page-title';
import { Button } from '@/components/reusable/button/button';

// ASSETS
import  * as PhoneIcon from '@/assets/svg/phone.svg';
import  * as MarkerIcon from '@/assets/svg/map-marker.svg';
import  * as EmailIcon from '@/assets/svg/email.svg';
import classes from './page.module.scss'

const page = () => {
    const { t } = useTranslation();

    return (
        <>
            <PageHeader header={t("NAV.contact")} />
            <div className={classes.wrapper}>
                <div className={classes.gridContainer}>
                    <div className={classes.gridContainer__gridImage}>
                        <img src='https://media.istockphoto.com/id/1444540661/pl/zdj%C4%99cie/pi%C5%82ka-no%C5%BCna-pi%C5%82ka-no%C5%BCna-i-u%C5%9Bcisk-d%C5%82oni-dru%C5%BCyny-na-boisku-przed-rozpocz%C4%99ciem-meczu-meczu-lub.jpg?s=2048x2048&w=is&k=20&c=YaqSkMhTxq39mVEPHuo4UPy88HK4a_fDaQQ2ELOwci8=' alt="niemamyprawautorskich" />
                    </div>
                    <div className={classes.gridContainer__gridMap}>
                        <img src="https://www.google.com/maps/d/thumbnail?mid=1vTtsqIyk7kbIPi8pffHUUAIV7ok&hl=pl" alt="temporary map" />
                    </div>
                    <div className={classes.gridContainer__gridItem}>
                            <h2>{t("CONTACT.howToFindUs")}</h2>
                            <p className={classes.gridContainer__gridItem__row}>
                                <Image priority src={MarkerIcon} alt="test" />
                                Aleja Zwycięstwa 51 80-213 Gdańsk
                            </p>
                            <p className={classes.gridContainer__gridItem__row}>
                                <Image priority src={PhoneIcon} alt="test" />
                                +48 608 528 501
                            </p>
                            <p className={classes.gridContainer__gridItem__row}>
                                <Image priority src={EmailIcon} alt="test" />
                                federacja.footgolf@gmail.com
                            </p>
                    </div>
                    <div className={classes.gridContainer__gridItem}>
                            <h2>{t("CONTACT.socialMedia")}</h2>
                            <p>{t("CONTACT.haveQuestion")}</p>
                            <p>{t("CONTACT.contactUs")}</p>
                            <Button content={t("CONTACT.write")} />
                    </div>
                </div>
            </div>
        </>  
    )
}

export default page;