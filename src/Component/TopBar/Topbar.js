
import React, { Component } from 'react'
import classes from "./TopBar.module.css"

import amazonlogo from "../../assets/amazonlogonew.jpg"
import indianflag from "../../assets/indianflag.png"
class Topbar extends Component {
    render() {
        return (
            <div className={classes.TopBar}>

                <img className={classes.amazonlogo} src={amazonlogo} alt="logo"/>
                
                <h1 className={classes.content}>Hello<br></br><span className={classes.contents}>option your Location</span></h1>

                <select className={classes.select}>
                    <option className={classes.select}>All</option>
                    <option className={classes.select}>Bed</option>
                    <option className={classes.select}>Chocolate</option>
                    <option className={classes.select}>MobilePhones</option>
                    <option className={classes.select}>Refrigrator</option>
                    <option className={classes.select}>Shoes</option>
                    <option className={classes.select}>Wardrobe</option>
                    <option className={classes.select}>Womensclothing</option>
                </select><input type="search" className={classes.input_search}/>

                <div className={classes.wrapper}>
                <img className={classes.indianflag} src={indianflag} alt="logo"/>
                </div>
                <div className={classes.languageDiv}>

                    <span className={classes.radio}><input type="radio" /><span>English-EN</span></span>
                     {/* <p>_________________</p> */}
                     <hr/>
                    <span className={classes.radio}><input type="radio" /><span>Hindi-HN</span></span>
                    <span className={classes.radio}><input type="radio" /><span>Telegu-TN</span></span>
                    <span className={classes.radio}><input type="radio" /><span>Tamil-TM</span></span>
                    <span className={classes.radio}><input type="radio" /><span>Spanish-SP</span></span>

              
                </div>

                <h2 className={classes.signinText}>SignIn</h2>

                <span><h2 className={classes.cartText} >0:<i class="fas fa-shopping-cart"></i></h2></span>
               
        </div>
        )
    }
}

export default Topbar
