import React from 'react';
import s from './Interface.module.css'

type InterfaceType = {
    value: number
}

export const Interface = (props: InterfaceType) => {
    return (
        <div className={props.value === 5 ? s.intlim : s.int}>
            <span>{props.value}</span>
        </div>
    );
};