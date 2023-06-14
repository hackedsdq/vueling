import React from 'react'
import "./style.css"

import { ReactComponent as CheckBox} from "../../../../../../assets/svg/check.svg"
export default function Description() {
  return (
    <div className='description'>
        <div className='description-text-container'>


            <h1 className="description-text-container__text1">Vueling :</h1>
            <div className="description-line1"></div>

            <h1 className="description-text-container__text2">Your Ultimate Fashion Destination</h1>
            <div className="description-line2"></div>

            <h3 className="description-text-container__text3">"Discover Fashion's Finest: Clothing, Watches, Boots, and More at Vueling!"</h3>

            <div className="description-text-container__functionalities">
              <table>
                <tbody>

                <tr>
                  <td>
                    <div className="description-text-container__functionality">
                    <CheckBox/>
                    <h3>fast delivery</h3>

                    </div>
                    
                  </td>
                  <td>
                    <div className="description-text-container__functionality">
                      <CheckBox/>
                      <h3>order tracking</h3>

                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="description-text-container__functionality">
                      <CheckBox/>
                      <h3>exclusiveoffers</h3>

                    </div>
                
                    </td>
                  <td>
                    <div className="description-text-container__functionality">
                      <CheckBox/>
                      <h3>secure checkout</h3>
                    </div>
                 
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="description-text-container__functionality">
                    <CheckBox/>
                    <h3>100% refund</h3>
                    </div>
                  
                  </td>
                  <td></td>
                </tr>
                </tbody>

              </table>
            </div>
        </div>

<div className="description-picture">
         
</div>
        
    </div>
  )
}
