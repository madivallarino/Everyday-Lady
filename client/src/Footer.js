import React, { useState } from 'react';
 import OrderStatus from './OrderStatus'

function Footer(){
const [show, setShow ] = useState(false)



    return(
        <div className="footer">
          <div className={show ? "modal" : "closed"}>
            <OrderStatus onClose={()=> setShow(!show)}/> 
          </div>
        <div>
          <h3>Help</h3>
          <ul>
            <a  onClick={()=> setShow(!show)}><li>Order Status</li></a>
            <li>Start A Return Or Exchange</li>
            <a href='/returnpolicy'><li>Returns + Exchanges</li></a>
            <li>Shipping</li>
            <li>Orders + Payments</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div>
          <h3>Quick Links</h3>
          <ul>
            <li>Brands</li>
            <a href="/giftcards"><li>Gift Cards</li></a>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <h3>Extras</h3>
          <ul>
            <li>Afterpay</li>
            <li>The Everday Lady Community</li>
            <li>Creative Services</li>
          </ul>
        </div>
        <form>
          <p>Get Our Emails</p>
          <p>Sign up to receive The Everyday Lady's emails and get first dibs on new arrivals, sales, exclusive content and more!</p>
          <p>By entering your email address, you agree to receive The Everyday Lady's offers, promotions, and other commercial messages</p>
          <input type="text" placeholder="Email Address.."/>
          <button>Submit</button>
        </form>
        </div>
    )
}

export default Footer;