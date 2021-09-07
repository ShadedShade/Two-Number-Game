import React, { useEffect, useState } from 'react';
import '../styles/hpcontent.css'
/*
    Add Credit: import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
    Play: import SportsEsportsRoundedIcon from '@material-ui/icons/SportsEsportsRounded';
    Tickets: import ConfirmationNumberRoundedIcon from '@material-ui/icons/ConfirmationNumberRounded';
    Stats: import StarRoundedIcon from '@material-ui/icons/StarRounded';
*/ 

function HomepageContent() {
    return (
        <div>
                <div class="row my-5"></div>
                <div class="col-md-12 div3 px-5 py-4 ">
                    <div class="p-3 bg-white shadow d-flex justify-content-around align-items-center rounded">
                        <div class="balance">
                            <h1><sup>PTS</sup> 1,001,115.00</h1>
                        </div>
                    </div>
                </div>
                <div class="row my-5">
                    <div class="col-md-12 px-2 d-flex justify-content-around align-items-center rounded buttons">
                        <div class="col-md-3 bg-white shadow">1</div>
                        <div class="col-md-3 bg-white shadow">2</div>
                        <div class="col-md-3 bg-white shadow">3</div>
                    </div>
                </div>
        </div>
    );
}
export default HomepageContent