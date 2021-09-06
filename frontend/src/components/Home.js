import React, { useEffect, useState } from 'react';
import Header from './Header.js'
import LoginTest from './LoginTest.js'
import Test from './TestButton.js'
import Signup from './Signup'
import Login from './Login.js';
import Sidebar from './Sidebar.js';



function Home() {
<<<<<<< HEAD
    const [items, setNames] = useState([]);
    const fetchHomeStuff = async () => {
        const data = await fetch('/home');
        const items = await data.json();
        console.log(items);
        setNames(items);
    };
<<<<<<< HEAD
    return <section>
        {<Sidebar />}
        {

        }
        <Login/>
=======
    return (
        <div>
        </div>

    );
>>>>>>> fb4aca906a9cd7a0fdf4a846e9c40d6f37b580e9

=======
    return (<div>
        <Login />
            </div>);
>>>>>>> 4654fdc9b6c2541309ff310985ba12de3c567f57
}
export default Home;