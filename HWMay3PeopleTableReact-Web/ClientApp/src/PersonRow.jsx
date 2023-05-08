import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class PersonRow extends React.Component {
    render() {
        return (<>

            {this.props.people.map(p => <tr>
                <td>{p.FirstName}</td>
                <td>{p.LastName}</td>
                <td>{p.Age}</td>
            </tr>)
            }
        </>)

    }

}

export default PersonRow;


