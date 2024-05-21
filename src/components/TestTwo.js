import { MainBodyContext } from "../pages/MainComponent"
import { useContext } from "react"

const TestTwo = () => {
  const context = useContext(MainBodyContext)

  return (
    <div style={{'paddingBottom' : '10px'}}>
      <h3>I am child two</h3>
      <input className="input_style" name="input2" onChange={context.handle_input} placeholder="place text here"/>
    </div>
  )
}

export default TestTwo