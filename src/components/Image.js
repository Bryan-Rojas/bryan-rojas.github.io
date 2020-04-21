import React, {Component} from 'react';
import selfie from '../static/images/selfie.png'

class Image extends Component {
    render() {
        return(
            <>
                <img src={selfie} alt="Selfie of Bryan Rojas"></img>
            </>
        )
    }
  }
  
  export default Image