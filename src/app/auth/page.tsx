// CORE
import { FC } from 'react';

// COMPONENTS
import { Register } from '@/components/auth/register-form/register-form';
import { PageHeader } from '@/components/reusable/page-title/page-title';

interface pageProps {}

const page: FC<pageProps> =({}) => {    
    return (
       <>
            <PageHeader header={"AUTH.registration"} />
            <Register />
        </>
    )
}

export default page;