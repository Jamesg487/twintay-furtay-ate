import React, { useState, useEffect } from "react";

const Cell = ({xValue, yValue}) => {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    useEffect(() => {
        setX(xValue)
    }, [])

    useEffect(() => {
        setY(yValue)
    }, [])

    return (
        <div className="cell"></div>
    )
};

export default Cell;