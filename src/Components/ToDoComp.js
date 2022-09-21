import React, { useState } from "react";

export const Head = () => {
  return (
    <>
      <div style={styled.HeadContainer}>
        <h1 style={styled.HeadFont}>Incresco Technologies</h1>
      </div>
    </>
  );
};
export const Foot = () => {
    return (
      <>
        <div style={styled.FootCont}>
          <p style={styled.FootFont}>Powered By Inc </p>
        </div>
      </>
    );
  };

 const Todo = () => {
    const [input, setInput] = useState('')
    const [items, setItems] = useState([])

    const itemEvent = (event) => {
        setInput(event.target.value)
    }

    const listOfItems = () => {
        if(!input){ 

        }
        else{
        setItems((oldItems) => {
            return [...oldItems, input] 
        })}
        
    }

    const deleteItems = (id) => {
        return setItems((oldItems) => {
            return oldItems.filter((arrEle, index) => {
                return index !== id
            })
        })
    }
        //Storing the values 
    return (
        <>
            <div style={styled.Body}>
                <div style={styled.Content}>
                    <h1
                        style={{
                            marginLeft: '20px', 
                            color: 'black',
                            wordSpacing: '4px',
                        }}
                    >
                        TODO LIST
                    </h1>
                    <br />
                    <input
                        type="text"
                        placeholder="Add Items"
                        style={styled.Input}
                        onChange={itemEvent}
                        value={input}
                    />
                    <button style={styled.Button} onClick={listOfItems} >
                    
                        +
                    </button>
                    <ol>
                        {items.map((val, index) => {
                            return (
                                <h3>
                                <TodoListComp
                                    text={val}
                                    key={index}
                                    id={index}
                                    onSelect={deleteItems}
                                /></h3>
                            )
                        })}
                    </ol>
                </div>
            </div>
        </>
    )
}
export default Todo

export const TodoListComp = (props) => {

    return (
        <>
            <div style={{ display: 'flex', direction: 'row', }}>
                <button
                    style={{
                        borderRadius: '50%',
                        marginRight: '10px',
                        border: '1px solid red',
                        color: 'white',
                        backgroundColor:'red '
                    }}
                    onClick={()=>{
                        props.onSelect(props.id)
                    } }
                >
                    x
                </button>
                {props.text}
            </div>
        </>
    )
}

  const styled = {
    HeadContainer: {
      padding: "1.5rem 1px",
      backgroundColor: "black",
      color: "white",
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
      backgroundColor: "black",
    },
    FootFont: {
      display: "flex",
      justifyContent: "center",
      color: "white",
    },
    Body: {
        heigth: '100%',
        width: '100%',
        minHeight: '100vh',
        backgroundColor: 'black',
        display: 'flex',
        direction: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Content: {
        border: '1px solid #008AF7',
        height: '60%',
        direction: 'column',
        justifyContent: 'center',
        padding: '50px',
        backgroundColor: 'white',
        borderRadius: '10px',
    },
    Input: {
        border: '1px solid black',
        padding: '10px',
        borderRadius: '10px',
        color: 'white',
        backgroundColor:"black"
    },
    Button: {
        borderRadius: '50%',
        border: '2px solid lightgreen',
        color: 'green',
        backgroundColor: 'lightgreen',
        padding: '6px',
        marginLeft: '20px',
    },
}
