import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UserDetails = () => {
    const {userId} = useParams();
    const [user, setUser] = useState({});

    useEffect( () => {
        const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setUser(data))
    }, [] )

    const {name,email, phone, website} = user
    return (
       
        <div className = 'user'>
            <h2>User Details : {userId}</h2>
            <hr/>
            <div className = 'userDetails'>
                <h3 style = {{borderBottom : '1px solid gray'}} > {name} </h3>
                <p> Email : {email} </p>
                <p> Phone : {phone} </p>
                <p> Website : {website} </p>
            </div>
        </div>
    );
};

export default UserDetails;