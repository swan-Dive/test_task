import "./main.css"
import { useState, createContext} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TestOne from '../components/TestOne';
import TestTwo from '../components/TestTwo';
import MainBody from "../components/MainBody";

export const MainBodyContext = createContext(null);

const MainComponent = () => {
  const [folded, setFolded] = useState(false)
  const [mainBodyContent, setMainBodyContent] = useState({"input1": "", "input2": ""});

  const handle_input = (e) => {
    if (!e) {
      console.log('No element provided')
      return
    }
    let {name, value} = e.target

    if (!name){
      console.log("No name given!")
      return
    }
    let names = Object.getOwnPropertyNames(mainBodyContent)
    let found = false
    for (let i = 0; i <= names.length; ++i) {
      if (names[i] === name) {
        found = true
        break
      }
    }

    if (!found) {
      console.log("Wrong data context name!")
      return
    }
    setMainBodyContent({...mainBodyContent, [name] : value})
  }

  const contextValue = {
     handle_input
  }

  return (
    <div className='element_wrap'>
    <Header setFolded={setFolded} folded={folded}>
      <h2>Header</h2>
      <input className="input_style search" type="text"/>
    </Header>
    <MainBodyContext.Provider value={contextValue}>
      <MainBody folded={folded}>
        
          <TestOne/>
          <TestTwo/>
      
      </MainBody>
    </MainBodyContext.Provider>
    <Footer valuesFromBody={mainBodyContent}>
      <h2 style={{'paddingLeft' : '40px'}}>Footer</h2>
    </Footer>
    </div>
  )
}

export default MainComponent

