import PartsItem from "./partsItem";
import React from "react";


export function PartsList({computerParts = [], onAddToSummaryClick}) {

    return (
        <ul className="list-group col-md-12 border border-danger">
            {computerParts.map(computerPart=>
                <li key={computerPart.partId} className={"list-group-item"}>
                    <PartsItem {...computerPart} onAddToSummaryClick={onAddToSummaryClick}></PartsItem>
                </li>
            )}
        </ul>
    );
}