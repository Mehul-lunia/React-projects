import React, {useRef } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { selectTheme,TOGGLE_MODE } from '../Reducer'

const Navbar = (props) => {

  const mode = useSelector(selectTheme)
  const dispatch = useDispatch();
  const InputRef = useRef(null)
  
  const handleChangeCategoryButton = (e) => {
    props.updateState(e.target.id)
    document.getElementById('queryInp').value=''
  }

  const handleModeChange = () => {
    dispatch(TOGGLE_MODE())
  }

  const handleBtnClick = ()=>{
    let val =InputRef.current.value
    props.updateQuery(val)
    
  }
  const handleHomeClickBtn = ()=>{
    document.getElementById('queryInp').value=''
    props.updateHomeClickBtn()
  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={mode.value}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">KalTak</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <span className="nav-link active" aria-current="page" onClick={handleHomeClickBtn} style={{'cursor':"pointer"}}>Home</span>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {props.name.slice(0,1).toUpperCase()+props.name.slice(1,props.name.lenght)}
                </a>
                <ul className="dropdown-menu">
                  <li onClick={handleChangeCategoryButton} ><span className="dropdown-item" id='technology'style={{'cursor':"pointer"}}>Technology</span></li>
                  <li onClick={handleChangeCategoryButton} ><span className="dropdown-item" id='science' style={{'cursor':"pointer"}}>Science</span></li>
                  <li onClick={handleChangeCategoryButton} ><span className="dropdown-item" id='sports' style={{'cursor':"pointer"}}>Sports</span></li>
                  <li onClick={handleChangeCategoryButton} ><span className="dropdown-item" id='general' style={{'cursor':"pointer"}}>General</span></li>
                  <li onClick={handleChangeCategoryButton} ><span className="dropdown-item" id='entertainment' style={{'cursor':"pointer"}}>Entertainment</span></li>
                  <li onClick={handleChangeCategoryButton} ><span className="dropdown-item" id='business' style={{'cursor':"pointer"}}>Business</span></li>
                </ul>
              </li>
            </ul>
            <input type="text" name="" id="queryInp"  className='input rounded-bottom rounded-top' ref={InputRef}/>
            <button className={`btn btn-${mode.value} text-${mode.value==='light'?"dark":"light"}`} onClick={handleBtnClick}>Search</button>
            <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={handleModeChange}/>
            <label class={`form-check-label text-${mode.value === 'light'?'light':'dark'}`} for="flexSwitchCheckDefault">Change mode</label>
          </div>
          </div>
        </div>
      </nav>
  )
}

export default Navbar