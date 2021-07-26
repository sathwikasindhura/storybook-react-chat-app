import React from 'react'
import { FooterLayoutHeaderAndFooter } from '../components/FooterLayoutHeaderAndFooter'

import { HeaderLayoutHeaderAndFooter } from '../components/HeaderLayoutHeaderAndFooter'

export const HeaderAndFooter = (props) => {
    return (
        <div>
    
        <HeaderLayoutHeaderAndFooter/>
        {props.children}
        <FooterLayoutHeaderAndFooter/>
        
        
           
       
        
            
         </div>
    )
}


