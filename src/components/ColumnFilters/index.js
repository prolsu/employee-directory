import React from "react";

function ColumnFilters(props) {
    return (
        <div className="container-fluid" key={props.id}>
            <div className="row">
                <div className="col-sm">
                    <strong>Employee ID:</strong>
                </div>
                <div className="col-sm">
                    <strong>Status:</strong>
                </div>
                <div className="col-sm">
                    <strong>Department:</strong>
                </div>
                <div className="col-sm">
                    <strong>Employee Name:</strong>
                </div>
                <div className="col-sm">
                    <strong>Position:</strong>
                </div>
                <div className="col-sm">
                    <strong>Email:</strong>
                </div>
                <div className="col-sm">
                    <strong>Phone Number:</strong>
                </div><hr />
            </div>
        </div>
    );
};

export default ColumnFilters;
