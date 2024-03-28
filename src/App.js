import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { decrement, increment } from './actions'
import "./App.css"
function App() {
  const counter=useSelector(state=>state.counter)
  const isLoggedin=useSelector(state=>state.login)
  const dispatch=useDispatch();
  console.log(counter)  
  const user=()=>{
    return {
      type:"SIGN_IN"
    };
  }
  return (
    <div>
      <div className="counter-display">Counter :{counter}</div>
      <div>
        <button onClick={()=>dispatch(increment())}>+</button>
        <button onClick={()=>dispatch(decrement())}>-</button>
      </div>
      <div>
        {isLoggedin && <h3>This is an important message Only logged user can see</h3>}
        <button className="login-logout-btn" onClick={()=>dispatch(user())}>
    {isLoggedin ? "LOGOUT" : "LOGIN"}
  </button>
      </div>
      {
      }
    </div>
  )
}

export default App