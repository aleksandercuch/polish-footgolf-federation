import { gameTablePropsType } from "@/components/types/tournaments-types/tournament-types";

export const TournamentMock: gameTablePropsType = {
    competitors: [
        {
            id: 1,
            name: "Tomasz Karolak",
            paid: true,
            avatar: "https://a.allegroimg.com/original/1196f4/c13377a34b4d93aaacceb63317c9/NAKLEJKA-NA-OKNO-LUSTRO-SZYBE-POKEMONY-PIKACHU",
            mp: 5,
            roundsScores: [
                {
                    id: 1,
                    wholes: [
                        {
                            id: 1,
                            par: 5,
                            score: 6
                        }
                    ]
                }
            ],
        }
    ],
    roundsConfig: {
        roundsCount: 8,
        rounds: [
            {
                id: 1,
                wholes: [
                    {
                        id: 1,
                        par: 5,
                    },
                    {
                        id: 2,
                        par: 5,
                    },
                ]
            },
            {
                id: 2,
                wholes: [
                    {
                        id: 1,
                        par: 5,
                    },
                    {
                        id: 2,
                        par: 5,
                    },
                ]
            },
            {
                id: 3,
                wholes: [
                    {
                        id: 1,
                        par: 5,
                    },
                    {
                        id: 2,
                        par: 5,
                    },
                ]
            },
            {
                id: 4,
                wholes: [
                    {
                        id: 1,
                        par: 5,
                    },
                    {
                        id: 2,
                        par: 5,
                    },
                ]
            },
            {
                id: 5,
                wholes: [
                    {
                        id: 1,
                        par: 5,
                    },
                    {
                        id: 2,
                        par: 5,
                    },
                ]
            },
            {
                id: 6,
                wholes: [
                    {
                        id: 1,
                        par: 5,
                    },
                    {
                        id: 2,
                        par: 5,
                    },
                ]
            },
            {
                id: 7,
                wholes: [
                    {
                        id: 1,
                        par: 5,
                    },
                    {
                        id: 2,
                        par: 5,
                    },
                ]
            },
            {
                id: 8,
                wholes: [
                    {
                        id: 1,
                        par: 5,
                    },
                    {
                        id: 2,
                        par: 5,
                    },
                ]
            }
        ]
    }
}