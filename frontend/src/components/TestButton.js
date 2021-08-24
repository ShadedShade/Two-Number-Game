import React, { useEffect, useState } from 'react';

function PressTest()
{
 return <section>
     <div>
         <button onClick={RenderTest}></button>
     </div>
 </section>
}


function RenderTest() {
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
        <div>
        {items.map(item => (
            <div className="container-fluid">
                <h1 class="mt-5"  key={item}>Welcome {item.name}</h1>
                <p  key={item}>This is a {item.stuff}  was created using Node JS and React.</p>
            </div>
        )) 

        }
        </div>
    </section>
}

export default PressTest;