import React from 'react';
import x from './../Dialogs.module.css';



const Message = (props) => {
    return (

        <div className={x.message}>

         {props.message}
         
        </div>
    )
};


export default Message;