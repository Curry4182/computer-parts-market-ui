import {SummaryItem} from "./summaryItem";
import React from "react";


export function SummaryList() {

    return(
        <ul className="list-group">
            <li className="list-group-item border border-0">
                <SummaryItem></SummaryItem>
            </li>
            <li className="list-group-item border border-0">
                <SummaryItem></SummaryItem>
            </li>
        </ul>
    )
}