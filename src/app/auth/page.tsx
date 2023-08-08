// CORE
import { FC } from 'react';

//ASSETS
import classes from './page.module.scss'
import { Auth } from '@/components/auth/auth';

interface pageProps {}

const page: FC<pageProps> =({}) => {
    return (
       <>
            <Auth />
        </>
    )
}

export default page;