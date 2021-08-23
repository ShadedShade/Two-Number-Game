import React, {useEffect, useState} from 'react';
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
        console.log("What is problem?"+items);
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
                                <h6 class="card-title">{item.name}</h6>
                                <p class="card-text">{item.msg}</p>
                                <p class="card-text"><i>by {item.username}</i></p>
                            </div>
                        </div>
                    </div>
                </div>
            ))
            }
        </section>
    );
}

export default Tweet;