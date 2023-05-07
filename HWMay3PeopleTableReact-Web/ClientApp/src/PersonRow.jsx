import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

{
    class PersonRow extends React.Component{
        render() {
            {
                this.props.People.map(p => <tr>
                    <td>{p.FirstName}</td>
                    <td>{p.lastName}</td>
                    <td>{p.Age}</td>
                </tr>)
            }
           
        }

    }
}
export default PersonRow;


