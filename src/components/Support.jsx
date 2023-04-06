function Support(){ 
    return(
        <div className='container d-flex flex-wrap justify-content-around pt-5 text-center'>
            <div style={{width: 350}}>
                <img src='assets\images\Web\shipping.svg' alt='FreeShipping' className='mt-3'/>
                <h3 className='py-3'>FREE SHIPPING</h3>
                <p>
                Free Shipping provided on all orders with total value more than $20 for destinations across whole India. <br/>
                Contact support for more details.
                </p>
            </div>
            <div style={{width: 350}}>
                <img src='assets\images\Web\refund.svg' alt='refund' className='mt-1'/>
                <h3 className='py-3'>100% REFUND</h3>
                <p className="pt-1">
                100% no question asked Refund on all products within 30 days of purchase. <br/>
                Contact support for more details. 
                </p>
            </div>
            <div style={{width: 350}}>
                <img src='assets\images\Web\support.svg' alt='support'/>
                <h3 className='py-3'>SUPPORT 24/7</h3>
                <p>
                Support available 24/7 via email, phone and all relevant social media platforms. 
                </p>
            </div>
        </div>
    )
 };

 export default Support;