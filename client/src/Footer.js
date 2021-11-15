function Footer(){




    return(
        <div className="footer">
        <div>
          <h3>Help</h3>
          <ul>
            <li>Order Status</li>
            <li>Start A Return Or Exchange</li>
            <li>Returns + Exchanges</li>
            <li>Shipping</li>
            <li>Orders + Payments</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div>
          <h3>Quick Links</h3>
          <ul>
            <li>Brands</li>
            <li>Gift Cards</li>
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