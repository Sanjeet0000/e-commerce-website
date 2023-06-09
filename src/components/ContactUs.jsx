function ContactUs(){ 
    return(
        <div className='container d-flex flex-wrap justify-content-between pt-5'>
            <div className="d-flex flex-column pt-3" style={{width: 350}}>
                <img src='assets\images\Web\iSHOP Logo.svg' alt='Logo' className='float-left' style={{width: 100}}/>
                <p className="mt-3">
                iShop is a made-up electronics store which sells various Apple products at reasonable prices.
                </p>
            </div>
            <div className="pt-3" style={{width: 350}}>
                <h4>Follow Us</h4>
                <p className="pt-1">
                Connect with us on facebook and twitter 
                </p>
                <img src='assets\images\Web\facebook.svg' alt='Logo' className='mt-2 ml-2 float-left' style={{height: 20}}/>
                <img src='assets\images\Web\twitter.svg' alt='Logo' className='float-left ml-5 mt-2' style={{height: 18}}/>
            </div>
            <div className="pt-3" style={{width: 350}}>
                <h4>Contact Us</h4>
                <p>
                iShop: address @building 124 <br/>Call us now: 0123-456-789 <br/>Email: support@whatever.com
                </p>
            </div>
        </div>
    )
 };

 export default ContactUs;