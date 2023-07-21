import React from "react";
import "../../css/parts/parts-item.css"
function PartsItem() {
    return (
        <div className="parts-item ">
            <div className="col-md-8 part-item-left-box">
                <h3 className="parts-item-title"> AMD 라이젠7-4세대 5800X (버미어) (멀티팩) (정품))</h3>
                <p className="parts-item-description">AMD(소켓AM4)/4세대(Zen3)/7nm/8코어/16쓰레드/기본 클럭:3.8GHz/최대 클럭:4.7GHz/L2 캐시:4MB/L3 캐시:32MB/TDP:105W/PCIe4.0/메모리 규격:DDR4/3200MHz/내장그래픽:미탑재/기술 지원:StoreMI,Ryzen Master,VR Ready 프리미엄/쿨러:미포함/시네벤치R23(싱글):1,593점/시네벤치R23(멀티):15416 </p>
            </div>
            <div className="col-md-3 parts-item-right-box">
                <div className="parts-item-cost">279,840원</div>
                <button className="btn btn-outline-secondary">담기 -> </button>
            </div>
        </div>
    );
}

export default PartsItem;