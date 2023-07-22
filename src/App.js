import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, {useEffect, useState} from "react";
import {PartsList} from "./components/parts/partsList";
import {Summary} from "./components/summary/summary";
import axios from "axios";

function App() {

    const [computerParts, setParts] = useState([
        ]);

    useEffect(
        () => {
            axios.get('http://localhost:8080/api/computer-parts')
                .then(part => setParts(part.data));
        }, []
    );

    const [summaryItems, setSummaryItems] = useState([]);

    const handleAddToSummaryClick = partId => {
        console.log('call handleAddToSummaryClick');

        const computerPart = computerParts.find(computerPart => computerPart.partId == partId);
        const summaryItem = summaryItems.find(summaryItem => summaryItem.partId == partId);

        const updatedItems =
            summaryItem ? summaryItems.map(
                summaryItem => summaryItem.partId == partId ? { ...summaryItem, partCount: summaryItem.partCount +1} : summaryItem)
                : [...summaryItems, {...computerPart, partCount: 1}]

        setSummaryItems(updatedItems);
    }
    const handleDeleteAllClick =() => {
        setSummaryItems([]);
    }

    return (
      <div className="container-fluid">
          <div className="row justify-content-center m-4">
              <h1 className="text-center">Computer Parts Market</h1>
          </div>
          <div className="card">
              <div className="row col-md-12 mt-4 d-flex flex-row justify-content-md-center">
                  <div className="col-xl-6 col-sm-8 mt-4 d-flex flex-column align-items-start p-3 pt-0">
                      <div className="parts-title-box ">
                          <h3 className="parts-title">상품 목록</h3>
                      </div>
                      <PartsList computerParts={computerParts} onAddToSummaryClick={handleAddToSummaryClick}></PartsList>
                  </div>

                  <div className="col-xl-3 col-sm-4 p-3 border border-1 rounded-3 border-black">
                      <div class="summary-title-box">
                          <h3 className="summary-title">요약 페이지</h3>
                          <hr/>
                          <Summary summaryItems={summaryItems} onDeleteAllClick={handleDeleteAllClick}></Summary>
                      </div>
                  </div>
              </div>

          </div>
      </div>
  );
}

export default App;
