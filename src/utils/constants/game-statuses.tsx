interface IgameStatuses {
    id: number,
    status: string
}

export const gameStatuses: IgameStatuses[] = [
    {id: 1, status: "inPreparation"},
    {id: 2, status: "registration"},
    {id: 3, status: "prepareGames"},
    {id: 4, status: "play"},
    {id: 5, status: "finished"},
    {id: 6, status: "cancelled"},
]