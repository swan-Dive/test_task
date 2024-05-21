import "./mainBody.css"
import React, { useEffect } from "react";
import { useState, createContext} from "react";
import { UseSomeContextApi } from "../context/SomeContext";
export const MainBodyContext = createContext(null);


const MainBody = ({folded, children, mainState, setMainState}) => {
  const [data, setData] = useState({"input1": "", "input2": ""})
  const [context_id, set_context_id] = useState(-1)
  const context = UseSomeContextApi()

  const handle_input = (e) => {
    if (!e) {
      console.log('No element provided')
      return
    }
    let {name, value} = e.target

    if (!name){
      console.log("No name given!")
      return
    }
    let names = Object.getOwnPropertyNames(data)
    let found = false
    for (let i = 0; i <= names.length; ++i) {
      if (names[i] === name) {
        found = true
        break
      }
    }

    if (!found) {
      console.log("Wrong data context name!")
      return
    }
    let copy = {...data}
    copy[name] = value
    setData(copy)
    context.change_context(context_id, copy)
  }

  const contextValue = {
     handle_input
  }

  useEffect(() => {
    if (!context)
      return
    let id = context.add_context(data)
  
    set_context_id(id)
  }, [])

  


  return (

      <div className={folded ? ' slide-down' : 'wrapper'}>
        <div className="main" style={{'minHeight': '0px'}}>
        <MainBodyContext.Provider value={contextValue}>
          {children}
        </MainBodyContext.Provider >
        </div>
      </div>
  )
}

export default MainBody