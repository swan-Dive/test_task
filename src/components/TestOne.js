import "./header.css"
import { UseSomeContextApi } from "../context/SomeContext"


const TestOne = () => {
  const context = UseSomeContextApi()
  return (
    <div className="test">
      <h3>I am child one</h3>
      <input value={context.data.input1} className="input_style" name="input1" type="text" onChange={context.handle_input} placeholder="Write here"/>
    </div>
  )
}

export default TestOne