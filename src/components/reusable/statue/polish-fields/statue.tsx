// CORE
import { FC } from 'react';
import parse from 'html-react-parser';

// ASSETS
import classes from './statue.module.scss'

// TYPES
import { statueProps } from '@/components/types/statue-types/statue-types';



export const Statue: FC<statueProps> = (props) => {
    return (
        <>
            {props.content && (
                <div className={classes.wrapper}>
                    {parse(props.content)}
                </div>
            )}
        </>  
    )
}