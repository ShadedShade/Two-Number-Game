import React, { useEffect, useState } from 'react';
import Header from './Header.js'
import LoginTest from './LoginTest.js'
import Test from './TestButton.js'
import Signup from './Signup'
import Login from './Login.js';
import Sidebar from './Sidebar.js';

function Home() {
    useEffect(() => {
        fetchHomeStuff(); // function name
    }, []);

    const [items, setNames] = useState([]);
    const fetchHomeStuff = async () => {
        const data = await fetch('/home');
        const items = await data.json();
        console.log(items);
        setNames(items);
    };
    return <section>
        {<Sidebar />}
        {

        }
        <Login/>

    </section>
}
export default Home;