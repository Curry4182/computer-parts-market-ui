import PartsItem from "./partsItem";
import React from "react";


export function PartsList() {

    return (
        <ul className="list-group col-md-12 border border-danger">
            <li className="list-group-item">
                <PartsItem/>
            </li>
            <li className="list-group-item ">
                <PartsItem/>
            </li>
            <li className="list-group-item">
                <PartsItem/>
            </li>
        </ul>
    );
}