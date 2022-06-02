import HomeComponentNONHOC from "../components/nonHOC/HomeComponentNONHOC";
import HomeComponentHOC from "../components/HOC/HomeComponentHOC";

function HomeScreen() {
    return <>
        <div>
            NON_HOC
            <div></div>
            <HomeComponentNONHOC/>
        </div>

        <div>
            HOC
            <div></div>
            <HomeComponentHOC/>
        </div>

    </>;
}

export default HomeScreen;