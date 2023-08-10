// CORE
'use client';
import { useTranslation } from 'react-i18next';

// COMPONTENTS
import { Button } from '../reusable/button/button';
import { countryListData } from "./country-list";

// ASSETS
import classes from './auth.module.scss';

export const Auth = () => {
    const { t } = useTranslation();

    return (
        <>
            <div className={classes.auth}>  	
                <form className={classes.auth__form}>
                    <div className={classes.auth__basicInfo}>
                        <h2 aria-hidden="true" className={classes.auth__header} >{t('AUTH.basicInfo')}</h2>
                        <hr />
                        <div className={classes.auth__form__table}>
                            <label>{t('AUTH.email')}</label>
                            <input type="email" name="email" className={classes.auth__input} />

                            <label>{t('AUTH.password')}</label>
                            <input type="password" name="txt" className={classes.auth__input} />
                            

                            <label>{t('AUTH.gender')}</label>
                            <div className={classes.auth__radiogroup}>
                                <div>
                                    <input type="radio" id="html" name="gender" value="male" />
                                    <label htmlFor="html">{t('AUTH.male')}</label>
                                </div>
                                <div>
                                    <input type="radio" id="html" name="gender" value="female" />
                                    <label htmlFor="html">{t('AUTH.female')}</label>
                                </div>
                            </div>

                            <label>{t('AUTH.firstName')}</label>
                            <input type="text" name="txt" className={classes.auth__input} />

                            <label>{t('AUTH.lastName')}</label>
                            <input type="text" name="txt" className={classes.auth__input} />
                        </div>
                    </div>
                    <div>
                        <h2 aria-hidden="true" className={classes.auth__header} >{t('AUTH.contactInfo')}</h2>
                        <hr />
                        <div className={classes.auth__form__table}>
                            <label>{t('AUTH.streetAndNumber')}</label>
                            <input type="text" name="txt" className={classes.auth__input} />

                            <label>{t('AUTH.city')}</label>
                            <input type="text" name="txt" className={classes.auth__input} />
                            
                            <label>{t('AUTH.zip')}</label>
                            <input type="text" name="txt" className={classes.auth__input} />

                            <label>{t('AUTH.state')}</label>
                            <select className={classes.auth__input}>
                                <option>Wybierz</option>
                                {countryListData && countryListData.map((country) => {
                                    return (<option value={country.code}>{country.name}</option>)
                                })}
                            </select>

                            <label>{t('AUTH.phone')}</label>
                            <input type="text" name="txt" className={classes.auth__input} />
                        </div>
                    </div>
                    <div className={classes.auth__rowInfo}>
                        <h2 aria-hidden="true" className={classes.auth__header} >{t('AUTH.otherInfo')}</h2>
                        <hr />
                        <div className={classes.auth__form__table}>
                            <label>{t('AUTH.description')}</label>
                            <textarea name="description" cols={40} rows={5}></textarea>
                        </div>
                    </div>
                    <div className={classes.auth__rowInfo}>
                        <h2 aria-hidden="true" className={classes.auth__header} >{t('AUTH.approvals')}</h2>
                        <hr />
                        <div className={classes.auth__form__table}>
                           <input type="checkbox" />
                            <p>Wyrażam zgodę xYZ Wyrażam zgodę xYZ Wyrażam zgodę xYZ Wyrażam zgodę xYZ Wyrażam zgodę xYZ Wyrażam zgodę xYZ Wyrażam zgodę xYZ Wyrażam zgodę xYZ 
                            Wyrażam zgodę xYZ Wyrażam zgodę xYZ Wyrażam zgodę xYZ Wyrażam zgodę xYZ Wyrażam zgodę xYZ Wyrażam zgodę xYZ Wyrażam zgodę xYZ Wyrażam zgodę xYZ 
                            </p>
                        </div>
                        <div className={classes.auth__form__table}>
                        <input type="checkbox" />
                            <p>Wyrażam zgodę xYZ Wyrażam zgodę xYZ Wyrażam zgodę xYZ Wyrażam zgodę xYZ Wyrażam zgodę xYZ Wyrażam zgodę xYZ Wyrażam zgodę xYZ Wyrażam zgodę xYZ 
                            Wyrażam zgodę xYZ Wyrażam zgodę xYZ Wyrażam zgodę xYZ Wyrażam zgodę xYZ Wyrażam zgodę xYZ Wyrażam zgodę xYZ Wyrażam zgodę xYZ Wyrażam zgodę xYZ 
                            </p>
                        </div>
                    </div>
                    <div className={classes.auth__buttonContainer}>
                        <Button content={t('AUTH.registration')} />
                    </div>
                </form>
            </div>
        </>
    )
}