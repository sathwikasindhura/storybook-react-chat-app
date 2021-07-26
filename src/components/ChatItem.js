import React from 'react';
import "./ChatItem.css";
import "bootstrap/dist/css/bootstrap.css"

export const ChatItem = ({text,time,from,username}) => {
    return (
        <div className="my-3">
           <div className={`chat ${from == username ? "right" : "left"}`} >
               <div className="">
               <div className="bg ">{text}</div>
               <span>{time}</span>
           </div>
           </div>
        </div>
    )
    }

    