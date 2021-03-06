import React from 'react';
import { Link } from 'react-router-dom';

const Users = (props) => {
    const {name, email, id} = props.user
    return (
        <div className='users' >
            <h3> Name : {name} </h3>
            <p> Email : {email} </p>
            <p> 
                <Link to = {`/user/${id}`} >
                      Show Details: {id}
                </Link>
            </p>
        </div>
    );
};

export default Users;