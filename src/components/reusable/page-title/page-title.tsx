// ASSETS
import classes from './page-title.module.scss';

interface Iprops {
    header: string;
}

export const PageHeader = (props: Iprops) => {
    return (
        <h1 className={classes.header}>{props.header}</h1>
    )
}