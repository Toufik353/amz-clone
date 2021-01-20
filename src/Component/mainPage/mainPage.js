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

import axios from "axios"
import { Link } from 'react-router-dom'

import RightPage from "../RightPage/RightPage"


 class MainPage extends Component {
     state={
       mainCards:[]
     }

  

     componentDidMount() {
         axios.get("https://5ee249468b27f300160948f0.mockapi.io/PracticeArena")
         .then(response=>{
             this.setState({mainCards : [...response.data]})
            })
            .catch(err=>{
                console.log("error")
            })
            
     }
     

    render() {

        console.log(this.state.mainCards)
        var card = this.state.mainCards.map(item=>{
            return (
               <Link to={`/productListing/${item.id}`}><div key={item.productName}className={classes.cards}>
                  <img className={classes.img} src={item.imageURL} alt="bed"/>
                  <p>{item.productName}</p>
               </div>
               </Link>
            )
        })
        return (
            <div className={classes.mainPage}>

                <div className={classes.leftPage}>
                 
                 {card}

                 

                </div>

                <div className={classes.rightPage}>
                
               
                 <RightPage/>

                </div>
                
            </div>
        )
    }
}

export default MainPage

//==============================================================================================================================
// import React from "react";
// import ReactDOM from "react-dom";

// import classes from  "./mainPage.module.css";

// class MainPage extends React.Component {
//   constructor(props) {
//     super(props);
//     // this.switchImasge = this.switchImage.bind(this);
//     this.state = {
//       currentImage: 0,
//       images: [
//         "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/Desktop_QC_tile_graphic_372x232_2._SY116_CB414480869_.jpg",
//         "https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/2-1_186x116._SY116_CB430773131_.jpg",
//         "https://images-eu.ssl-images-amazon.com/images/G/31/IMG19/Furniture/MSO/WFH_379x304._SY304_CB430182042_.jpg",
//         "https://images-eu.ssl-images-amazon.com/images/G/31/in-certifiedrefurbished/gateway/Ver2_GW._SY304_CB446171261_.jpg"
//       ]
//     };
//   }

//   switchImage=()=> {
//     if (this.state.currentImage < this.state.images.length - 1) {
//       this.setState({
//         currentImage: this.state.currentImage + 1
//       });
//     } else {
//       this.setState({
//         currentImage: 0
//       });
//     }
//     return this.currentImage;
//   }

//   componentDidMount() {
//     setInterval(this.switchImage, 5000);
//   }

//   render() {
//     return (
//       <div className="slideshow-container">
//         <img
//           src={this.state.images[this.state.currentImage]}
//           alt="cleaning images"
//         />
//       </div>
//     );
//   }
// }
// // const rootElement = document.getElementById("root");
// // ReactDOM.render(<App />, rootElement);

// export default  MainPage;