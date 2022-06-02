import {useState} from "react";

function HoverCounter() {
    const [counter, setCounter] = useState(0);

    const incrementCounter = () => {
        setCounter(counter + 1);
    }

    return (<>
        <h4 onMouseEnter={incrementCounter}>Hovered {counter} times</h4>
    </>);
}

export default HoverCounter;