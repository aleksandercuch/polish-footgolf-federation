// CORE
import { FC, use } from "react";

// API
import { DocumentData, doc } from "firebase/firestore";
import { db } from "../../../../firebase/config/clientApp";

// FUNCTIONS
import { getData } from "@/functions/get-data";

// CONSTANTS
import { COLLECTIONS } from "@/utils/constants/collections-enums";

// COMPONENTS
import { PageHeader } from "@/components/reusable/page-title/page-title";
import { Itournaments } from "@/components/types/tournaments-types/tournament-types";
import { InfoPanel } from "@/components/tournaments/info-panel/info-panel";


// ASSETS
import classes from './page.module.scss'
import { NavigationTab } from "@/components/tournaments/navigation/navigation-tab";


interface pageParams {
    params: {
        tournamentid: string;
    }
    
}

const page: FC<pageParams> =({ params }: pageParams) => {
    const docRef = doc(db, COLLECTIONS.tournaments, params.tournamentid);
    const data:DocumentData = use(getData(docRef))!;
    
    return (
        <div>
            <PageHeader header={data.name} />
            <div className={classes.wrapper}>
                <div className={classes.tabs}>
                    <div className={classes.tab}>
                        <NavigationTab id={"tab-1"} title={"HEADERS.information"} defaultChecked>
                            <InfoPanel tournaments={data} />
                        </NavigationTab>
                    </div>
                    <div className={classes.tab}>
                        <NavigationTab id={"tab-2"} title={"HEADERS.categories"} defaultChecked>
                            <InfoPanel tournaments={data} />
                        </NavigationTab>
                    </div>
                    <div className={classes.tab}>
                        <NavigationTab id={"tab-3"} title={"HEADERS.registration"} defaultChecked>
                            <InfoPanel tournaments={data} />
                        </NavigationTab>
                    </div>
                    <div className={classes.tab}>
                        <NavigationTab id={"tab-4"} title={"HEADERS.payments"} defaultChecked>
                            <InfoPanel tournaments={data} />
                        </NavigationTab>
                    </div>
                    <div className={classes.tab}>
                        <NavigationTab id={"tab-5"} title={"HEADERS.teams"} defaultChecked>
                            <InfoPanel tournaments={data} />
                        </NavigationTab>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page;