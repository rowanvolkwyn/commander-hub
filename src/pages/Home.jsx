import Tile from "../components/Tile";

const Home = () => {

    return (
        <div id='home-container'>
            <div id='left'>
                <Tile name='Urza, Chief Artificer'/>
                <Tile name='Aragorn, Hornbug Hero'/>
                <Tile name='Xyris, the Writhing Storm'/>
                <Tile name='Jodah, the Unifier'/>
            </div>
            <div id='right'>
                <h1>Create New Deck</h1>
            </div>
        </div>
    )
}

export default Home;