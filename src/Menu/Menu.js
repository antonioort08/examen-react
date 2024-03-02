import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return ( <
        div className = "menu" >
        <
        ul >
        <
        li > < Link to = "/lista" > Ver Lista < /Link></li >
        <
        li > < Link to = "/detalle" > Ver Detalle < /Link></li >
        <
        li > < Link to = "/tabla" > Ver Tabla < /Link></li >
        <
        /ul> < /
        div >
    );
}

export default Menu;