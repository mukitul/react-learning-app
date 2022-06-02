import {useState} from "react";

function ClickCounter() {
    const [counter, setCounter] = useState(0);

    const incrementCounter = () => {
        setCounter(counter + 1);
    }

    return (<>
        <button onClick={incrementCounter}>Clicked {counter} times</button>
    </>);
}

export default ClickCounter;