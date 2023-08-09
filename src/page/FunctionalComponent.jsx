import React, { useContext } from "react";
import { DataContext } from "../context/page";

export default function FunctionalComponent() {
    const { data, setData } = useContext(DataContext);
    return (
        <div>
            <h1>Ini Component Functional {data}</h1>
            <button onClick={() => setData((prevState) => prevState + 1)}>
                tambah
            </button>
        </div>
    );
}
