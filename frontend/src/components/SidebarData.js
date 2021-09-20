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
        title: "Logout",
        icon: <ExitToAppRoundedIcon />,
        link: "/"
    },
]