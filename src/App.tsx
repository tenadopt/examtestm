import React, {useState} from 'react';
import './App.css';
import {Interface} from "./components/interface/Interface";
import {Counter} from "./components/counter/Counter";

function App() {

    const minCount = 0;

    const [inc, setInc] = useState(minCount)

    const incHandler = () => {
        setInc(inc + 1)
    }

    const resetHandler = () => {
        setInc(minCount)
    }

    return (
        <div className='App'>
            <Interface value={inc}/>
            <Counter addInc={incHandler} resetInc={resetHandler} inc={inc}/>
        </div>
    );
}

export default App;
