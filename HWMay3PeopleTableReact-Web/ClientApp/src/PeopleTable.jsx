import React from 'react';
import PersonForm from './PersonForm';
import PersonRow from './PersonRow';
import 'bootstrap/dist/css/bootstrap.min.css';


class PeopleTable extends React.Component {

    State = {
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
        const copy = [this.state.People];
        const person = {
            FirstName: this.State.FirstName,
            LastName: this.State.LastName,
            Age: this.State.Age
        };

        copy.push(person);
        this.setState({ People: copy, firstName: '', lastName: '', age: '' });
    }

    onclearclick = () => {
        this.setState({ People: [], firstName: '', lastName: '', age: '' });
    }


    render() {
        return (

            <div>
                <PersonForm onfnchange={this.onfnchange} onlnchange={this.onlnchange} onagechange={this.onagechange}
                    onAddClick={this.onAddClick} onclearclick={this.onclearclick} firstName={this.State.FirstName}
                    lastName={this.State.LastName} age={this.State.Age} />
                {this.State.People.length === 0 ?
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
                            <PersonRow people={this.State.People} />
                        </tbody>

                    </table>
                }
            </div>

        )
    }

};
export default PeopleTable;
