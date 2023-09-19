// CORE
"use client"
import { FC, useMemo } from "react";
import { useTranslation } from "react-i18next";

// COMPONENTS
import { Table } from "@/components/reusable/table/table";
import { ColumnDef } from "@tanstack/react-table";

interface componentProps {
    tournaments: any;
    tournamentId: string
}

export const Registration: FC<componentProps> =({}) => {
    const { t } = useTranslation();
    
    const dummyData = () => {
        const items: any[] = [
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

    const cols = useMemo<ColumnDef<any>[]>(
        () => [
          {
            header: t("TABLES.registered"),
            cell: (row) => row.renderValue(),
            accessorKey: 'registered',
          },
          {
            header: t("TABLES.nameAndSurname"),
            cell: (row) => row.renderValue(),
            accessorKey: 'nameAndSurname',
          },
          {
            header: `1 ${t("TABLES.gender")}`,
            cell: (row) => row.renderValue(),
            accessorKey: 'gender',
          },
          {
            header: `2 ${t("TABLES.yearOfBirth")}`,
            cell: (row) => row.renderValue(),
            accessorKey: 'yearOfBirth',
          },
          {
            header: `3 ${t("TABLES.state")}`,
            cell: (row) => row.renderValue(),
            accessorKey: 'state',
          },
          {
            header: `4 ${t("TABLES.category")}`,
            cell: (row) => row.renderValue(),
            accessorKey: 'category',
          },
          {
            header: `5 ${t("TABLES.paid")}`,
            cell: (row) => row.renderValue(),
            accessorKey: 'paid',
          },
          {
            header: `6 ${t("TABLES.round")}`,
            cell: (row) => row.renderValue(),
            accessorKey: 'roundSix',
          },
          {
            header: `7 ${t("TABLES.presenceConfirmation")}`,
            cell: (row) => row.renderValue(),
            accessorKey: 'presenceConfirmation',
          },
          {
            header: `8 ${t("TABLES.actions")}`,
            cell: (row) => row.renderValue(),
            accessorKey: 'actions',
          },
        ],
        []
       );
    return (
        <>
             <Table data={dummyData()} columns={cols}/>
        </>
    )
}