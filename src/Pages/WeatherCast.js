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
          <p style={styled.FootFont}>Powered By the CastCrew . </p>
        </div>
      </>
    );
  };

  export const TempApp=()=>{

    const[city,setCity]=useState(null);
    const[search,setSearch]=useState("Coimbatore");

    useEffect(()=>
    {
        const fetchApi= async()=>{
        const url =`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=1b4d0388432662aa69ebe83f48d25636&units=metric`
        const response = await fetch(url);
        const res = await response.json()
        console.log(res);
        setCity(res.main)
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
               style={styled.Input}></input> 
               {!city?(<p Style={{color:"red"}}> Data Not Found</p>):(
                <div>
                <h1 style={{marginTop:"50px"}}>{search}</h1>
                <h2>
                {city?.temp}°Cel
                </h2>
                <h3>PRESSURE : {city?.pressure} mm</h3>
                <h3>HUMIDITY : {city?.humidity}</h3>
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
      backgroundColor: "#0d0d0d",
      color: " #ffdb4d",
      width: "100%",
      display: "flex",
      justifyContent: "start",
    },
    HeadFont: {
      padding: "1px 50px",
      lineHeight: "20px",
      
    },
    FootCont: {
      padding: "1px 1px ",
      width: "100%",
      backgroundColor: "#0d0d0d",
    },
    FootFont: {
      display: "flex",
      justifyContent: "center",
      color: " #ffdb4d",
    },
    Body: {
        heigth: '100%',
        width: '100%',
        minHeight: '90vh',
        backgroundColor: '#0d0d0d',
        display: 'flex',
        direction: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Content: {
        border: '1px solid  #ffdb4d',
        height: '100%',
        direction: 'column',
        justifyContent: 'center',
        padding: '30px 70px',
        backgroundColor: ' #ffdb4d',
        borderRadius: '10px',
    },
    Input:{
        padding:"15px 60px",
        borderRadius:"7px",
        border:"2px solid  #ffdb4d",
        color:"white",
        backgroundColor:"#0d0d0d"
    }
  }