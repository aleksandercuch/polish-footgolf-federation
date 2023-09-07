// CORE
"use client"
import { FC, useEffect, useMemo, useState } from 'react';
import classes from './page.module.scss'
import { useTranslation } from 'react-i18next';
import { ColumnDef } from '@tanstack/react-table';

// COMPONENTS
import { PageHeader } from '@/components/reusable/page-title/page-title';
import { Table } from '@/components/reusable/table/table';

// MOCK
import { TournamentMock } from '@/mocks/game-table.mock';

// TYPES
import { gameTablePropsType, gameTableRoundType } from "@/components/types/tournaments-types/tournament-types";

// API
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase/config/clientApp';


interface pageProps {}

interface Competitor {
    place: number;
    name: string;
    roundOne: number;
    roundTwo: number;
    roundThree: number;
    roundFour: number;
    roundFive: number;
    roundSix: number;
    roundSeven: number;
    roundEight: number;
    mp: number;
    sum:number;
    final: number;
}

type Item = {
    name: string;
    price: number;
    quantity: number;
   }

const page: FC<pageProps> =({}) => {
    const { t } = useTranslation();
    const [tableHeaders, setTableHeaders] = useState<string[]>([]);
    const [tableRows, setTableRows] = useState<any>([{}]);

const dummyData = () => {
 const items: Competitor[] = [
    {
        place: 1,
        name: "Tomasz Karolak",
        roundOne: 1,
        roundTwo: 4,
        roundThree: 3, 
        roundFour: 4,
        roundFive: 5,
        roundSix: 6,
        roundSeven: 7,
        roundEight: 8,
        mp: 5,
        sum: 30,
        final: 50
    },
    {
        place: 1,
        name: "Tomasz Karolak",
        roundOne: 1,
        roundTwo: 4,
        roundThree: 3, 
        roundFour: 4,
        roundFive: 5,
        roundSix: 6,
        roundSeven: 7,
        roundEight: 8,
        mp: 5,
        sum: 30,
        final: 50
    },
    {
        place: 1,
        name: "Tomasz Karolak",
        roundOne: 1,
        roundTwo: 4,
        roundThree: 3, 
        roundFour: 4,
        roundFive: 5,
        roundSix: 6,
        roundSeven: 7,
        roundEight: 8,
        mp: 5,
        sum: 30,
        final: 50
    },
    {
        place: 1,
        name: "Tomasz Karolak",
        roundOne: 1,
        roundTwo: 4,
        roundThree: 3, 
        roundFour: 4,
        roundFive: 5,
        roundSix: 6,
        roundSeven: 7,
        roundEight: 8,
        mp: 5,
        sum: 30,
        final: 50
    },
    {
        place: 1,
        name: "Tomasz Karolak",
        roundOne: 1,
        roundTwo: 4,
        roundThree: 3, 
        roundFour: 4,
        roundFive: 5,
        roundSix: 6,
        roundSeven: 7,
        roundEight: 8,
        mp: 5,
        sum: 30,
        final: 50
    },
 ];
 return items;
}
    
    const cols = useMemo<ColumnDef<Competitor>[]>(
        () => [
          {
            header: t("TABLES.place"),
            cell: (row) => row.renderValue(),
            accessorKey: 'place',
          },
          {
            header: '',
            cell: (row) => row.renderValue(),
            accessorKey: 'name',
          },
          {
            header: `1 ${t("TABLES.round")}`,
            cell: (row) => row.renderValue(),
            accessorKey: 'roundOne',
          },
          {
            header: `2 ${t("TABLES.round")}`,
            cell: (row) => row.renderValue(),
            accessorKey: 'roundTwo',
          },
          {
            header: `3 ${t("TABLES.round")}`,
            cell: (row) => row.renderValue(),
            accessorKey: 'roundThree',
          },
          {
            header: `4 ${t("TABLES.round")}`,
            cell: (row) => row.renderValue(),
            accessorKey: 'roundFour',
          },
          {
            header: `5 ${t("TABLES.round")}`,
            cell: (row) => row.renderValue(),
            accessorKey: 'roundFive',
          },
          {
            header: `6 ${t("TABLES.round")}`,
            cell: (row) => row.renderValue(),
            accessorKey: 'roundSix',
          },
          {
            header: `7 ${t("TABLES.round")}`,
            cell: (row) => row.renderValue(),
            accessorKey: 'roundSeven',
          },
          {
            header: `8 ${t("TABLES.round")}`,
            cell: (row) => row.renderValue(),
            accessorKey: 'roundEight',
          },
          {
            header: t("TABLES.mp"),
            cell: (row) => row.renderValue(),
            accessorKey: 'mp',
          },
          {
            header: t("TABLES.sum"),
            cell: (row) => row.renderValue(),
            accessorKey: 'sum',
          },
          {
            header: t("TABLES.final"),
            cell: (row) => row.renderValue(),
            accessorKey: 'final',
          },
        ],
        []
       );

    useEffect(() => {
            setTableRows([
                1,
                "Tomasz Karolak",
                1, 2, 3, 4, 5,6 ,7, 8,
                5,
                30,
                50
            ])
    }, []);

    useEffect(() => {
      getDocs(collection(db, "tournaments"))
     .then((result) => {
         result.forEach((element) => {
          console.log(element.data());
         })
     });
     
 }, [])

    return (
        <>
            <PageHeader header={"HEADERS.leagueStatue"} />
            <div className={classes.wrapper}>
                <Table data={dummyData()} columns={cols}/>
            </div>
        </>  
    )
}

export default page;