// CORE
"use client";
import { FC, useMemo } from "react";
import { ColumnDef } from "@tanstack/react-table";

// TYPES
import { Itournaments } from "@/components/types/tournaments-types/tournament-types";
import { t } from "i18next";

// COMPONENTS
import { Table } from "@/components/reusable/table/table";
import { ConfirmationModal } from "@/components/reusable/confirmation-modal/confirmation-modal";

// UTILS
import { COLLECTIONS } from "@/utils/constants/collections-enums";

// CONTEXT
import { UserAuth } from "@/context/auth-context";

// API
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../../firebase/config/clientApp";
interface pageProps {
  tournament: Itournaments;
  tournamentId: string;
}

export const Payments: FC<pageProps> = ({ tournament, tournamentId }) => {
  const { handleModal } = UserAuth();

  const handleChange = (value: any, operation: string) => {
    console.log("value", value);
    const tournamentToUpdate: Itournaments = tournament;
    const playerIndex = tournament.categories.indexOf(value.row.original);
    console.log(
      "value.row.original.categoryId = ",
      value.row.original.categoryId
    );

    const test = tournamentToUpdate.categories[
      value.row.original.categoryId
    ].players.map((player) => {
      console.log("value.row.original.id = ", value.row.original.id);
      if (player.id == value.row.original.id) {
        console.log("1");
        if (operation == "paid") {
          console.log("2");

          return { ...player, paid: !player.paid };
        } else {
          console.log("3");

          return { ...player, confirmed: true };
        }
      } else return player;
    });

    const docRef = doc(db, COLLECTIONS.tournaments, tournamentId);
    updateDoc(docRef, {
      categories: test,
    })
      .then(() => {
        console.log("SUCESS");
        // handleModal(<ConfirmationModal message={t("MODAL.assignedUser")} />);
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  const prepareCellSelect = (value: any) => {
    console.log(value, "VALUE");
    if (value.renderValue) {
      return (
        <select onChange={() => handleChange(value, "paid")}>
          <option value="true">Tak</option>
          <option value="false">Nie</option>
        </select>
      );
    } else {
      <select onChange={() => handleChange(value, "confirmed")}>
        <option value="false">Nie</option>
        <option value="true">Tak</option>
      </select>;
    }
  };

  const cols = useMemo<ColumnDef<any>[]>(
    () => [
      {
        header: t("AUTH.lastName"),
        cell: (row) => row.renderValue(),
        accessorKey: "lastName",
      },
      {
        header: t("AUTH.firstName"),
        cell: (row) => row.renderValue(),
        accessorKey: "firstName",
      },
      {
        header: t("INPUTS.birthday"),
        cell: (row) => row.renderValue(),
        accessorKey: "birthday",
      },
      {
        header: t("TABLES.paid"),
        cell: (row) => prepareCellSelect(row),
        accessorKey: "paid",
      },
      {
        header: t("TABLES.presenceConfirmation"),
        cell: (row) => prepareCellSelect(row),
        accessorKey: "confirmed",
      },
    ],
    []
  );
  return (
    <>
      {tournament &&
        tournament.categories.map((category) => (
          <Table key={category.id} data={category.players} columns={cols} />
        ))}
    </>
  );
};
