import React from 'react';
import { addMessageActioncreator, uppNewMessageTextActioncreator } from '../../redux/DialogsReducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import { withAuthRedirect } from '../../hoc/wtisAuthRedirect';
import {compose} from 'redux';


let mapStateToProps=(state)=>{

   return {
      dialogsData: state.messagePage.dialogsData,
      messagesData: state.messagePage.messagesData,
      newMessageText: state.messagePage.newMessageText,
   }
};


let mapDispatchToProps=(dispatch)=>{
   return{
      addMessage : ()=>{ dispatch(addMessageActioncreator()) },
     uppNewMessageText: (messText)=>{ dispatch(uppNewMessageTextActioncreator(messText)) }
   }
};


let  DialogsContainer = compose (
   connect(mapStateToProps,mapDispatchToProps),
   withAuthRedirect
) (Dialogs);


export default DialogsContainer;
