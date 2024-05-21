import { useContext } from "react"
import "./header.css"
import { MainBodyContext } from "./MainBody"
import { UseSomeContextApi } from "../context/SomeContext"


const TestOne = ({context_id}) => {
  const context = useContext(MainBodyContext)
  const context2 = UseSomeContextApi()
  console.log(context2)
  console.log(context)
  return (
    <div className="test">
      <h3>I am child one</h3>
      <input className="input_style" name="input1" type="text" onChange={context.handle_input} placeholder="Write here"/>
    </div>
  )
}

export default TestOne