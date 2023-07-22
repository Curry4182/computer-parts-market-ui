import React, {useState} from "react";
import {TotalBox} from "./totalBox";
import {SummaryList} from "./summaryList";
import axios from "axios";

export function Summary({summaryItems = [], onDeleteAllClick, onCntDownClick, onCntUpClick}) {
    const [order, setOrder] = useState({
        address: "default_address", postcode: "default_postcode"
    });

    const handleSubmit =(e) => {
        axios.post("http://localhost:4923/api/orders", {
            address: order.address,
            postcode: order.postcode,
            orderItems: summaryItems.map(v => (
                {
                    partId: v.partId,
                    partCategory: v.partCategory,
                    price: v.partPrice,
                    quantity: v.partCount
                }
            ))
        }).then(v => alert("주문이 정상적으로 접수되었습니다."), e=> {
            alert("서버 장애");
            console.log(e);
        })
    }

    return (
        <>
            <SummaryList summaryItems={summaryItems} onCntDownClick={onCntDownClick} onCntUpClick={onCntUpClick}></SummaryList>
            <hr/>
            <TotalBox summaryItems={summaryItems} onDeleteAllClick={onDeleteAllClick} onSubmit={handleSubmit} ></TotalBox>
        </>
    )
}