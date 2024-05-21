import "./main.css"
import { useState, createContext, useContext} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TestOne from '../components/TestOne';
import TestTwo from '../components/TestTwo';
import MainBody from "../components/MainBody";
import { UseSomeContextApi } from "../context/SomeContext";

export const MainBodyContext = createContext(null);

const MainComponent = () => {
  const [folded, setFolded] = useState(false)


 
  
  return (
    <div className='element_wrap'>
    <Header setFolded={setFolded} folded={folded}>
      <h2>Header</h2>
      <input className="input_style search" type="text"/>
    </Header>
      <MainBody folded={folded} >
        
        <TestOne/>
        <TestTwo/>
      
      </MainBody>
      <MainBody folded={folded} >
        
        <TestOne/>
        <TestTwo/>
      
      </MainBody>

      <MainBody folded={folded} >
        
        <TestOne/>
        <TestTwo/>
      
      </MainBody>

    <Footer >
      <h2 style={{'paddingLeft' : '40px'}}>Footer</h2>
    </Footer>
    </div>
  )
}

export default MainComponent

