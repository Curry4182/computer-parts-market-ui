import {SummaryItem} from "./summaryItem";
import React from "react";

export function SummaryList({summaryItems = [], onCntDownClick, onCntUpClick}) {
    return(
        <ul className="list-group">
            {summaryItems.map(item =>
                <li className="list-group-item border border-0">
                    <SummaryItem {...item} onCntDownClick={onCntDownClick} onCntUpClick={onCntUpClick} />
                </li>
            )}
        </ul>
    )
}