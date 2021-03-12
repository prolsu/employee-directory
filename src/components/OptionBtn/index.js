import React from "react";

function SortBtn(props) {
    return (
        <div className="col-sm-auto">
            <button onClick={() => props.options()} type="button" className={"btn btn-" + props.color + " btn-sm"}>{props.children}</button>
        </div>
    );
};

export default SortBtn;