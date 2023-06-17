import React from 'react';
import {Univbutton} from "../Univbutton/Univbutton";
import s from './Counter.module.css'

type CounterPropsType = {
    inc: number
    addInc: ()=>void
    resetInc: ()=>void
}

export const Counter = (props: CounterPropsType) => {

    const minCount = 0;
    const maxCount = 5;

    return (
        <div className={s.counter}>
            <Univbutton title="INC" callback={props.addInc} disabled={props.inc === maxCount}/>
            <Univbutton title="reset" callback={props.resetInc} disabled={props.inc === minCount}/>
        </div>
    );
};