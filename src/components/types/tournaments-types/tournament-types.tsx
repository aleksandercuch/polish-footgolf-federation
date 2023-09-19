interface gameTableWholeType {
    id: number,
    par: number,
    score?: number
}

export interface gameTableRoundType  {
    id: number,
    wholes: gameTableWholeType[]
}


export interface gameTablePropsType {
    roundsConfig: {
        rounds: gameTableRoundType[],
        roundsCount: number
    }

    competitors: [
        {
            id: number,
            name: string,
            paid: boolean,
            avatar: string
            mp: number,
            roundsScores: gameTableRoundType[],
        }
    ]
}

export interface Itournaments {
    name: string,
    creatorEmail: string,
    place: string,
    status: string,
    maxPlayers: number,
    start: Date,
    end: Date,
    registrationFrom: Date,
    registrationTill: Date,
    details: string,
}

export interface IEditTournaments {
    tournaments?: any;
    onClickFunc?: () => void;
    tournamentId?: string;
}