import React from 'react';
import s from './Univbutton.module.css'

type UnivbuttonPropsType = {
    title: string
    callback: () => void
    disabled: boolean
}


export const Univbutton = (props: UnivbuttonPropsType) => {
    return (
            <button className={s.btn} onClick={() => props.callback()} disabled={props.disabled}>{props.title}</button>
    );
};