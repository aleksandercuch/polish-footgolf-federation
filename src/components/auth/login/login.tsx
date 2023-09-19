// CORE
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import ReactDOM from 'react-dom';
import Image from 'next/image';
import { useState } from 'react';

// ASSETS
import classes from './login.module.scss';
import  * as CrossIcon from '@/assets/svg/x-white.svg';

// COMPONENTS
import { Button } from '@/components/reusable/button/button';

// CONTEXT
import { UserAuth } from '@/context/auth-context';

// API
import { sendPasswordResetEmail } from 'firebase/auth';
import auth from '../../../../firebase/config/clientApp';

export const Login = () => {
    const { t } = useTranslation();
    const { modal, handleModal, signIn } = UserAuth();
    const [isError, setIsError] = useState(false);
    const [changePassword, setIsChangePassword] = useState(false);
    
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            emailToChangePassword: ''
        },
        onSubmit: values => {
            if (changePassword) {
                sendResetPasswordEmail(values.emailToChangePassword);
            } else {
                signInWithEmail(values.email, values.password);
            }
        },
    });

    const signInWithEmail = (email: string, password: string) => {
        signIn(email, password)
        .then(() => {
            handleModal("This is component modal content");
        })
        .catch((error: any) => {
            console.log("Login error!");
            !isError && setIsError(true);
        });
    }
    const sendResetPasswordEmail = (email: string) => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                setIsChangePassword(false);
                isError && setIsError(false);
                alert(t("AUTH.resetEmailSent"));
            })
            .catch((error) => {
                !isError && setIsError(true);
            });
    }

    return (
        <div className={classes.form}>  	
            <form className={classes.form__form} onSubmit={formik.handleSubmit}>
                <div>
                    <div className={classes.form__closePanel}>
                        <h2 aria-hidden="true" className={classes.form__header} >{changePassword ? t('AUTH.changePassword') : t('AUTH.login')}</h2>
                        <Image priority src={CrossIcon} alt="test" onClick={() => handleModal("This is component modal content")} />
                    </div>
                    <hr />
                    <div className={classes.form__table}>
                        {changePassword ? (
                            <>
                                <label>
                                    {t('AUTH.email')}
                                </label>
                                <input 
                                    type="email" 
                                    name="emailToChangePassword" 
                                    className={classes.form__input} 
                                    onChange={formik.handleChange} 
                                    onBlur={formik.handleBlur}
                                    value={formik.values.emailToChangePassword} 
                                />
                            </>
                        ) : (
                            <>
                                <label>
                                    {t('AUTH.email')}
                                </label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    className={classes.form__input} 
                                    onChange={formik.handleChange} 
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email} 
                                />

                                <label>
                                    {t('AUTH.password')}
                                </label>
                                <input 
                                    type="password" 
                                    name="password" 
                                    className={classes.form__input}
                                    onChange={formik.handleChange} 
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password}  
                                />
                            </>
                        )}
                    </div>
                    <>
                        {isError && (
                            <div className={classes.form__errorMessage}>
                                <p>{t("ERRORS.wrongLoginData")}</p>
                            </div>
                        )}
                    </>
                    <div className={classes.form__buttonContainer}>
                    {changePassword ? (
                        <>
                            <Button content={t('AUTH.send')} />
                            <p className={classes.form__buttonContainer__forgotPassword} onClick={() => setIsChangePassword(false)}>{t("AUTH.returnToLogin")}</p>
                        </>
                    ) :(
                        <>
                            <Button content={t('AUTH.logIN')} />
                            <p className={classes.form__buttonContainer__forgotPassword} onClick={() => setIsChangePassword(true)}>{t("AUTH.forgotPassword")}</p>
                        </>
                    )}
                        
                    </div>
                </div>
            </form>
        </div>
    )
}