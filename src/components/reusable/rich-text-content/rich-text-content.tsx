// CORE
import { FC } from 'react';
import parse from 'html-react-parser';

// ASSETS
import classes from './rich-text-content.module.scss'

// TYPES
import { statueProps } from '@/components/types/statue-types/statue-types';



export const RichTextContent: FC<statueProps> = (props) => {
    console.log(props);
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