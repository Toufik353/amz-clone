import classes from './mainPage.module.css'
import React, { Component } from 'react'

import bed from "../../assets/bed.jpg"
import chocolates from "../../assets/chocolates.jpg"
import mobilephones from "../../assets/mobilephones.jpg"
import refrigator from "../../assets/refrigator.jpg"
import shoes from "../../assets/shoes.jpg"
import television from "../../assets/television.jpg"
import wardrobe from "../../assets/bed.jpg"
import womensclothing from "../../assets/womensclothing.jpg"

import addone from "../../assets/addone.jpg"
import addtwo from "../../assets/addtwo.jpg"
import addthree from "../../assets/addthree.jpg"


 class MainPage extends Component {
     state={
         addArr:[addone, addtwo, addthree],
         addUrl:[],
         count:0
     }

     handleAds=()=>{
         for(let i=1;i<=this.state.addArr.length;i++){
                setInterval(()=>{
           let addCount=this.state.count+1;
        this.setState({addUrl:[...this.state.addArr.slice(addCount,1)],count:addCount})
            
        },5000)
     }
    }

    render() {
        // console.log(this.state.addArr)

        // console.log(this.state.addUrl)
        console.log(this.state.addUrl)
        return (
            <div className={classes.mainPage}>

                <div className={classes.leftPage}>
                 
                 <div className={classes.cards}>
                    <img className={classes.img} src={bed} alt="bed"/>
                    <p>bed</p>
                 </div>

                 <div className={classes.cards}>
                    <img className={classes.img} src={chocolates} alt="bed"/>
                    <p>chocolates</p>
                 </div>

                 <div className={classes.cards}>
                    <img className={classes.img} src={mobilephones} alt="bed"/>
                    <p>mobilephones</p>
                 </div>

                 <div className={classes.cards}>
                 <img className={classes.img} src={refrigator} alt="bed"/>
                 <p>refrigator</p>
                 </div>

                 <div className={classes.cards}>
                    <img className={classes.img} src={shoes} alt="bed"/>
                    <p>shoes</p>
                 </div>

                 <div className={classes.cards}>
                    <img className={classes.img} src={television} alt="bed"/>
                    <p>television</p>
                 </div>

                 <div className={classes.cards}>
                    <img className={classes.img} src={wardrobe} alt="bed"/>
                    <p>wardrobe</p>
                 </div>

                 <div className={classes.cards}>
                    <img className={classes.img} src={womensclothing} alt="bed"/>
                    <p>womensclothing</p>
                 </div>

                </div>

                <div className={classes.rightPage}>
                
                <div className={classes.cards} onClick={this.handleAds}>
                    <img className={classes.img} src={this.state.addUrl.join('')} alt="bed"/>
                    <p>womensclothing</p>
                 </div>

                </div>
                
            </div>
        )
    }
}

export default MainPage
