import React from 'react'
import FeatherIcon from 'feather-icons-react';

 export const FooterLayoutHeaderAndFooter = () => {
    return (
        <div className=" input-group">
  <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)" placeholder="type a message"/>
  <span className="input-group-text" ><FeatherIcon  icon="mic" /></span>
  <span className="input-group-text" ><FeatherIcon  icon="send" /></span>
  </div>
    )
}


