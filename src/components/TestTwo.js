import { UseSomeContextApi } from "../context/SomeContext"

const TestTwo = () => {
  const context = UseSomeContextApi()

  return (
    <div style={{'paddingBottom' : '10px'}}>
      <h3>I am child two</h3>
      <input value={context.data.input2} className="input_style" name="input2" onChange={context.handle_input} placeholder="place text here"/>
    </div>
  )
}

export default TestTwo