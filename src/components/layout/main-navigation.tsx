import Link from 'next/link';

import classes from './main-navigation.module.scss';
import logo from '@/assets/logo.jpg';

export const MainNavigation = () => {
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
                        <li className={classes.navigation__mobile__item}><Link href="#" className={classes.navigation__mobile__link}>Historia 1</Link></li>
                        <li className={classes.navigation__mobile__item}><Link href="#" className={classes.navigation__mobile__link}>Historia 2</Link></li>
                        <li className={classes.navigation__mobile__item}><Link href="#" className={classes.navigation__mobile__link}>Zarząd</Link></li>
                        <li className={classes.navigation__mobile__item}><Link href="#" className={classes.navigation__mobile__link}>Statut</Link></li>
                        <li className={classes.navigation__mobile__item}><Link href="#" className={classes.navigation__mobile__link}>Liga Footgolfa 2023</Link></li>
                        <li className={classes.navigation__mobile__item}><Link href="#" className={classes.navigation__mobile__link}>Polish Open 2023</Link></li>
                        <li className={classes.navigation__mobile__item}><Link href="#" className={classes.navigation__mobile__link}>Fifa world cup 2023</Link></li>
                        <li className={classes.navigation__mobile__item}><Link href="#" className={classes.navigation__mobile__link}>Profile Zawodników</Link></li>
                        <li className={classes.navigation__mobile__item}><Link href="#" className={classes.navigation__mobile__link}>Zapisy Fifa</Link></li>
                        <li className={classes.navigation__mobile__item}><Link href="#" className={classes.navigation__mobile__link}>Regulaminy</Link></li>
                        <li className={classes.navigation__mobile__item}><Link href="#" className={classes.navigation__mobile__link}>Logowanie</Link></li>

                        </ul>
                </nav>
            </div>
            <div className={classes.navigation__menu}>
                <div className={classes.navigation__menu__item}>
                    <a>Federacja</a>
                    <div className={classes.navigation__menu__dropdown}>
                        <div className={classes.navigation__menu__dropdown__item}>
                            <a>Historia</a>
                            <div className={classes.navigation__menu__horizontalDropdown}>
                                <div className={classes.navigation__menu__horizontalDropdown__item}>
                                    <Link href="#">Item 1</Link>
                                </div>
                                <div className={classes.navigation__menu__horizontalDropdown__item}>
                                    <Link href="#">Item 2</Link>
                                </div>
                                <div className={classes.navigation__menu__horizontalDropdown__item}>
                                    <Link href="#">Item 3</Link>
                                </div>
                                <div className={classes.navigation__menu__horizontalDropdown__item}>
                                    <Link href="#">Item 4</Link>
                                </div>
                            </div>
                        </div>
                        <div className={classes.navigation__menu__dropdown__item}>
                            <Link href="#">Zarząd</Link>
                        </div>
                        <div className={classes.navigation__menu__dropdown__item}>
                            <Link href="#">Statut</Link>
                        </div>
                    </div>
                </div>
                <div className={classes.navigation__menu__item}>
                    <a>Rozgrywki</a>
                    <div className={classes.navigation__menu__dropdown}>
                        <div className={classes.navigation__menu__dropdown__item}>
                            <a>Liga Postołowo 2023</a>
                            <div className={classes.navigation__menu__horizontalDropdown}>
                                <div className={classes.navigation__menu__horizontalDropdown__item}>
                                    <Link href="#">Item 1</Link>
                                </div>
                                <div className={classes.navigation__menu__horizontalDropdown__item}>
                                    <Link href="#">Item 2</Link>
                                </div>
                                <div className={classes.navigation__menu__horizontalDropdown__item}>
                                    <Link href="#">Item 3</Link>
                                </div>
                            </div>
                        </div>
                        <div className={classes.navigation__menu__dropdown__item}>
                            <Link href="#">Polish Open 2023</Link>
                        </div>
                        <div className={classes.navigation__menu__dropdown__item}>
                            <Link href="#">Fifa world Cup 2023</Link>
                        </div>
                    </div>
                </div>
                <div className={classes.navigation__menu__item}>
                    <a>Kadra</a>
                    <div className={classes.navigation__menu__dropdown}>
                        <div className={classes.navigation__menu__dropdown__item}>
                            <Link href="#">Profile Zawodników</Link>
                        </div>
                        <div className={classes.navigation__menu__dropdown__item}>
                            <Link href="#">Lista</Link>
                        </div>
                    </div>
                </div>
                <div className={classes.navigation__menu__item}>
                    <a>Zapisy i Regulamin</a>
                    <div className={classes.navigation__menu__dropdown}>
                        <div className={classes.navigation__menu__dropdown__item}>
                            <Link href="#">Zapisz FIFA</Link>
                        </div>
                        <div className={classes.navigation__menu__dropdown__item}>
                            <Link href="#">Regulamin Ligi 2023</Link>
                        </div>
                        <div className={classes.navigation__menu__dropdown__item}>
                            <Link href="#">Regulamin Polish Open 2023</Link>
                        </div>
                    </div>
                </div>
                <div className={classes.navigation__menu__item}>
                    <Link href="#">Logowanie</Link>
                </div>
            </div>
        </div>
    )
}