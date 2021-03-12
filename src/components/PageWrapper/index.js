import React from "react";

function PageWrapper(props) {
    return(
        <div className="container-fluid">
            {props.children}
        </div>
    );
};

export default PageWrapper;