import "./mainBody.css"

const MainBody = ({folded, children}) => {

  return (

    <div className={folded ? ' slide-down' : 'wrapper'}>
      <div className="main" style={{'minHeight': '0px'}}>
        {children}
      </div>
    </div>
  )
}

export default MainBody