import React from "react";
import '../../css/summary/summary.css';
export function SummaryItem(props) {
    const partId = props.partId;
    const partName = props.partName;
    const partCategory = props.partCategory;
    const partPrice = props.partPrice;
    const partDescription = props.partDescription;
    const partCount = props.partCount;



    return (
        <div className="card border border-danger">
            <div className="card-header bg-danger">
                <span className="card-header-title text-white fw-bolder">{partCategory}</span>
            </div>
            <div className="card-body summary-item-body ">
                <p>{partName}</p>
                <div className="summary-item-cost-box">
                    <div className="count-box">
                        <button className="btn-cnt-dwn"> -</button>
                        <input type="text" className="count-input" maxLength="3" value={partCount}></input>
                        <button className="btn-cnt-up"> +</button>
                    </div>
                    <div className="summary-item-cost">{partPrice}원</div>
                </div>
            </div>
        </div>
    )
}