// CORE
"use client"
import { FC, useMemo } from "react";
import { useTranslation } from 'react-i18next';

// COMPONENTS
import { Table } from "@/components/reusable/table/table";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/reusable/button/button";
import { CategoriesModal } from "./categories-modal";

// ASSETS
import classes from './categories.module.scss'

// CONTEXT
import { UserAuth } from "@/context/auth-context";
interface componentProps {
    tournament: any;
    tournamentId: string
}

export const Categories: FC<componentProps> =({tournament, tournamentId}) => {
    const { t } = useTranslation();
    const { handleModal } = UserAuth();

    const dummyData = () => {
      return tournament.categories;
    }

    const filterPlayers = (renderedCellValue: any) => {
      const filteredPlayers = renderedCellValue.row.original.players.filter((player: any) => player.confirmed === true);
      return filteredPlayers.length;
    }

    const cols = useMemo<ColumnDef<any>[]>(
        () => [
          {
            header: t("TABLES.name"),
            cell: (row) => row.renderValue(),
            accessorKey: 'name',
            
          },
          {
            header: t("TABLES.registeredPlayers"),
            cell: (row) => row.renderValue(),
            accessorKey: 'players.length',
          },
          {
            header: t("TABLES.confirmedPlayers"),
            cell: (renderedCellValue) => <span>{filterPlayers(renderedCellValue)}</span>,
            accessorKey: 'players',
          },
          {
            header: `${t("TABLES.rounds")}`,
            cell: (row) => row.renderValue(),
            accessorKey: 'rounds',
          },
          {
            header: `${t("TABLES.registerLimit")}`,
            cell: (row) => row.renderValue(),
            accessorKey: 'maxPlayers',
          },
          {
            header: ``,
            cell: (renderedCellValue) => 
              <div className={classes.editButtonWrapper}>
                <Button content={t("STATUE.edit")} 
                  onClickFunc={() => handleModal(
                <CategoriesModal 
                    tournament={tournament} 
                    tournamentId={tournamentId}
                    category={renderedCellValue.row.original}
                    />)} 
                />
              </div>,
            accessorKey: 'editButton'
          },
        ],
        []
       );

    return (
        <div className={classes.wrapper}>
            <Table data={dummyData()} columns={cols}/>
            <div className={classes.addButtonWrapper}>
                <Button content={t("INPUTS.addCategory")} 
                onClickFunc={() => handleModal(
                <CategoriesModal 
                    tournament={tournament} 
                    tournamentId={tournamentId}/>)} 
                />
            </div>
        </div>
    )
}