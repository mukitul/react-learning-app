import withCounter from "./withCounter";

function ClickCounter(props: any) {
    const {counter, incrementCounter} = props;
    return (<>
        <button onClick={incrementCounter}>Clicked {counter} times</button>
    </>);
}

export default withCounter(ClickCounter);