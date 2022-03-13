import { Outlet, Link } from "react-router-dom";

import React from 'react';


export default function Home()  {
  return (
<h1>
<Link to="/">App</Link>

<Link to="/Home">Page2</Link>
    <Link to="/Conhecimentos">Page3</Link>
    <Link to="/Serviços">Page4</Link>
    <Link to="/Contato">Page5</Link>
  
   
Você acessou a Home


    
</h1>
    
  );
}
