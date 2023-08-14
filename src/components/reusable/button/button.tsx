// ASSETS
import classes from './button.module.scss';

interface Iprops {
    content: string;
}

export const Button = (props: Iprops) => {
    return (
        <button className={classes.button}>{props.content}</button>
    )
}