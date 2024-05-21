import slide_icon from "../assets/slide.png"

import "./header.css"

const Header = ({setFolded, folded, children}) => {

  const handle_fold = () => {
    setFolded(!folded)
  }

  return (
    <div className="header">
       <button className="slide_button" onClick={handle_fold}><img className="slide_icon" src={slide_icon}/></button>
      {children}

    </div>
  )
}

export default Header