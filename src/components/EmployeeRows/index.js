import React from "react";
import StrongFont from "../StrongFont";

function EmployeeRows(props) {
    return (
        <div className="container-fluid" key={props.id}>
            <div className="row">
                <div className="col-sm">
                    <StrongFont>{window.innerWidth < 700 ? props.label1 + ": " : ""}</StrongFont>{props.id}
                </div>
                <div className="col-sm">
                    <StrongFont>{window.innerWidth < 700 ? props.label2 + ": " : ""}</StrongFont>{props.status}
                </div>
                <div className="col-sm">
                    <StrongFont>{window.innerWidth < 700 ? props.label3 + ": " : ""}</StrongFont>{props.department}
                </div>
                <div className="col-sm">
                    <StrongFont>{window.innerWidth < 700 ? props.label4 + ": " : ""}</StrongFont>{props.lastName}, {props.firstName}
                </div>
                <div className="col-sm">
                    <StrongFont>{window.innerWidth < 700 ? props.label5 + ": " : ""}</StrongFont>{props.position}
                </div>
                <div className="col-sm">
                    <StrongFont>{window.innerWidth < 700 ? props.label6 + ": " : ""}</StrongFont> <a href={"mailto:" + props.email}>{props.email}</a>
                </div>
                <div className="col-sm">
                    <StrongFont>{window.innerWidth < 700 ? props.label7 + ": " : ""}</StrongFont>{props.phone}
                </div>
            </div>
            <hr />
        </div>
    );
};

export default EmployeeRows;