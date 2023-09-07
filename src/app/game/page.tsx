// CORE
"use client"
import { FC } from 'react';

// COMPONENTS
import { PageHeader } from '@/components/reusable/page-title/page-title';
import { InitGame } from '@/components/reusable/init-game/init-game';

interface pageProps {}

const page: FC<pageProps> =({}) => {

    return (
        <>
            <PageHeader header={"HEADERS.createGame"} />
            <InitGame />
        </>
       
    )
}

export default page;