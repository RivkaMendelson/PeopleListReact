﻿import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class PersonForm extends React.Component {
    render() {
        return (
            <div className='col-md-6'>
                
                <div className='col-md-3'>
                    <input value={this.props.firstName} onChange={this.props.onfnchange} type='text' placeholder='First Name' className='form-control' />
                </div>
                <div className='col-md-3'>
                    <input value={this.props.lastName} onChange={this.props.onlnchange} type='text' placeholder='Last Name' className='form-control' />
                </div><div className='col-md-3'>
                    <input value={this.props.age} onChange={this.props.onagechange} type='text' placeholder='Age' className='form-control' />
                </div>

                <div className='col-md-1'>
                    <button onClick={this.props.onAddClick} className='btn btn-dark w-100'>Add</button>
                </div>
                <div className='col-md-1'>
                    <button onClick={this.props.onClearClick} className='btn btn-warning w-100'>Clear</button>
                    </div>

            </div>
        );
    }
}

export default PersonForm;
