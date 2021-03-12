import React, { Component } from "react";

import PageWrapper from "./components/PageWrapper";
import RowContainer from "./components/RowContainer";
import OptionBtn from "./components/OptionBtn";
import EmployeeRows from "./components/EmployeeRows";
import ColumnFilters from "./components/ColumnFilters";

import employees from "./employees.json";

class App extends Component {
    state = {
        employees
    };

    filtering = () => {
        let filtered = employees.filter(employee => employee.status === "Active");
        this.setState({ employees: filtered });

        if (this.state.employees[0].status === "Active") {
            this.reset();
            let filtered = employees.filter(employee => employee.status === "Terminated");
            this.setState({ employees: filtered });
        }
    };

    sorting = () => {
        let departments = [];
        let currentDirectory = this.state.employees;

        for (let i = 0; i < currentDirectory.length; i++) {
            departments.push(currentDirectory[i].department);
        };

        departments = departments.sort();
        let uniqueDepartments = [];

        for (let i = 0; i < departments.length; i++) {
            if (departments[i] !== departments[i + 1]) {
                uniqueDepartments.push(departments[i]);
            };
        };

        let newState = [];

        for (let i = 0; i < uniqueDepartments.length; i++) {
            for (let a = 0; a < currentDirectory.length; a++) {
                if (currentDirectory[a].department === uniqueDepartments[i]) {
                    newState.push(currentDirectory[a])
                };
            };
        };
        this.setState({ employees:newState });        
    };

    reset = () => {
        this.setState({ employees });
    };

    ColumnFilters = () => {
        if (window.innerWidth > 700) {
            return <ColumnFilters />
        }
    };

    renderEmployees = () => {
        return (
            this.state.employees.map(employee => (
                <EmployeeRows
                    key={employee.id}
                    id={employee.id}
                    status={employee.status}
                    department={employee.department}
                    firstName={employee.firstName}
                    lastName={employee.lastName}
                    position={employee.position}
                    email={employee.email}
                    phone={employee.phone}
                    label1="ID"
                    label2="Status"
                    label3="Department"
                    label4="Name"
                    label5="Position"
                    label6="E-mail"
                    label7="Phone"
                />
            ))
        );
    };

    render() {
        return (
            <PageWrapper>

                <RowContainer><h1>Employee Directory</h1></RowContainer>

                <RowContainer>
                    <OptionBtn color="info" options={this.sorting}>
                        Sort by Department
                    </OptionBtn>
                    <OptionBtn color="warning" options={this.filtering}>
                        Filter by Status
                    </OptionBtn>
                    <OptionBtn color="success" options={this.reset}>
                        Reset Directory
                    </OptionBtn>
                </RowContainer>

                <RowContainer>
                    {this.ColumnFilters()}
                </RowContainer>

                {this.renderEmployees()}

            </PageWrapper>
        );
    };
};

export default App;
