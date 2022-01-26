function navbar(){
    return `<div id="navbar">
    <div id="name">
        <a href="./index.html">

            <img src="https://www.1mg.com/images/tata_1mg_logo.svg" alt="">
        </a>
        </div>
    <div id="navbar_left">
        
        <a href="./product.html">
            <span id="medicines">MEDICINES</span>
        </a>
        <a href="./product.html">
            LAB TESTS <span id="span_red">SAFE</span>
        </a>
        <a href="">
            ASK DOCTOR
        </a>
        <a href="./product.html">
            COVID-19
        </a>
        <a href="./product.html">
        AYURVEDA
        </a>
        <a href="./product.html">
        CARE PLAN <span id="span_red">SAVE MORE</span>
        </a>
    </div>

    <div id="navbar_right">

    <div ><a href="login.html">
    Login/Register
    </a>
    </div>  
    <div class="dropdown">
    
        <div class= "account_img">
            
                <a href="">
                    <img id="account_img" src="	https://res.cloudinary.com/du8msdgbj/image/upload/v1571139390/profile-rebrand_aboy0q.svg" alt="">
                </a>
                
        </div>
            <div class="drop_content">
                    <a href="">Hi Welcome User</a>
                    <hr>
                    <a href="">My Orders</a>
                    <br/>
                    <a href="">Previously Ordered Items <span id="span_red">New</span></a>
                    <br/>
                    <a href="">My Lab Tests</a>
                    <br/>
                    <a href="">My Consultants</a>
                    <br/>
                    <a href="">My Health Records <span id="span_red">New</span></a>
                    <br/>
                    <a href="">Manage Payments</a>
                    <br/>
                    <a href="">Care Plan <span id="span_red">New</span></a>
                    <br/>
                    <a href="">1mg Cash</a>
                    <br/>
                    <a href="">Logut</a>
            </div>
        
    </div>
        <a href="https://www.1mg.com/offers">Offers</a>
        <div id="count">
          <div id= "cart_count"></div>

        <a href="./cart.html">
        
            <img id="cart_icon" src="	https://res.cloudinary.com/du8msdgbj/image/upload/v1570101941/cart-icon-rebrand_vp4k0f.svg" alt="">
            </a>
        
        </div>
        <a href="https://www.1mg.com/help">Need Help?</a>
    </div>
</div>
<div id="below">
                <div id="inp">

                    <input type="text" placeholder="    location" id="location"> <input placeholder="         Search for Medicine and Health Products" id="medicine_search" type="text" >  
                    <div id="search_icon">
                        <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWXI_JyOVRGL5fOKjn9qMUF3pWkgFcfDm1oQ&usqp=CAU" alt="">
                    </div>
                </div>
                    <div id="Quick_upload">
                        <img src="	https://res.cloudinary.com/du8msdgbj/image/upload/v1570695364/quick_buy_rebrand_lqpnce.svg" alt=""> QUICK BUY! Flat 25% off on medicines*
                        <button id="upload">UPLOAD</button>
                    </div>
                
                
            </div>`
}

export default navbar;