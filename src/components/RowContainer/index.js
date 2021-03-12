import React from "react";

function RowContainer(props) {
    return (
        <div className="container-fluid">
            <div className="row">
                {props.children}
            </div>
        </div>
    );
};

export default RowContainer;
