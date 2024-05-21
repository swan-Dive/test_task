import "./footer.css"
import { UseSomeContextApi } from "../context/SomeContext"

const Footer = ({children}) => {
  const context = UseSomeContextApi()
  
  return (
    <div className="footer">
      {children}
      <div>
        <p>{context.data.input1}</p>
        <p>{context.data.input2}</p>
      </div>
      
    </div>
  )
}
export default Footer