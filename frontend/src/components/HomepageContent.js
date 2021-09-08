import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import '../styles/hpcontent.css'

function HomepageContent() {
        const history = useHistory();
        const handlePlayClick = () => {
            history.push('/');
        }
        const handleTIcketsClick = () => {
            history.push('/');
        }
        const handleStatisticsClick = () => {
            history.push('/');
        }
        const handleAddFundsClick = () => {
            history.push('/');
        }
    
    return (
        <div>
                <div class="row my-4"></div>
                <div class="col-md-12 div3 px-5 py-4 pt-5">
                    <div class="shadow d-flex justify-content-around align-items-center  bal">
                        <div class="balance">
                            <h1>
                                <sup>PTS</sup> 
                                1,001,115.00
                                <a href="#"><span><i class="fas fa-plus-circle"></i></span></a>
                            </h1>
                        </div>
                    </div>
                </div>
                <div class="row my-5">
                    <div class="col-md-12 px-2 d-flex justify-content-around align-items-center rounded buttons">
                        <div class="col-md-3 buttonPlay">
                            <div class="shadow play">
                                <button class="btn-group threeButton" id="bplay"onClick={handlePlayClick}><i class="fas fa-gamepad" id="icon1" style={{fontSize:"145px"}}></i></button>                            
                                <label class="description" id="play">Play</label>
                            </div>
                        </div>
                        <div class="col-md-3 buttontix">
                            <div class="shadow mytix">
                                <button class="btn-group threeButton" id="btix" onClick={handleTIcketsClick}><i class="fas fa-ticket-alt" id="icon2" style={{fontSize:"140px"}}></i></button>
                                <label class="description" id="tix">My Tickets</label>
                            </div>
                        </div>
                        <div class="col-md-3 buttonstats">
                            <div class="shadow stats">
                                <button class="btn-group threeButton" id="bstat"onClick={handleStatisticsClick}><i class="fas fa-star" id="icon3" style={{fontSize:"125px"}}></i></button>
                                <label class="description" id="stat">Stats</label>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
        </div>
    );
}
export default HomepageContent