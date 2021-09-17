import React from 'react'
import { Link } from 'react-router-dom';
/* MATERIAL UI - ICONS */
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import ReceiptRoundedIcon from '@material-ui/icons/ReceiptRounded';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
/*=====================*/  

export const SidebarData = [
    {
        title: "Homepage",
        icon: <HomeRoundedIcon />,
        link: "/Home"
    },
    {       
        // Then you bind the link created in app.js in the link parameter
        title: "Mechanics",
        icon: <ReceiptRoundedIcon />,
        link: "/Home/Mechanics"
    },
    {
        title: "Transfer Credit",
        icon: <SendRoundedIcon />,
        link: "/transfer"
    },
    {
        title: "Logout",
        icon: <ExitToAppRoundedIcon />,
        link: "/logout"
    },
]