import {useState} from "react";

function withCounter(OriginalComponent: any) {
    const NewComponent = () => {
        const [counter, setCounter] = useState(0);

        const incrementCounter = () => {
            setCounter(counter + 1);
        }

        return (<>
            <OriginalComponent counter={counter} incrementCounter={incrementCounter}/>
        </>);
    }
    return NewComponent;
}

export default withCounter;