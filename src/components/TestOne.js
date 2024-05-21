import "./header.css"
import { MainBodyContext } from "../pages/MainComponent"
import { useContext } from "react"

const TestOne = () => {
  const context = useContext(MainBodyContext)
  return (
    <div className="test">
      <h3>I am child one</h3>
      <input className="input_style" name="input1" type="text" onChange={context.handle_input} placeholder="Write here"/>
    </div>
  )
}

export default TestOne