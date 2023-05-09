import React from 'react';
import PersonForm from './PersonForm';
import PersonRow from './PersonRow';
import 'bootstrap/dist/css/bootstrap.min.css';


class PeopleTable extends React.Component {

    state = {
        FirstName: "",
        LastName: "",
        Age: "",
        People: []
    }

    onfnchange = (e) => {
        this.setState({ FirstName: e.target.value })
    }

    onlnchange = (e) => {
        this.setState({ LastName: e.target.value })
    }
    onagechange = (e) => {
        this.setState({ Age: e.target.value })
    }

    onAddClick = () => {
        const copy = [...this.state.People];
        const person = {
            FirstName: this.state.FirstName,
            LastName: this.state.LastName,
            Age: this.state.Age
        };

        copy.push(person);
        this.setState({ People: copy, FirstName: '', LastName: '', Age: '' });
    }

    onClearClick = () => {
        this.setState({ People: [], FirstName: '', LastName: '', Age: '' });
    }


    render() {
        return (

            <div>
                <PersonForm onfnchange={this.onfnchange} onlnchange={this.onlnchange} onagechange={this.onagechange}
                    onAddClick={this.onAddClick} onClearClick={this.onClearClick} firstName={this.state.FirstName}
                    lastName={this.state.LastName} age={this.state.Age} />
                {this.state.People.length === 0 ?
                    <h1>No people added yet! Add some people</h1> :
                    <table className='table table-striped table-hover table-bordered'>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            <PersonRow people={this.state.People} />
                        </tbody>

                    </table>
                }
            </div>

        )
    }

};
export default PeopleTable;
