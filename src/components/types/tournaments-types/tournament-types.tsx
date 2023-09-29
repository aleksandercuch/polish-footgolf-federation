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

export interface Iplayers {
    id: string,
    firstName: string,
    lastName: string,
    birthday: string,
    paid: boolean,
    confirmed: boolean
}

export interface Icategories {
    start: Date,
    end: Date,
    maxPlayers: number,
    id: number
    players: Iplayers[];
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
    par: number,
    wholes: number,
    categories: Icategories[],

}

export interface IEditTournaments {
    tournaments?: any;
    onClickFunc?: () => void;
    tournamentId?: string;
}