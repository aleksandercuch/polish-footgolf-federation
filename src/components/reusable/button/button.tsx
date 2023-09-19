// ASSETS
import classes from './button.module.scss';

interface Iprops {
    content: string;
    onClickFunc?: () => void;
}

export const Button = (props: Iprops) => {
    return (
        <button className={classes.button} onClick={props.onClickFunc}>{props.content}</button>
    )
}