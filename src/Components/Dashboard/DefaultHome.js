import React from 'react'
import './DefaultHome.css'
import group from './groups.webp'
import './people.webp'
export default function DefaultHome() {
    return (
      <div className="container">
      <div className="container containerr">
        <span className="text1">Welcome to</span>
        <span className="text2">Alumni Network</span>

    </div>
    <div className="container2">
        <table>
            <tr>
                <td className="container2Text">
                    <h1 className="heading" >
                         <span className="text3">Stay Connected To your Alma Matter</span>  
                    </h1>
                </td>
                <td className="container2Img">
                    <img className="img-fluid" src={group} alt=""/>
                </td>
            </tr>
        </table>
    </div>

    <div className="container3">
        Vision<br/>

            Create economic opportunity for every member of the global workforce.
            <br/><br/>Mission<br/>
            
            The mission is simple: connect the world’s professionals to make them more productive and successful.
    </div>
    </div>
      
    )
}