import React from "react";
import {TotalBox} from "./totalBox";
import {SummaryList} from "./summaryList";

export function Summary({summaryItems = [], onDeleteAllClick}) {
    return (
        <>
            <SummaryList summaryItems={summaryItems}></SummaryList>
            <hr/>
            <TotalBox summaryItems={summaryItems} onDeleteAllClick={onDeleteAllClick}></TotalBox>
        </>
    )
}