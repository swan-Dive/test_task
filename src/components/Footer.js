import "./footer.css"
import { useEffect } from "react"
import { UseSomeContextApi } from "../context/SomeContext"

const Footer = ({children}) => {
  
  let contexts = UseSomeContextApi()
  
  
  return (
    <div className="footer">
      {children}
      <div>
        {contexts.contexts && contexts.contexts.map((item, index) => (
          <div key={"context" + index}>
            <p>{item.input1}</p>
            <p>{item.input2}</p>

          </div>
        ))}
      </div>
      
    </div>
  )
}
export default Footer