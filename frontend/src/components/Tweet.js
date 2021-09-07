import React, {useEffect, useState} from 'react';
import Login from './LoginTest';
// import {Link} from 'react-router-dom';
// Note that the use Effect is commonly used, which is used to fetchItems from the backend
function Tweet() {
    useEffect( () => {
        fetchItems(); // function name
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('/tweets');
        const items = await data.json();
        setItems(items);
    };

    return(
        <section>
            {
            items.map(item => (
                <div class="container-fluid p-3 w-50">
                    <div class="card-deck">
                        <div class="card">
                            <div class="card-body p-1">
                                <h6 class="card-title" key={items}> {item.name}</h6>
                                <p class="card-text"  key={items}>{item.msg}</p>
                                <p class="card-text"  key={items}><i>by {item.username}</i></p>
                            </div>
                        </div>
                    </div>
                </div>
            ))
            }<Login/>
            <Login/>
            <Login/>
        </section>
    );
}

export default Tweet;