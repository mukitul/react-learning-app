import withCounter from "./withCounter";

function HoverCounter(props: any) {
    const {counter, incrementCounter} = props;
    return (<>
        <h4 onMouseEnter={incrementCounter}>Hovered {counter} times</h4>
    </>);
}

export default withCounter(HoverCounter);