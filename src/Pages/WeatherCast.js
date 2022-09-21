import React, { useState,useEffect} from "react";


export const Head = () => {
    return (
      <>
        <div style={styled.HeadContainer}>
          <h1 style={styled.HeadFont}>Weather Cast .</h1>
        </div>
      </>
    );
  }; 

export const Foot = () => {
    return (
      <>
        <div style={styled.FootCont}>
          <p style={styled.FootFont}>Powered By the CastCrew .</p>
        </div>
      </>
    );
  };

  export const TempApp=()=>{

    const[city,setCity]=useState('');
    const[search,setSearch]=useState("Tiruppur");

    useEffect(()=> {
      
        const fetchApi= async()=>{
        const url =`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=1b4d0388432662aa69ebe83f48d25636&units=metric`
        const response = await fetch(url);
        const res = await response.json()
        console.log(res);
        setCity(res)
    }
    fetchApi()
    },[search])

    return(
        <>
        <div style={styled.Body}>
            <div style={styled.Content}> 
              <input placeholder="Search Region" type="search" onChange={(event)=>{
              setSearch(event.target.value)
              }}
               style={styled.Input}/> 

               {!city?.main && !city?.weather && !city?.sys  ? 
                (
                <h2> City Not Found !</h2>
                )
                :
                (
                <div>
                <h1 style={{marginTop:"50px"}}>{search}</h1>
               
                <h2>
                {city?.main?.temp}°Cel
                </h2>
                <h3>PRESSURE : {city?.main?.pressure} mm</h3>
                <h3>HUMIDITY : {city?.main?.humidity}</h3>
                <h3>COUNTRY : {city?.sys?.country}</h3>
                <h3>WEATHER : {city?.weather[0]?.main}</h3>
                <h3>CONDITION : {city?.weather[0]?.description}</h3>
                <h3>Min: {city?.main?.temp_min} | Max: {city?.main?.temp_max}</h3>
                </div>
                )}

            </div>
            
        </div>

        </>
    )
  }
 
  const styled = {
    HeadContainer: {
      padding: "1.5rem 1px",
      backgroundColor: "#33adad",
      color: " white",
      width: "100%",
      display: "flex",
      justifyContent: "start",
      opacity:"0.7"
    },
    HeadFont: {
      padding: "1px 50px",
      lineHeight: "20px",
    },
    FootCont: {
      padding: "1px 1px ",
      width: "100%",
      backgroundColor: "#33adad",
      opacity:"0.7"
    },
    FootFont: {
      display: "flex",
      justifyContent: "center",
      color: " white",
    },
    Body: {
        heigth: '100%',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        direction: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        opacity:""
         },
    Content: {
        border: '1px solid  #ffdb4d',
        height: '100%',
        direction: 'column',
        justifyContent: 'center',
        padding: '30px 70px',
        backgroundColor: ' white',
        borderRadius: '10px',
        opacity:"0.8"
    },
    Input:{
        padding:"15px 60px",
        borderRadius:"7px",
        border:"2px solid  #ffdb4d",
        color:"white",
        backgroundColor:"#0d0d0d"
    }
  }