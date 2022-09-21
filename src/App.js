
import React from "react";
import ToDo from "./Pages/ToDo";

import { Head,Foot, TempApp } from "./Pages/WeatherCast";

const App = () =>{
    return (
        <div>
           <Head/> 
           <TempApp/>
           <Foot/>
           {/* <ToDo/> */}
        </div>
    )
}
export default App