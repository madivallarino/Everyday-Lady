function OrderStatus(){


    return (
        <div className="fullmodal">
            <div className="topmodal">
                <h2>Order Status <button>X</button></h2>
                <p>Enter your order number to check its status.</p>
            </div>
            <div className="middlemodal">
                <h3>Order Number</h3>
                <input></input>
                <h3>Billing ZIP Code*</h3>
                <input></input>
                <button>Check Status</button>
            </div>
            <div className="lowmodal">
                <p>For FAQS and returns, see our Return Policy</p>
                <p>Have a question? Contact us!</p>
                <p>Google Privacy Policy and Terms of Service apply</p>
            </div>
        </div>
    )
}

export default OrderStatus;