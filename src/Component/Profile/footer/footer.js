import React from 'react'
import Youtube from './../../../youtube.png'
import Facebook from './../../../facebook.png'
import GitHub from './../../../github.png'
import logo from './../../../logo.svg'
function footer() {
    return (
            <footer>
                <div className="container footer">
                    <a href="https://www.youtube.com/watch?v=mLhInAtQHgM"><img src={Youtube} /></a>
                    <a href="https://www.facebook.com/asma.habachi.756"><img src={Facebook} /> </a>
                    <a href="https://github.com/Asmahabachi">
                    <img src={GitHub} />
                    </a>
                    <a href="#"><img src={logo} />
                    </a>
                    
                    
                </div>
            </footer>
    )
}

export default footer
