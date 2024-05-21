import { useContext } from "react"
import "./header.css"
import { MainBodyContext } from "./MainBody"

const TestTwo = () => {
  const context = useContext(MainBodyContext)

  return (
    <div className="test">
      <h3>I am child two</h3>
      <input className="input_style" name="input2" type="text" onChange={context.handle_input} placeholder="Write here"/>
    </div>
  )
}

export default TestTwo