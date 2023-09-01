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