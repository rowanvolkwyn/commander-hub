const Decklist = () => {
    return (
        <div>
            <h1 className="title">Decklist</h1>
            <div id='decklist'>
                <div id="current-deck">
                    <h2>Current Deck</h2>
                    <table>
                        <tr>
                            <th>Card Name</th>
                            <th>Mana Value</th>
                            <th>Color</th>
                            <th>Rarity</th>
                            <th>Set</th>
                        </tr>
                        <tr>
                            <td>Urza, Chief Artificer</td>
                            <td>4</td>
                            <td>Colorless</td>
                            <td>Mythic</td>
                            <td>Modern Horizons</td>
                        </tr>
                        <tr>
                            <td>Aragorn, Hornbug Hero</td>
                            <td>3</td>
                            <td>White</td>
                            <td>Rare</td>
                            <td>Lord of the Rings</td>
                        </tr>
                    </table>
                </div>
                <div id='add-card'>
                    <form>
                        <label>Add Card: </label>
                        <input type='text' id='card-name'></input>
                    </form>
                </div>
            </div>
        </div>    
    )   
}

export default Decklist;