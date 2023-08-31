// CORE
'use client';
import { FC, useEffect, useState } from 'react';
import classes from './page.module.scss'
import { useTranslation } from 'react-i18next';

// COMPONENTS
import { PageHeader } from '@/components/reusable/page-title/page-title';

// MOCK
import { TournamentMock } from '@/mocks/game-table.mock';

// TYPES
import { gameTablePropsType, gameTableRoundType } from "@/components/types/tournaments-types/tournament-types";

// ENUMS
import { TABLE_LEAUGE_HEADERS } from '@/utils/constants/table-headers-enums';

interface pageProps {}



const page: FC<pageProps> =({}) => {
    const { t } = useTranslation();
    const [tableHeaders, setTableHeaders] = useState<string[]>([]);
    const [tableRows, setTableRows] = useState([]);

    const prepareRoundsHeaders = (rounds: gameTableRoundType[]) => {
        const roundsHeaders = rounds.map((round) => {
            return `${round.id} ${TABLE_LEAUGE_HEADERS.Round}`
        });

        return roundsHeaders;
    }

    const prepareTableRows = (tournament: gameTablePropsType) => {
        const competitors = tournament.competitors.map(competitor => {
            const avatar = competitor.avatar;
            const name = competitor.name;
            return null;
        })

        return competitors;
    }


    useEffect(() => {
            const roundsHeaders: string[] = prepareRoundsHeaders(TournamentMock.roundsConfig.rounds);
            //const rows: 
            setTableHeaders([
                TABLE_LEAUGE_HEADERS.Place,
                TABLE_LEAUGE_HEADERS.Name,
                ...roundsHeaders,
                TABLE_LEAUGE_HEADERS.Mp,
                TABLE_LEAUGE_HEADERS.Sum,
                TABLE_LEAUGE_HEADERS.Final
            ]);

    }, []);

    useEffect(() => {
    console.log(tableHeaders);

}, [tableHeaders]);

    return (
        <>
            <PageHeader header={t("HEADERS.leagueStatue")} />
            <div className={classes.wrapper}>
            <table className={classes.table}>
                <tr>
                    <th>Miejsce</th>
                    <th></th>
                    <th>Country</th>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                </tr>
                <tr>
                    <td>Centro comercial Moctezuma</td>
                    <td>Francisco Chang</td>
                    <td>Mexico</td>
                </tr>
                <tr>
                    <td>Ernst Handel</td>
                    <td>Roland Mendel</td>
                    <td>Austria</td>
                </tr>
                <tr>
                    <td>Island Trading</td>
                    <td>Helen Bennett</td>
                    <td>UK</td>
                </tr>
                <tr>
                    <td>Laughing Bacchus Winecellars</td>
                    <td>Yoshi Tannamuri</td>
                    <td>Canada</td>
                </tr>
                <tr>
                    <td>Magazzini Alimentari Riuniti</td>
                    <td>Giovanni Rovelli</td>
                    <td>Italy</td>
                </tr>
                </table>
            </div>
        </>  
    )
}

export default page;