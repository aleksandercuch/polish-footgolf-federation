// CORE
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

// ASSETS
import classes from './main-navigation.module.scss';
import logo from '@/assets/logo.jpg';

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
                        <li className={classes.navigation__mobile__item}><Link href="#" className={classes.navigation__mobile__link}>{t("NAV.homePage")}</Link></li>
                        <li className={classes.navigation__mobile__item}><Link href="/trophies" className={classes.navigation__mobile__link}>{t("NAV.trophies")}</Link></li>
                        <li className={classes.navigation__mobile__item}><Link href="#" className={classes.navigation__mobile__link}>{t("NAV.pastChampions")}</Link></li>
                        <li className={classes.navigation__mobile__item}><Link href="/management" className={classes.navigation__mobile__link}>{t("NAV.management")}</Link></li>
                        <li className={classes.navigation__mobile__item}><Link href="#" className={classes.navigation__mobile__link}>{t("NAV.statue")}</Link></li>
                        <li className={classes.navigation__mobile__item}><Link href="#" className={classes.navigation__mobile__link}>{t("NAV.postolowoLeauge")}</Link></li>
                        <li className={classes.navigation__mobile__item}><Link href="#" className={classes.navigation__mobile__link}>{t("NAV.polishOpen")}</Link></li>
                        <li className={classes.navigation__mobile__item}><Link href="#" className={classes.navigation__mobile__link}>{t("NAV.fifaWorldCup")}</Link></li>
                        <li className={classes.navigation__mobile__item}><Link href="#" className={classes.navigation__mobile__link}>{t("NAV.playerProfiles")}</Link></li>
                        <li className={classes.navigation__mobile__item}><Link href="#" className={classes.navigation__mobile__link}>{t("NAV.recordsFifa")}</Link></li>
                        <li className={classes.navigation__mobile__item}><Link href="#" className={classes.navigation__mobile__link}>{t("NAV.regulations")}</Link></li>
                        <li className={classes.navigation__mobile__item}><Link href="#" className={classes.navigation__mobile__link}>{t("NAV.login")}</Link></li>
                    </ul>
                </nav>
            </div>
            <div className={classes.navigation__menu}>
                <div className={classes.navigation__menu__item}>
                    <Link href="/">{t("NAV.homePage")}</Link>
                </div>
                <div className={classes.navigation__menu__item}>
                    <a>{t("NAV.federation")}</a>
                    <div className={classes.navigation__menu__dropdown}>
                        <div className={classes.navigation__menu__dropdown__item}>
                            <a>{t("NAV.history")}</a>
                            <div className={classes.navigation__menu__horizontalDropdown}>
                                <div className={classes.navigation__menu__horizontalDropdown__item}>
                                    <Link href="/trophies">{t('NAV.trophies')}</Link>
                                </div>
                                <div className={classes.navigation__menu__horizontalDropdown__item}>
                                    <Link href="/pastChampions">{t('NAV.pastChampions')}</Link>
                                </div>
                            </div>
                        </div>
                        <div className={classes.navigation__menu__dropdown__item}>
                            <Link href="/management">{t('NAV.management')}</Link>
                        </div>
                        <div className={classes.navigation__menu__dropdown__item}>
                            <Link href="#">{t("NAV.statue")}</Link>
                        </div>
                    </div>
                </div>
                <div className={classes.navigation__menu__item}>
                    <a>{t("NAV.games")}</a>
                    <div className={classes.navigation__menu__dropdown}>
                        <div className={classes.navigation__menu__dropdown__item}>
                            <a>{t("NAV.postolowoLeauge")}</a>
                            <div className={classes.navigation__menu__horizontalDropdown}>
                                <div className={classes.navigation__menu__horizontalDropdown__item}>
                                    <Link href="#">{t("NAV.createGame")}</Link>
                                </div>
                                <div className={classes.navigation__menu__horizontalDropdown__item}>
                                    <Link href="#">{t("NAV.presentTables")}</Link>
                                </div>
                                <div className={classes.navigation__menu__horizontalDropdown__item}>
                                    <Link href="#">{t("NAV.roundsChampions")}</Link>
                                </div>
                            </div>
                        </div>
                        <div className={classes.navigation__menu__dropdown__item}>
                            <Link href="#">{t("NAV.polishOpen")}</Link>
                        </div>
                        <div className={classes.navigation__menu__dropdown__item}>
                            <Link href="#">{t("NAV.fifaWorldCup")}</Link>
                        </div>
                    </div>
                </div>
                <div className={classes.navigation__menu__item}>
                    <a>{t("NAV.cadre")}</a>
                    <div className={classes.navigation__menu__dropdown}>
                        <div className={classes.navigation__menu__dropdown__item}>
                            <Link href="#">{t("NAV.playerProfiles")}</Link>
                        </div>
                        <div className={classes.navigation__menu__dropdown__item}>
                            <Link href="#">{t("NAV.list")}</Link>
                        </div>
                    </div>
                </div>
                <div className={classes.navigation__menu__item}>
                    <a>{t("NAV.recordsAndRegulations")}</a>
                    <div className={classes.navigation__menu__dropdown}>
                        <div className={classes.navigation__menu__dropdown__item}>
                            <Link href="#">{t("NAV.recordsFifa")}</Link>
                        </div>
                        <div className={classes.navigation__menu__dropdown__item}>
                            <Link href="#">{t("NAV.regulationsLeauge")}</Link>
                        </div>
                        <div className={classes.navigation__menu__dropdown__item}>
                            <Link href="#">{t("NAV.regulationsPolishOpen")}</Link>
                        </div>
                    </div>
                </div>
                <div className={classes.navigation__menu__item}>
                    <Link href="#">{t("NAV.gallery")}</Link>
                </div>
                <div className={classes.navigation__menu__item}>
                    <Link href="/contact">{t("NAV.contact")}</Link>
                </div>
                <div className={classes.navigation__menu__item}>
                    <Link href="#">{t("NAV.polishFields")}</Link>
                </div>
            </div>
        </div>
    )
}