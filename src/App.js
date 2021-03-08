import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import SortBtn from "./components/SortBtn";
import Directorycolumns from "./components/Directorycolumns";
import Employeecard from "./components/Employeecard";
import employees from "./employees.json";

class App extends Component {
    state = {
        employees
    };

    render() {
        return (
            <Wrapper>
                <Title>Employee Directory</Title>
                <SortBtn />
                <Directorycolumns />
                {this.state.employees.map(employee => (
                    <Employeecard    
                        id={employee.id}
                        firstName={employee.firstName}
                        lastName={employee.lastName}
                        position={employee.position}
                        email={employee.email}
                        phone={employee.phone}
                    />
                ))}
            </Wrapper>
        );
    };
};

export default App;
