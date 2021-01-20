import React, { Component } from 'react'
import classes from "./RightPage.module.css"

import addone from "../../assets/addone.jpg"
import addtwo from "../../assets/addtwo.jpg"
import addthree from "../../assets/addthree.jpg"

class RightPage extends Component {

    state={
        addArr:[addone, addtwo, addthree],
      
        count:0,

       
    }

    //refrence website https://stackoverflow.com/questions/57107633/changing-an-image-on-in-time-interval-using-reacts

    handleAds=()=>{
   
         if(this.state.count < this.state.addArr.length-1){
             this.setState({count : this.state.count + 1})
         }else{
             this.setState({count : 0})
         }

         return 
    }

    componentDidMount() {
        setInterval(this.handleAds,5000)
    }
    
    render() {
        return (
            <div className={classes.cards} onClick={this.handleAds}>
            <img className={classes.img} src={this.state.addArr[this.state.count]} alt="bed"/>
            <p>womensclothing</p>
            </div>
        )
    }
}

export default RightPage
