// CORE
"use client";
import { FC, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

// COMPONENTS
import { Table } from "@/components/reusable/table/table";
import { CellContext, ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/reusable/button/button";
import { CategoriesModal } from "./categories-modal";
import { ConfirmationModal } from "@/components/reusable/confirmation-modal/confirmation-modal";
import { AddPlayerModal } from "./add-player-modal";

// ASSETS
import classes from "./categories.module.scss";

// CONTEXT
import { UserAuth } from "@/context/auth-context";

// FUNCTIONS
import { getData } from "@/functions/get-data";
import { useForceUpdate } from "@/hooks/useForceUpdate/useForceUpdate";

// CONSTANTS
import { COLLECTIONS } from "@/utils/constants/collections-enums";
import {
  Itournaments,
  Icategories,
  Iplayers,
} from "@/components/types/tournaments-types/tournament-types";

// API
import { doc, updateDoc } from "firebase/firestore";
import auth, { db } from "../../../../firebase/config/clientApp";
interface componentProps {
  tournament: Itournaments;
  tournamentId: string;
}

export const Categories: FC<componentProps> = (props) => {
  const { t } = useTranslation();
  const forceUpdate = useForceUpdate();
  const { handleModal, user } = UserAuth();
  const [tournament, setTournament] = useState<Itournaments>(() => {
    const initialState = props.tournament;
    return initialState;
  });

  // TODO fix refresh
  // TODO fix translations
  // TODO fix context errors
  const filterPlayers = (renderedCellValue: CellContext<any, unknown>) => {
    const filteredPlayers = renderedCellValue.row.original.players.filter(
      (player: any) => player.confirmed === true
    );
    return filteredPlayers.length;
  };

  const userSignedToCategory = (category: Icategories): boolean => {
    const index = tournament.categories.indexOf(category);
    let userSigned: boolean = false;
    tournament &&
      tournament.categories[index].players.forEach((player) => {
        if (player.id == auth.currentUser!.uid) {
          userSigned = true;
        }
      });
    return userSigned;
  };

  const assignLoggedUser = (category: Icategories) => {
    const userRef = doc(db, COLLECTIONS.users, auth.currentUser!.uid);
    const tournamentToUpdate: Itournaments = tournament;

    getData(userRef)
      .then((userData) => {
        const index = tournament.categories.indexOf(category);

        tournamentToUpdate.categories[index].players.push({
          id: auth.currentUser!.uid,
          firstName: userData!.firstName,
          lastName: userData!.lastName,
          birthday: userData!.birthday,
          paid: false,
          confirmed: false,
        });

        const docRef = doc(db, COLLECTIONS.tournaments, props.tournamentId);
        updateDoc(docRef, {
          categories: tournamentToUpdate.categories,
        }).then(() => {
          handleModal(<ConfirmationModal message={t("MODAL.assignedUser")} />);
          setTournament(tournamentToUpdate);
        });
      })
      .then(() => {
        forceUpdate();
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  const cols = useMemo<ColumnDef<any>[]>(
    () => [
      {
        header: t("TABLES.name"),
        cell: (row) => row.renderValue(),
        accessorKey: "name",
      },
      {
        header: t("INPUTS.fee"),
        cell: (row) => row.renderValue(),
        accessorKey: "fee",
      },
      {
        header: t("INPUTS.currency"),
        cell: (row) => row.renderValue(),
        accessorKey: "currency",
      },
      {
        header: t("TABLES.registeredPlayers"),
        cell: (row) => row.renderValue(),
        accessorKey: "players.length",
      },
      {
        header: t("TABLES.confirmedPlayers"),
        cell: (renderedCellValue) => (
          <span>{filterPlayers(renderedCellValue)}</span>
        ),
        accessorKey: "players",
      },
      {
        header: `${t("TABLES.rounds")}`,
        cell: (row) => row.renderValue(),
        accessorKey: "rounds",
      },
      {
        header: `${t("TABLES.registerLimit")}`,
        cell: (row) => row.renderValue(),
        accessorKey: "maxPlayers",
      },
      {
        header: ``,
        cell: (renderedCellValue) => (
          <>
            {Object.keys(user).length != 0 && (
              <div className={classes.editButtonWrapper}>
                <Button
                  content={t("STATUE.edit")}
                  onClickFunc={() =>
                    handleModal(
                      <CategoriesModal
                        tournament={tournament}
                        tournamentId={props.tournamentId}
                        category={renderedCellValue.row.original}
                      />
                    )
                  }
                />
                {userSignedToCategory(renderedCellValue.row.original) ? (
                  <Button content={t("BUTTONS.signedUp")} disabled />
                ) : (
                  <Button
                    content={t("BUTTONS.signUp")}
                    onClickFunc={() =>
                      assignLoggedUser(renderedCellValue.row.original)
                    }
                  />
                )}
                <Button
                  content={t("BUTTONS.addPlayerLong")}
                  onClickFunc={() =>
                    handleModal(
                      <AddPlayerModal
                        tournament={tournament}
                        tournamentId={props.tournamentId}
                        category={renderedCellValue.row.original}
                      />
                    )
                  }
                />
              </div>
            )}
          </>
        ),
        accessorKey: "editButton",
      },
    ],
    [user, tournament]
  );

  useEffect(() => {
    console.log(tournament);
  }, [tournament]);

  return (
    <div className={classes.wrapper}>
      {tournament && (
        <>
          <Table data={tournament.categories} columns={cols} />
          <div className={classes.addButtonWrapper}>
            <Button
              content={t("INPUTS.addCategory")}
              onClickFunc={() =>
                handleModal(
                  <CategoriesModal
                    tournament={tournament}
                    tournamentId={props.tournamentId}
                  />
                )
              }
            />
          </div>
        </>
      )}
    </div>
  );
};
