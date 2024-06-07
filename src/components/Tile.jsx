const Tile = (props) => {
    return (
        <div id='tile'>
            <div className="info">
                <h2>{props.name}</h2>
            </div>
        </div>
    )
}

export default Tile;