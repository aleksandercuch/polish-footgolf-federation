// ASSETS
import classes from './button.module.scss';

interface Iprops {
    content: string;
    onClickFunc?: () => void;
    disabled?: boolean;
}

export const Button = (props: Iprops) => {
    return (
        <button className={props.disabled ? classes.buttonDisabled : classes.button} onClick={props.onClickFunc} disabled={props.disabled || false}>{props.content}</button>
    )
}