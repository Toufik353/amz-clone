import React from 'react';
import {faStar} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarHalf } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons"
import classes from "./Detail.module.css"

 function Detail() {
    return (
        <div>
         <div className={classes.heading}>
        <span className={classes.word1}>Home and Kitchen</span>
       <FontAwesomeIcon icon={faAngleRight}/>
        <span className={classes.kind}>Home Furnishing</span>
        <FontAwesomeIcon icon={faAngleRight}/>
        <span className={classes.brand}>Amazon Brand</span>
       <FontAwesomeIcon icon={faAngleRight}/>
        <span className={classes.itemName}> Solimo Microfiber Reversible Comforter</span>
    </div>


        {/* <!-- -------------------------------------------------Preview Images --> */}
        <div className={classes.mainsection}>


        <div className={classes.previewselectimage}>
            <img  src="https://images-na.ssl-images-amazon.com/images/I/81Vzm0NAr8L._SL1500_.jpg" className={[classes.activeimage,classes.image].join(" ")} />
            <img  src="https://images-na.ssl-images-amazon.com/images/I/71ipgMyrUXL._SL1500_.jpg" className={classes.image} />
            <img  src="https://images-na.ssl-images-amazon.com/images/I/91JNmgQStIL._SL1500_.jpg" className={classes.image} />
            <img  src="https://images-na.ssl-images-amazon.com/images/I/919WbJeSC1L._SL1500_.jpg" className={classes.image} />
            <img  src="https://images-na.ssl-images-amazon.com/images/I/71JLohEZAJL._SL1500_.jpg" className={classes.imagelatter} />
            <img  src="https://images-na.ssl-images-amazon.com/images/I/71M2KD9--bL._SL1500_.jpg" className={classes.image} />
            </div> 
{/* <!-- ------------------------------------------------Main Image --> */}


        <div className={classes.productImageMaindiv}>
            <img className={classes.productImageMain} src="https://images-na.ssl-images-amazon.com/images/I/81Vzm0NAr8L._SL1500_.jpg" className={[classes.MainImage].join("")} alt=""/>
            <p className={classes.imageangles}>Roll over the image to zoom in</p>
        </div>
{/* <!-- --------------------------------------------------details div --> */}


<div className={classes.detailsdiv}>
<span className={classes.Producttitle}>Amazon Brand - Solimo Microfiber Reversible Comforter, Single (Aqua Blue & Olive Green, 200 GSM)</span>    
<p className={classes.brandlink}>brand : Amazon brand - Solimo</p>
<div className={classes.reviewWrapper}>
    <span><FontAwesomeIcon icon={faStar}/></span>
    <span><FontAwesomeIcon icon={faStar}/></span>
    <span><FontAwesomeIcon icon={faStar}/></span>
    <span><FontAwesomeIcon icon={faStar}/></span>
    <span><FontAwesomeIcon icon={faStarHalf}/></span>
    <span><FontAwesomeIcon icon={faAngleDown}/></span>
    <span className={classes.noofreviews}>7,868 ratings</span> 
    <span className={classes.oblique}>|</span>   
    <span className={classes.noofreviews}>768 answered questions</span> 
</div> 
<div className={classes.priceDiv}> 
     <span className={classes.deal}>Deal of the day</span>
     <span className={classes.rupee}><FontAwesomeIcon icon={faRupeeSign}/> </span>
     <span className={classes.Price}> 999.00</span>
     <span className={classes.fulfilledimage}>
    <img src="https://cdn2.iconfinder.com/data/icons/pittogrammi/142/36-512.png" alt="" className={classes.bookmark}/> 
    {/* <i className={classes.fab fa-amazon}></i> */}
    <span className={classes.innertext}>FulFilled</span>
    <span className={classes.freedelivery}>Free Delivery</span>
    </span>
    <p className={classes.deal}>You Save:
    <span className={classes.saverupee}><FontAwesomeIcon icon={faRupeeSign}/> </span>
    <span className={classes.SavedPrice}> 1,001.00 (50%) </span>
</p>
<p className={classes.deal}>Delivered by:<span className={classes.deliverydate}>Wednesday, Jan 20</span>
</p>


<h1 className={classes.inStockDIv}>InStock</h1>

<p className={classes.sizeSelector}>Size:<span className={classes.color}>single</span></p>

<p className={classes.colorName}>Color Name:</p>
    

    <div className={classes.selectColor}>
        <div className={classes.items}>
        <img src="https://m.media-amazon.com/images/I/71g5owSFQSL._SL1500_.jpg" alt="1"/>
        </div>

        <div className={classes.items}>
        <img src="https://m.media-amazon.com/images/I/71r5S5OG3JL._SL1500_.jpg" alt="1"/>
        </div>

        <div className={classes.items}>
        <img src="https://m.media-amazon.com/images/I/81+dDj6XnbL._SX450_.jpg" alt="1"/>
        </div>

        <div className={classes.items}>
        <img src="https://m.media-amazon.com/images/I/81zg43LA1eL._SX450_.jpg" alt="1"/>
        </div>

        {/* <div className={classes.items}>
        <img src={} alt={}/>
        </div> */}

        {/* <div className={classes.items}>
        <img src={} alt={}/>
        </div>

        <div className={classes.items}>
        <img src={} alt={}/>
        </div>

        <div className={classes.items}>
        <img src={} alt={}/>
        </div> */}

    </div>


<ul className={classes.productInfo}>
    <li className={classes.details}>Soft, cosy and light weight reversible comforter with 200 GSM hollow siliconized polyester filling</li>
    <li className={classes.details}>100 percent microfibre shell for a rich, luxurious feel</li>
    <li className={classes.details}>Hypoallergenic filling which protects against allergens</li>
    <li className={classes.details}>Machine stitched pattern to keep the filling in place for durability</li>
    <li className={classes.details}>Pack Contents: 1 Ruby Red & Aqua Blue comforter (Single, 230 cm x 150 cm)</li>
</ul>

    </div>  

</div>
<div className={classes.checkourDiv}>
<p className={classes.mainText}>Item arrives in packaging that reveals what’s inside and can’t be hidden. <span className={classes.innerText}>If this is a gift, consider shipping to a different address.</span></p>

<div className={classes.quantitySelect}>
 
 <p className={classes.qtyText}>Qty:<span><select><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></span></p>

</div>

{/* import {faShoppingCart} from "@fortawesome/free-solid-svg-icons" */}
<button className={classes.addtocartButton}><i class="fas fa-shopping-cart"></i> Add to cart</button>
<button className={classes.buyNow}><i class="fas fa-play"></i>Buy Now</button><br/>

<div className={classes.giftChoose}>
<input type="checkbox"/><label>Add a gift reciept</label>
</div>

<span className={classes.location}><i class="fas fa-map-marker-alt"></i><label>select delivery address</label></span>

<button className={classes.wishlistButton}>add to whishlist</button>
</div>




</div>


  
        </div>

        
        
    )
}
export default Detail;