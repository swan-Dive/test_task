import "./footer.css"

const Footer = ({children, valuesFromBody}) => {

  
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