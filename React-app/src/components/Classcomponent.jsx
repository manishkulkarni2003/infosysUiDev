import React from "react";


class Classcomponent extends React.Component{
    constructor(props){
        super(props)
        this.state={count:0};  //We use this keyword to initialize the Class Component state and Refer the State and intialize the State
    }
    //Without Binding it will Call to the it will not refer to the class component rather it will refer the Function
    handleButton=()=>{
        this.setState((prevState)=>({
            count:prevState.count+1
        }))
    }
    //we use Arrow Function to Auto Bind it 
    //Here Binding Fixes the Reference of the this KEyword
    render(){
        return(
            <>
            <div>
                <button onClick={this.handleButton}>Click me Im Class Based Button</button>
                <div>{this.state.count}</div>
            </div>

            </>
        )
    }
}

export default Classcomponent;