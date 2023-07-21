import React from "react";
import '../../css/summary/summary.css';
export function SummaryItem() {

    return (
        <div className="card border border-danger">
            <div className="card-header bg-danger">
                <span className="card-header-title text-white fw-bolder">CPU</span>
            </div>
            <div className="card-body summary-item-body ">
                <p>AMD 라이젠7-4세대 5800X (버미어) (멀티팩) (정품))</p>
                <div className="summary-item-cost-box">
                    <div className="count-box">
                        <button className="btn-cnt-dwn"> -</button>
                        <input type="text" className="count-input" maxLength="3" value="1"></input>
                        <button className="btn-cnt-up"> +</button>
                    </div>
                    <div className="summary-item-cost">253,232원</div>
                </div>
            </div>
        </div>
    )
}