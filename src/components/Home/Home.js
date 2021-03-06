import { useEffect, useState } from 'react';
import Users from '../Users/Users';

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect( () => {
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [] )

    return (
        <div>
            <h1> React Routing Api</h1>
            <hr/>
            <h2> Users : {users.length} </h2>

            <div>
              {
                users.map( user => <Users key = {user.id} user = {user} />)
              }
            </div>
        </div>
    );
};

export default Home;