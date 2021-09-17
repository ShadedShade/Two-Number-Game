import React, { useEffect, useState } from 'react';
import aboutimg from '../img/aboutus.jpg';
import Sidebar from './Sidebar.js'
import HomeNav from './HomeNav.js'



function Mechanics() {
    return (
        <div>

            <div>
                <div>
                    <HomeNav />
                </div>
                <div>
                    {/* Gawin mo nalang tong dalawang column if ayaw gumana gawin mo nalang modal HAHAHAH */}
                    <Sidebar />
                    <h1>WHAT</h1>
                </div>
            </div>
        </div>
    );
}
export default Mechanics;