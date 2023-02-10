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

    const [error, setError]= React.useState(false);
    const [loading, setLoading]= React.useState(true);
  
    const [item, setItem]= React.useState(defaultTodos);
  
  
    React.useEffect(()=>{
      setTimeout(()=>{
      try{
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
      
        if(!localStorageItem){
          localStorage.setItem("itemName", JSON.stringify(initialValue));
          parsedItem=initialValue;
      
        }else {
          parsedItem= JSON.parse(localStorageItem)
        }
      
        setItem(parsedItem);
        setLoading(false);
      } catch(error){
        setError(error);
  
      }
      },1000);
    });
     //LOCAL_STORAGE
    
  
  
  
    const saveItem= (newItem)=>{
      try{
        const stringifiedItem=JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
      }catch(error){
        setError(error);
      }
    };
  
    return {
      item,
      saveItem,
      loading,
      error
    };
  
  };

  export {useLocalStorage};