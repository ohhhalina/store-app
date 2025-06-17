import React, { useState } from 'react'
import Logo from "../Assets/Logo.svg"
import { BsCart2 } from "react-icons/bs"
import { HiOutlineBars3 } from "react-icons/hi2"
import Box from '@mui/material/Box';
import { Anchor } from '@mui/icons-material/Anchor'
import Drawer from '@mui/material/Drawer'
import HomeIcon from "@mui/icons-material/Home"
import InfoIcon from "@mui/icons-material/Info"
import CommentRoundedIcon from "@mui/icons-material/CommentRounded"
import PhoneRounded from "@mui/icons-material/PhoneRounded"
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded"
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import List from "@mui/material/List"

const Navbar = () => {

const [openMenu, setOpenMenu] = useState(false);
const menuOptions = [
    {
        text:"Home",
        icon:<HomeIcon />
    },
    {
        text:"About",
        icon:<InfoIcon />
    },
    {
        text:"Testimonials",
        icon:<CommentRoundedIcon />
    },
    {
        text:"Contact",
        icon:<PhoneRounded />
    },
    {
        text:"Cart",
        icon:<ShoppingCartRoundedIcon />
    }
]

  return (
    <nav>
        <div className="nav-logo-container">
            <img src={Logo} alt="" />
        </div>
        <div className="navbar-links-container">
            <a href='/Home'>Главная</a>
            <a href='/About'>О нас</a>
            <a href='/Testimonials'>Отзывы</a>
            <a href='/Contact'>Контакты</a>
            <a href=''>
                <BsCart2 className='navbar-cart-icon' />
            </a>
            <button className='primary-button'>Бронирование</button>
        </div>
        <div className="navbar-menu-container">
            <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
        </div>
        <Drawer open={openMenu} onClose={() => setOpenMenu(false)}
            anchor="right">
                <Box
                    sx={{width:250}}
                    role="presentation"
                    onClick={() => setOpenMenu(false)}
                    onKeyDown={() => setOpenMenu(false)}
                    >
                        <List>
                            {menuOptions.map((item) => (
                            <ListItem key={item.text} disablePadding >
                             <ListItemButton>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text} />
                             </ListItemButton>
                            </ListItem>
                            ))}
                        </List>
                </Box>
            </Drawer>
    </nav>
  )
}

export default Navbar
