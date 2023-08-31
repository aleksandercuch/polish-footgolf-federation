interface gameTableScoreType {
    competitorId: number,
    score: number
}

interface gameTableWholeType {
    id: number,
    par?: number,
    scores?: gameTableScoreType[]
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
            rounds: gameTableRoundType[],
        }
    ]
}