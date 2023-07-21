import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react";
import PartsItem from "./components/parts/partsItem";
import './css/summary/summary.css';
import {SummaryItem} from "./css/summary/summary/summaryItem";

function App() {
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
                      <ul className="list-group col-md-12 border border-danger">
                          <li className="list-group-item">
                            <PartsItem/>
                          </li>
                          <li className="list-group-item ">
                            <PartsItem/>
                          </li>
                          <li className="list-group-item">
                              <PartsItem/>
                          </li>
                      </ul>
                  </div>

                  <div className="col-xl-3 col-sm-4 p-3 border border-1 rounded-3 border-black">
                      <div class="summary-title-box">
                          <h3 className="summary-title">요약 페이지</h3>
                          <hr/>
                          <ul className="list-group">
                              <li className="list-group-item border border-0">
                                  <SummaryItem></SummaryItem>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>

          </div>
      </div>
  );
}

export default App;
