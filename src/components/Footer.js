import "./footer.css"
import { UseSomeContextApi } from "../context/SomeContext"

const Footer = ({children, valuesFromBody}) => {
  const context = UseSomeContextApi()
  
  return (
    <div className="footer">
      {children}
      <div>
        <p>{valuesFromBody.input1}</p>
        <p>{valuesFromBody.input2}</p>
      </div>
      
    </div>
  )
}
export default Footer