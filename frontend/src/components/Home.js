import React, { useEffect, useState } from 'react';
import Header from './Header.js'
import LoginTest from './LoginTest.js'
import Test from './TestButton.js'
import Signup from './Signup'
import Login from './Login.js';

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
            {/* <Header/>
        <div>
        {items.map(item => (
            <div className="container-fluid text-center bg-light features-icons ">
                <h1 class="mt-5"  key={item}>Welcome {item.name}</h1>
                <p  key={item}>This is a {item.stuff}  was created using Node JS and React.</p>
            </div>
        )) 
    }
        </div> */}
        <Login/>

    </section>
}
export default Home;