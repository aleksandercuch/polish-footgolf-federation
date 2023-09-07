// COMPONENTS
import { PageHeader } from '@/components/reusable/page-title/page-title';
import { Contact } from '@/components/static/contact/contact';

const page = () => {
    return (
        <>
            <PageHeader header={"NAV.contact"} />
            <Contact />
        </>  
    )
}

export default page;