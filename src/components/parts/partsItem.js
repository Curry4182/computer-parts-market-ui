import React from "react";
import "../../css/parts/parts-item.css"
function PartsItem(props) {
    const partId = props.partId;
    const partName = props.partName;
    const partCategory = props.partCategory;
    const partPrice = props.partPrice;
    const partDescription = props.partDescription;


    const handleAddToSummaryClicked = e => {
        props.onAddToSummaryClick(partId);
    }

    return (
        <div className="parts-item ">
            <div className="col-md-8 part-item-left-box">
                <h3 className="parts-item-title">{partName}</h3>
                <p className="parts-item-description">{partDescription} </p>
            </div>
            <div className="col-md-3 parts-item-right-box">
                <div className="parts-item-cost">{partPrice.toLocaleString('ko-KR')}원</div>
                <button onClick={handleAddToSummaryClicked} className="btn btn-outline-secondary">담기 -> </button>
            </div>
        </div>
    );
}

export default PartsItem;