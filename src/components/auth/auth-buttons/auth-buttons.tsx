// CORE
'use client';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { useRouter } from 'next/navigation'

// ASSETS
import classes from './auth-buttons.module.scss';

// CONTEXT
import { UserAuth } from '@/context/auth-context';

export const AuthButtons = () => {
    const { t } = useTranslation();
    const { handleModal, user, logout } = UserAuth();
    const router = useRouter();

    const handleLogout = async () => {
        logout().then(() => {
            router.push('/')
        })
        .catch((error: any) => {
            console.log(error);
        });
        
    }

    return (
        <>
            <ul className={classes.authButtons}>
                {user.email ? (
                    <>
                        <li>
                            <button className={classes.authButtons__button}>
                                <span className={classes.authButtons__button__text}>{user.email}</span>
                            </button>
                        </li>
                        <li>
                            <button className={classes.authButtons__button}>
                                <span className={classes.authButtons__button__text} onClick={handleLogout}>Wyloguj</span>
                            </button>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <button className={classes.authButtons__button} onClick={() => handleModal("This is component modal content")}>
                                <span className={classes.authButtons__button__text}>{t("AUTH.login")}</span>
                            </button>
                        </li>
                        <li>
                            <button className={classes.authButtons__button} >
                                <Link href="/auth" className={classes.authButtons__button__text}>{t("AUTH.registration")}</Link>
                            </button>
                        </li>
                    </>
                )}
                
            </ul>
        </>
    )
}