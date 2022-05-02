import React, { useState, useEffect } from "react";

const Tile = ({tileObject}) => {

    const [value, setValue] = useState(Math.random() > .5 ? 2 : 4)
    const [coordinates, setCoordinates] = useState({xValue: 0, yValue: 0});
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    useEffect(() => {
        setCoordinates(tileObject.props)
    }, [tileObject])

    useEffect(() => {
        if(coordinates !== undefined){
            setX(coordinates.xValue);
            setY(coordinates.yValue);
        };
    }, [coordinates])

    const power = Math.log2(value);

    const backgroundLightness = 100 - power * 9;

    return (
        <div className="tile" style={{"--x": x, "--y": y, "--background-lightness": `${backgroundLightness}%`, "--text-lightness": `${backgroundLightness <= 50 ? 90 : 10}%`}}>
            {value}
        </div>
    )
};

export default Tile;