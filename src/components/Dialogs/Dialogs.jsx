import React from 'react';
import x from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';


const Dialogs = (props) => {

   let dialogElement = props.dialogsData.map(d => <Dialog id={d.id} key={d.id} name={d.name} />);
   let messageElement = props.messagesData.map((m) => <Message message={m.message} key={m.id} />);


   let changeMessageText = (e) => {
      let messText = e.target.value
      props.uppNewMessageText(messText);
   };


   let addMessage = () => {
      props.addMessage();
   };


   if (!props.isAuth) return <Redirect to={"Login"} />

   return <div className={x.dialogs} >

      <div className={x.dialog}>
         {dialogElement}
      </div>


      <div className={x.messages}>

         {messageElement}

         <div className={x.sendmessage}>

            <div>
               <textarea onChange={changeMessageText} value={props.newMessageText} ></textarea>
            </div>

            <div>  <button onClick={addMessage}>Send</button>  </div>

         </div>
      </div>

   </div>
};

export default Dialogs;