import React from "react";
import {TotalBox} from "./totalBox";
import {SummaryList} from "./summaryList";

export function Summary({summaryItems = [], onDeleteAllClick, onCntDownClick, onCntUpClick}) {
    return (
        <>
            <SummaryList summaryItems={summaryItems} onCntDownClick={onCntDownClick} onCntUpClick={onCntUpClick}></SummaryList>
            <hr/>
            <TotalBox summaryItems={summaryItems} onDeleteAllClick={onDeleteAllClick} ></TotalBox>
        </>
    )
}