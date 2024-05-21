import { createContext, useContext, useState } from "react"

const SomeContext = createContext(null)

export const UseSomeContextApi = () => {
  const context = useContext(SomeContext)
  return context
}

export const SomeContextProvider = (props) => {
  const [data, setData] = useState({"input1": "", "input2": ""})

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
    for (let i = 0; i <=names.length; ++i) {
      if (names[i] === name) {
        found = true
        break
      }
    }

    if (!found) {
      console.log("Wrong data context name!")
      return
    }
    setData({...data, [name] : value})
  }

  const contextValue = {
    data, handle_input
  }

  return(
    <SomeContext.Provider value={contextValue}>
      {props.children}
    </SomeContext.Provider>
  )
}
