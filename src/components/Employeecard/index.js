import React from "react";

function Card(props) {
    return (
        <div className="container" key={props.id}>
            <div className="row">
                <div className="col-lg">
                    {props.id}
                </div>
                <div className="col-lg">
                    {props.firstName} {props.lastName}
                </div>
                <div className="col-lg">
                    {props.position}
                </div>
                <div className="col-lg">
                    <a href={"mailto:" + props.email}>{props.email}</a>
                </div>
                <div className="col-lg">
                    {props.phone}
                </div>
            </div>
            <hr />
        </div>
    );
};

export default Card;