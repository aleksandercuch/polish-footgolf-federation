'use client';

// CORE
import { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

// ASSETS
import classes from './page.module.scss'
import  * as DownloadIcon from '@/assets/svg/download.svg';

//COMPONENTS
import { PageHeader } from '@/components/reusable/page-title/page-title';

interface pageProps {}

const page: FC<pageProps> =({}) => {
    const { t } = useTranslation();

    return (
        <>
            <PageHeader header={t("NAV.statue")} />
            <div className={classes.statue}>
                <div className={classes.image}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/pffg-8233f.appspot.com/o/Statue%2Fcertificate.png?alt=media&token=610d2ff2-73ac-4aaa-9113-877196523f22" alt="Database Error" />
                </div>
                <div className={classes.info}>  	
                    <input type="checkbox" id="chk" className={classes.info__checkbox} aria-hidden="true" />
                    <div className={classes.info__details}>
                        <div className={classes.info__wrapper}>
                            <div className={classes.info__header}>
                                <label  htmlFor="chk" aria-hidden="true" className={classes.info__label} >{t('STATUE.data')}</label>
                            </div>
                            <div className={classes.info__wrapper__table}>
                                <div>KRS</div>
                                <div>0000632232</div>

                                <div>NIP</div>
                                <div>9571088145</div>

                                <div>REGON</div>
                                <div>365181272</div>

                                <div>{t("STATUE.address")}</div>
                                <div>Al. Zwycięstwa 51, 80-213 Gdańsk, Polska</div>

                                <div>{t("STATUE.legalForm")}</div>
                                <div>Stowarzyszenie</div>

                                <div>{t("STATUE.registrationDate")}</div>
                                <div>17 sierpnia 2016 r.</div>

                                <div>{t("STATUE.organizationSize")}</div>
                                <div>NGO</div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.info__download}>
                        <div className={classes.info__wrapper}>
                            <label htmlFor="chk" aria-hidden="true" className={classes.info__label} >{t('STATUE.download')}</label>
                            <a className={classes.info__button} target="_blank" href="https://firebasestorage.googleapis.com/v0/b/pffg-8233f.appspot.com/o/Statue%2FStatut.pdf?alt=media&token=362b01d2-0fd9-443c-9985-d9e832dbcaa4">
                                <Image priority src={DownloadIcon} alt="download icon" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page;