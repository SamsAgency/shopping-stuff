import React from 'react'
import { Link } from 'react-router-dom'
import bannerLaptop from "../../images/banner laptop.png"
import "./Homepage.css"

function Banner() {
    return (
        <div className="banner ">
            <div className="content">
                <h1>Best laptops</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pulvinar facilisis orci, egestas gravida leo pellentesque vel. 
                Etiam fringilla sapien et posuere viverra. Phasellus a dapibus dui. Pellentesque ullamcorper tincidunt justo vitae suscipit. 
                Proin hendrerit felis sed urna maximus dignissim. Fusce ligula mi, suscipit quis metus id, lacinia iaculis sem. 
                Donec efficitur dolor sit amet turpis aliquet luctus. Integer ut finibus leo. Maecenas in vulputate risus. <br/>

                Ut est augue, porta et gravida dignissim, pellentesque pulvinar quam. Pellentesque in justo neque. 
                Nunc nec augue id erat hendrerit blandit pretium viverra odio. Pellentesque et pharetra tortor. 
                Phasellus volutpat tortor vel arcu finibus congue. Integer convallis est sed felis tempus placerat. 
                Maecenas euismod, massa at ullamcorper mattis, nulla arcu dapibus erat, euismod posuere nibh lorem eget nunc. 
                Sed sagittis faucibus dui, non dapibus nisi porta a.
                </p>
               <Link to="/shop"> <button className="the-button">Visit shop</button></Link>
            </div>
                
            <div className="banner-image">
                <img src={bannerLaptop} alt="laptop" className="bimage"/>
            </div>
                    
        </div>
    )
}

export default Banner
