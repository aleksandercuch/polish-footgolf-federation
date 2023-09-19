// CORE
"use client"
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";

// ASSETS
import classes from './info-panel.module.scss'

// COMPONTENTS
import { RichTextContent } from "@/components/reusable/rich-text-content/rich-text-content";
import { Button } from "@/components/reusable/button/button";
import { InitGame } from "@/components/reusable/init-game/init-game";

// CONTEXT
import { UserAuth } from '@/context/auth-context';
// TODO add tournaments type
interface componentProps {
    tournaments: any;
    tournamentId: string
}

export const InfoPanel: FC<componentProps> =({tournaments, tournamentId}) => {
    const { t } = useTranslation();
    const [ editMode, setEditMode ] = useState<boolean>(false);
    const { handleModal } = UserAuth();
    
    return (
        <>
      
            <>
                <div className={classes.wrapper}>
                    <div>
                        <h2 aria-hidden="true" className={classes.wrapper__header} >{t('HEADERS.default')}</h2>
                        <hr />
                        <p className={classes.wrapper__row}>
                            <text>{t("LABELS.name")}:</text>
                            <text>{tournaments.name}</text>
                        </p>
                        <p className={classes.wrapper__row}>
                            <text>{t("INPUTS.status")}:</text>
                            <text>{t("INPUTS." + tournaments.status)}</text>
                        </p>
                        <p className={classes.wrapper__row}>
                            <text>{t("TABLES.place")}:</text>
                            <text>{tournaments.place}</text>
                        </p>
                        <p className={classes.wrapper__row}>
                            <text>{t("LABELS.wholes")}:</text>
                            <text>{tournaments.wholes}</text>
                        </p>
                        <p className={classes.wrapper__row}>
                            <text>{t("LABELS.par")}:</text>
                            <text>{tournaments.par}</text>
                        </p>
                    </div>
                    <div>
                        <h2 aria-hidden="true" className={classes.wrapper__header} >{t('HEADERS.organiser')}</h2>
                        <hr />
                        <p className={classes.wrapper__row}>
                            <text>{t("HEADERS.organiser")}:</text>
                            <text>PFG</text>
                        </p>
                        <p className={classes.wrapper__row}>
                            <text>{t("AUTH.phone")}:</text>
                            <text>123 456 678</text>
                        </p>
                        <p className={classes.wrapper__row}>
                            <text>{t("AUTH.email")}:</text>
                            <text>{tournaments.creatorEmail}</text>
                        </p>
                    </div>
                    <div>
                        <h2 aria-hidden="true" className={classes.wrapper__header} >{t('INPUTS.organisation')}</h2>
                        <hr />
                        <p className={classes.wrapper__row}>
                            <text>{t("INPUTS.start")}:</text>
                            <text>{tournaments.start}</text>
                        </p>
                        <p className={classes.wrapper__row}>
                            <text>{t("INPUTS.end")}:</text>
                            <text>{tournaments.end}</text>
                        </p>
                        <p className={classes.wrapper__row}>
                            <text>{t("INPUTS.registrationFrom")}:</text>
                            <text>{tournaments.registrationFrom}</text>
                        </p>
                        <p className={classes.wrapper__row}>
                            <text>{t("INPUTS.registrationTill")}:</text>
                            <text>{tournaments.registrationTill}</text>
                        </p>
                    </div>
                    <div>
                        <h2 aria-hidden="true" className={classes.wrapper__header} >{t('LABELS.statistics')}</h2>
                        <hr />
                            <p className={classes.wrapper__row}>
                                <text>{t("INPUTS.maxPlayers")}:</text>
                                <text>{tournaments.maxPlayers}</text>
                            </p>
                            <p className={classes.wrapper__row}>
                                <text>{t("LABELS.countCategories")}:</text>
                                <text></text>
                            </p>
                            <p className={classes.wrapper__row}>
                                <text>{t("LABELS.registered")}:</text>
                                <text></text>
                            </p>
                            <p className={classes.wrapper__row}>
                                <text>{t("LABELS.paid")}:</text>
                                <text></text>
                            </p>
                            <p className={classes.wrapper__row}>
                                <text>{t("LABELS.confirmed")}:</text>
                                <text></text>
                            </p>
                            <p className={classes.wrapper__row}>
                                <text>{t("LABELS.resigned")}:</text>
                                <text></text>
                            </p>
                    </div>
                </div>
                <div>
                    <h2 aria-hidden="true" className={classes.wrapper__header} >{t('INPUTS.details')}</h2>
                    <hr />
                    <RichTextContent content={tournaments.details} />
                </div>
            </>
       
        <div className={classes.buttonWrapper}>
            <Button 
                content={t("STATUE.edit")} 
                onClickFunc={() => handleModal(
                <InitGame 
                    tournaments={tournaments} 
                    tournamentId={tournamentId}/>)} 
                />
        </div>
        </>
    )
}