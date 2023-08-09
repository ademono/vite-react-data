import React, { useContext } from "react";
import { DataContext } from "../context/page";

function ClassComponent() {
    const { data } = useContext(DataContext);

    return (
        <div>
            <h1>Ini Class Component {data}</h1>
        </div>
    );
}

export default ClassComponent;
