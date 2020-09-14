import React from 'react'
import { Link } from 'react-router-dom'


function SectionOne() {
    return (
        <div className="sectionOne">
            <div className="sectionOneContent">
                <h1>Section One</h1>
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
                <Link to="/about"> <button className="the-button">More</button></Link>
            </div>
        </div>
    )
}

export default SectionOne
