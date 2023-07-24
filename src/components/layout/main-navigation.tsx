import Link from 'next/link';

import classes from './main-navigation.module.scss';
import logo from '@/assets/logo.jpg';

import { useTranslation } from 'react-i18next';

export const MainNavigation = () => {
    const { t } = useTranslation();

    return (
        <div className={classes.navigation}>
            <div>
                <img src={logo.src} alt="logo failure" />
            </div>
            <div className={classes.navigation__mobile}>
                <input type="checkbox" className={classes.navigation__mobile__checkbox} id="navi-toggle" />

                <label htmlFor="navi-toggle" className={classes.navigation__mobile__button}>
                    <span className={classes.navigation__mobile__icon}>&nbsp;</span>
                </label>

                <div className={classes.navigation__mobile__background}>&nbsp;</div>

                <nav className={classes.navigation__mobile__nav}>
                    <ul className={classes.navigation__mobile__list}>
                        <li className={classes.navigation__mobile__item}><Link href="#" className={classes.navigation__mobile__link}>{t("navHistoryBarFirst")}</Link></li>
                        <li className={classes.navigation__mobile__item}><Link href="#" className={classes.navigation__mobile__link}>{t("navHistoryBarSecond")}</Link></li>
                        <li className={classes.navigation__mobile__item}><Link href="#" className={classes.navigation__mobile__link}>{t("management")}</Link></li>
                        <li className={classes.navigation__mobile__item}><Link href="#" className={classes.navigation__mobile__link}>{t("statue")}</Link></li>
                        <li className={classes.navigation__mobile__item}><Link href="#" className={classes.navigation__mobile__link}>{t("postolowoLeauge")}</Link></li>
                        <li className={classes.navigation__mobile__item}><Link href="#" className={classes.navigation__mobile__link}>{t("polishOpen")}</Link></li>
                        <li className={classes.navigation__mobile__item}><Link href="#" className={classes.navigation__mobile__link}>{t("fifaWorldCup")}</Link></li>
                        <li className={classes.navigation__mobile__item}><Link href="#" className={classes.navigation__mobile__link}>{t("playerProfiles")}</Link></li>
                        <li className={classes.navigation__mobile__item}><Link href="#" className={classes.navigation__mobile__link}>{t("recordsFifa")}</Link></li>
                        <li className={classes.navigation__mobile__item}><Link href="#" className={classes.navigation__mobile__link}>{t("regulations")}</Link></li>
                        <li className={classes.navigation__mobile__item}><Link href="#" className={classes.navigation__mobile__link}>{t("login")}</Link></li>

                        </ul>
                </nav>
            </div>
            <div className={classes.navigation__menu}>
                <div className={classes.navigation__menu__item}>
                    <a>{t("federation")}</a>
                    <div className={classes.navigation__menu__dropdown}>
                        <div className={classes.navigation__menu__dropdown__item}>
                            <a>{t("history")}</a>
                            <div className={classes.navigation__menu__horizontalDropdown}>
                                <div className={classes.navigation__menu__horizontalDropdown__item}>
                                    <Link href="#">{t('navHistoryBarFirst')}</Link>
                                </div>
                                <div className={classes.navigation__menu__horizontalDropdown__item}>
                                    <Link href="#">{t('navHistoryBarSecond')}</Link>
                                </div>
                                <div className={classes.navigation__menu__horizontalDropdown__item}>
                                    <Link href="#">{t('navHistoryBarThird')}</Link>
                                </div>
                                <div className={classes.navigation__menu__horizontalDropdown__item}>
                                    <Link href="#">{t('navHistoryBarFourth')}</Link>
                                </div>
                            </div>
                        </div>
                        <div className={classes.navigation__menu__dropdown__item}>
                            <Link href="#">{t('management')}</Link>
                        </div>
                        <div className={classes.navigation__menu__dropdown__item}>
                            <Link href="#">{t("statue")}</Link>
                        </div>
                    </div>
                </div>
                <div className={classes.navigation__menu__item}>
                    <a>{t("games")}</a>
                    <div className={classes.navigation__menu__dropdown}>
                        <div className={classes.navigation__menu__dropdown__item}>
                            <a>{t("postolowoLeauge")}</a>
                            <div className={classes.navigation__menu__horizontalDropdown}>
                                <div className={classes.navigation__menu__horizontalDropdown__item}>
                                    <Link href="#">{t("leaugeItemOne")}</Link>
                                </div>
                                <div className={classes.navigation__menu__horizontalDropdown__item}>
                                    <Link href="#">{t("leaugeItemTwo")}</Link>
                                </div>
                                <div className={classes.navigation__menu__horizontalDropdown__item}>
                                    <Link href="#">{t("leaugeItemThree")}</Link>
                                </div>
                            </div>
                        </div>
                        <div className={classes.navigation__menu__dropdown__item}>
                            <Link href="#">{t("polishOpen")}</Link>
                        </div>
                        <div className={classes.navigation__menu__dropdown__item}>
                            <Link href="#">{t("fifaWorldCup")}</Link>
                        </div>
                    </div>
                </div>
                <div className={classes.navigation__menu__item}>
                    <a>{t("cadre")}</a>
                    <div className={classes.navigation__menu__dropdown}>
                        <div className={classes.navigation__menu__dropdown__item}>
                            <Link href="#">{t("playerProfiles")}</Link>
                        </div>
                        <div className={classes.navigation__menu__dropdown__item}>
                            <Link href="#">{t("list")}</Link>
                        </div>
                    </div>
                </div>
                <div className={classes.navigation__menu__item}>
                    <a>{t("recordsAndRegulations")}</a>
                    <div className={classes.navigation__menu__dropdown}>
                        <div className={classes.navigation__menu__dropdown__item}>
                            <Link href="#">{t("recordsFifa")}</Link>
                        </div>
                        <div className={classes.navigation__menu__dropdown__item}>
                            <Link href="#">{t("regulationsLeauge")}</Link>
                        </div>
                        <div className={classes.navigation__menu__dropdown__item}>
                            <Link href="#">{t("regulationsPolishOpen")}</Link>
                        </div>
                    </div>
                </div>
                <div className={classes.navigation__menu__item}>
                    <Link href="#">{t("login")}</Link>
                </div>
            </div>
        </div>
    )
}