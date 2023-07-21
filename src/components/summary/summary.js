import React from "react";
import {TotalBox} from "./totalBox";
import {SummaryList} from "./summaryList";

export function Summary() {
    return (
        <>
            <SummaryList></SummaryList>
            <hr/>
            <TotalBox></TotalBox>
        </>
    )
}