import React from 'react';

function useLocalStorage(itemName, initialValue){

  const defaultTodos = [
  {text:'Complete online JavaScript course', completed: true},
  {text:'Jog around the park 3x', completed: false},
  {text: '10 minutes meditation', completed: false},
  {text: 'Read for 1 hour', completed: false},
  {text: 'Pick up groceries', completed: false},
  {text: 'Complete Todo App on Frontend Mentor', completed: false},
];

    const [state,dispatch]=React.useReducer(reducer,initialState({initialValue}));
    const {
      error,
      loading,
      item,
    }=state;


    //action creators

    const onError = (error)=>{
      dispatch({type: actionTypes.error, payload:error})
    }
    const onSuccess = (Item)=>{
      dispatch({type:actionTypes.success, payload: Item})
    }
    const onSave = (Item)=>{
      dispatch({type:actionTypes.save, payload: Item})
    }
    



    React.useEffect(()=>{
      setTimeout(()=>{
      try{
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
      
        if(!localStorageItem){
          localStorage.setItem("itemName", JSON.stringify(defaultTodos));
          parsedItem=defaultTodos;
      
        }else {
          parsedItem= JSON.parse(localStorageItem)
        }
      onSuccess(parsedItem)
        // setItem(parsedItem);
        // setLoading(false);
      } catch(error){
        onError(error);
  
      }
      },1000);
    });
     //LOCAL_STORAGE
    
  
  
  
    const saveItem= (newItem)=>{
      try{
        const stringifiedItem=JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        onSave(newItem)
        // setItem(newItem);
      }catch(error){
         onError(error);
        // setError(error);
      }
    };
  
    return {
      item,
      saveItem,
      loading,
      error
    };
  
  };

  const initialState =({initialValue})=>({ 
    error:false,
    loading:true,
    item: initialValue,
    
  });

  const actionTypes={
      error: 'ERROR',
      success: 'SUCCESS',
      save: 'SAVE',
  }
  const reducerObject = (state,payload)=>({
   [actionTypes.error]: {
    ...state,
    error: true,
   },
   [actionTypes.success]:{
    ...state,
    error:false,
    loading: false,
    item: payload
   },
   [actionTypes.save]:{
    ...state,
    item: payload
   }
  });

  const reducer = (state, action)=>
    reducerObject(state,action.payload)[action.type]||state;
  

  export {useLocalStorage};