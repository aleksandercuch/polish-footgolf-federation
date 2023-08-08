// CORE
'use client';
import { useTranslation } from 'react-i18next';

// COMPONTENTS
import { Button } from '../reusable/button/button';

// ASSETS
import classes from './auth.module.scss';

export const Auth = () => {
    const { t } = useTranslation();

    return (
        <>
            <div className={classes.auth}>  	
                <input type="checkbox" id="chk" className={classes.auth__checkbox} aria-hidden="true" />
                    <div className={classes.auth__signup}>
                        <form className={classes.auth__form}>
                            <label  htmlFor="chk" aria-hidden="true" className={classes.auth__label} >{t('AUTH.registration')}</label>
                            <input type="text" name="txt" placeholder={t('AUTH.userName')} className={classes.auth__input} />
                            <input type="email" name="email" placeholder={t('AUTH.email')} className={classes.auth__input} />
                            <input type="password" name="pswd" placeholder={t('AUTH.password')} className={classes.auth__input} />
                            <Button content={t('AUTH.registration')} />
                        </form>
                    </div>
                    <div className={classes.auth__login}>
                        <form className={classes.auth__form}>
                            <label htmlFor="chk" aria-hidden="true" className={classes.auth__label} >{t('AUTH.login')}</label>
                            <input type="email" name="email" placeholder={t('AUTH.email')} className={classes.auth__input} />
                            <input type="password" name="pswd" placeholder={t('AUTH.password')} className={classes.auth__input} />
                            <Button content={t('AUTH.login')} />
                        </form>
                    </div>
            </div>
        </>
    )
}