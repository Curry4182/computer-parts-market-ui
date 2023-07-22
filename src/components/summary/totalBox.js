import React from "react";
import '../../css/summary/total.css';

export function TotalBox(props) {
    const handleDeleteAllClicked = () => {
        props.onDeleteAllClick();
    }

    return (
        <div className="total-box">
            <div className="total-count-box">
                <span className="total-count"> 총 <span className="fw-bold">1</span>개 품목선택</span>
                <button className="btn btn-outline-secondary" onClick={handleDeleteAllClicked}> 전체삭제 </button>
            </div>
            <div className="total-cost-container">
                <span className="total-cost-title">총 합계금액</span>
                <span className="total-cost">9,593,332원</span>
            </div>
            <footer className="total-footer">
                <btn className="total-footer-btn btn btn-danger"> 구매하기 </btn>
            </footer>
        </div>
    )
}