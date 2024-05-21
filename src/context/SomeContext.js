import { createContext, useContext, useState } from "react"

const SomeContext = createContext(null)

export const UseSomeContextApi = () => {
  const context = useContext(SomeContext)
  return context
}



export const SomeContextProvider = (props) => {
  const [contexts, setContexts] = useState([])
  let contexts_helper = []
  const add_context = (data) => {
    console.log(contexts)
    let copy = [...contexts]
    copy.push(data)
    
    contexts_helper.push(data)
    setContexts(contexts_helper)
    return contexts_helper.length - 1
  }

  const change_context = (context_id, data) => {
    let copy = [...contexts]
    copy[context_id] = data
    setContexts(copy)
  }

  const contextValue = {
    add_context, contexts, change_context
  }



  return(
    <SomeContext.Provider value={contextValue}>
      {props.children}
    </SomeContext.Provider>
  )
}
