// CORE
'use client';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import cn from "classnames";

// COMPONTENTS
import { Button } from '../reusable/button/button';
import { countryListData } from "./country-list";
//import FormikControl from './FormikControl';

// ASSETS
import classes from './register.module.scss';

export const Register = () => {
    const { t } = useTranslation();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            gender: '',
            firstName: '',
            lastName: '',
            street: '',
            city: '',
            zip: '',
            state: '',
            phone: '',
            description: '',
            checkbox1: false,
            checkbox2: false
        },
        onSubmit: values => {
            console.log('AAAAAA values', values);
        },
        validationSchema: Yup.object({
            email: Yup.string().email(t('ERRORS.invalidEmail')).required(t('ERRORS.required')),
            password: Yup.string().required(t('ERRORS.required')),
            gender: Yup.string().required(t('ERRORS.required')),
            firstName: Yup.string().required(t('ERRORS.required')),
            lastName: Yup.string().required(t('ERRORS.required')),
            street: Yup.string().required(t('ERRORS.required')),
            city: Yup.string().required(t('ERRORS.required')),
            zip: Yup.string().required(t('ERRORS.required')),
            state: Yup.string().required(t('ERRORS.required')),
            country: Yup.string().required(t('ERRORS.required')),
            phone: Yup.string().required(t('ERRORS.required')),
            checkbox1: Yup.bool().oneOf([true], t('ERRORS.required')),
            checkbox2: Yup.bool().oneOf([true], t('ERRORS.required')),
        }),
    })

    console.log(formik.errors);

    return (
        <>
            <div className={classes.auth}>  	
                <form className={classes.auth__form} onSubmit={formik.handleSubmit}>
                    <div className={classes.auth__basicInfo}>
                        <h2 aria-hidden="true" className={classes.auth__header} >{t('AUTH.basicInfo')}</h2>
                        <hr />
                        <div className={classes.auth__form__table}>
                            <label>{t('AUTH.email')}</label>
                            <input 
                                type="email" 
                                name="email" 
                                className={ cn(classes.auth__input, formik.touched.email && formik.errors.email && classes["auth__input--error"])} 
                                onChange={formik.handleChange} 
                                onBlur={formik.handleBlur}
                                value={formik.values.email} 
                            />

                            <label>{t('AUTH.password')}</label>
                            <input 
                                type="password" 
                                name="password" 
                                className={ cn(classes.auth__input, formik.touched.password && formik.errors.password && classes["auth__input--error"])}
                                onChange={formik.handleChange} 
                                onBlur={formik.handleBlur}
                                value={formik.values.password}  
                            />

                            <label>{t('AUTH.gender')}</label>
                            <div className={classes.auth__radiogroup}>
                                <div>
                                    <input 
                                        type="radio" 
                                        id="gender" 
                                        name="gender" 
                                        value="male" 
                                        onChange={formik.handleChange} 
                                        onBlur={formik.handleBlur}
                                    />
                                    <label htmlFor="gender">{t('AUTH.male')}</label>
                                </div>
                                <div>
                                    <input 
                                        type="radio" 
                                        id="gender" 
                                        name="gender" 
                                        value="female" 
                                        onChange={formik.handleChange} 
                                        onBlur={formik.handleBlur}
                                    />
                                    <label htmlFor="gender">{t('AUTH.female')}</label>
                                </div>
                            </div>

                            <label>{t('AUTH.firstName')}</label>
                            <input 
                                type="text" 
                                name="firstName" 
                                className={ cn(classes.auth__input, formik.touched.firstName && formik.errors.firstName && classes["auth__input--error"])}
                                onChange={formik.handleChange} 
                                onBlur={formik.handleBlur}
                                value={formik.values.firstName}  
                            />

                            <label>{t('AUTH.lastName')}</label>
                            <input 
                                type="text" 
                                name="lastName" 
                                className={ cn(classes.auth__input, formik.touched.lastName && formik.errors.lastName && classes["auth__input--error"])} 
                                onChange={formik.handleChange} 
                                onBlur={formik.handleBlur}
                                value={formik.values.lastName} 
                             />
                        </div>
                    </div>
                    <div>
                        <h2 aria-hidden="true" className={classes.auth__header} >{t('AUTH.contactInfo')}</h2>
                        <hr />
                        <div className={classes.auth__form__table}>
                            <label>{t('AUTH.streetAndNumber')}</label>
                            <input 
                                type="text" 
                                name="street" 
                                className={ cn(classes.auth__input, formik.touched.street && formik.errors.street && classes["auth__input--error"])}
                                onChange={formik.handleChange} 
                                onBlur={formik.handleBlur}
                                value={formik.values.street}  
                            />

                            <label>{t('AUTH.city')}</label>
                            <input 
                                type="text" 
                                name="city" 
                                className={ cn(classes.auth__input, formik.touched.city && formik.errors.city && classes["auth__input--error"])} 
                                onChange={formik.handleChange} 
                                onBlur={formik.handleBlur}
                                value={formik.values.city}  
                            />
                            
                            <label>{t('AUTH.zip')}</label>
                            <input 
                                type="text" 
                                name="zip" 
                                className={ cn(classes.auth__input, formik.touched.zip && formik.errors.zip && classes["auth__input--error"])} 
                                onChange={formik.handleChange} 
                                onBlur={formik.handleBlur}
                                value={formik.values.zip}  
                            />

                            <label>{t('AUTH.state')}</label>
                            <select 
                                name="state" 
                                className={ cn(classes.auth__input, formik.touched.state && formik.errors.state && classes["auth__input--error"])}
                                onChange={formik.handleChange} 
                                onBlur={formik.handleBlur}
                                value={formik.values.state} >
                                <option></option>
                                {countryListData && countryListData.map((country) => {
                                    return (<option key={country.number} value={country.code}>{country.name}</option>)
                                })}
                            </select>

                            <label>{t('AUTH.phone')}</label>
                            <input 
                                type="text" 
                                name="phone" 
                                className={ cn(classes.auth__input, formik.touched.phone && formik.errors.phone && classes["auth__input--error"])} 
                                onChange={formik.handleChange} 
                                onBlur={formik.handleBlur}
                                value={formik.values.phone}  
                            />
                        </div>
                    </div>
                    <div className={classes.auth__rowInfo}>
                        <h2 aria-hidden="true" className={classes.auth__header} >{t('AUTH.otherInfo')}</h2>
                        <hr />
                        <div className={classes.auth__form__table}>
                            <label>{t('AUTH.description')}</label>
                            <textarea name="description" cols={40} rows={5} onChange={formik.handleChange} value={formik.values.description} ></textarea>
                        </div>
                    </div>
                    <div className={classes.auth__rowInfo}>
                        <h2 aria-hidden="true" className={classes.auth__header} >{t('AUTH.approvals')}</h2>
                        <hr />
                        <div className={classes.auth__form__table}>
                            <div className={cn(classes.auth__checkboxContainer, formik.touched.checkbox1 && formik.errors.checkbox1 && classes["auth__checkboxContainer--error"])}>
                                <input 
                                    type="checkbox" 
                                    name="checkbox1" 
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur} 
                                 />
                           </div>
                            <p>Wyrażam zgodę xYZ Wyrażam zgodę xYZ Wyrażam zgodę xYZ Wyrażam zgodę xYZ Wyrażam zgodę xYZ Wyrażam zgodę xYZ Wyrażam zgodę xYZ Wyrażam zgodę xYZ 
                            Wyrażam zgodę xYZ Wyrażam zgodę xYZ Wyrażam zgodę xYZ Wyrażam zgodę xYZ Wyrażam zgodę xYZ Wyrażam zgodę xYZ Wyrażam zgodę xYZ Wyrażam zgodę xYZ 
                            </p>
                        </div>
                        <div className={classes.auth__form__table}>
                            <div className={cn(classes.auth__checkboxContainer, formik.touched.checkbox2 && formik.errors.checkbox2 && classes["auth__checkboxContainer--error"])}>
                                <input 
                                    type="checkbox"
                                    name="checkbox2"
                                    onChange={formik.handleChange} 
                                    onBlur={formik.handleBlur} 
                                  />
                            </div>
                            <p>Wyrażam zgodę xYZ Wyrażam zgodę xYZ Wyrażam zgodę xYZ Wyrażam zgodę xYZ Wyrażam zgodę xYZ Wyrażam zgodę xYZ Wyrażam zgodę xYZ Wyrażam zgodę xYZ 
                            Wyrażam zgodę xYZ Wyrażam zgodę xYZ Wyrażam zgodę xYZ Wyrażam zgodę xYZ Wyrażam zgodę xYZ Wyrażam zgodę xYZ Wyrażam zgodę xYZ Wyrażam zgodę xYZ 
                            </p>
                        </div>
                    </div>
                    <div>
                        {Object.keys(formik.errors).length !== 0  && (
                            <div className={classes.auth__errorMessage}>
                                <p>{t("AUTH.errorMessage")}</p>
                            </div>
                        )}
                    <div className={classes.auth__buttonContainer}>
                        <Button content={t('AUTH.registration')} />
                    </div>
                    </div>
                </form>
            </div>
        </>
    )
}