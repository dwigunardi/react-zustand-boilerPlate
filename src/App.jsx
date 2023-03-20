import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { useBearStore } from "./store/example";
import { Button, Layout, Row, Typography, Col, Input, message } from "antd";
import { Link } from "react-router-dom";
import './app.css'
import { GoogleLogin, googleLogout, GoogleOAuthProvider } from "@react-oauth/google";
import { googleClient } from "./config/google";
import {FcGoogle} from 'react-icons/fc'
function App() {
  const [isLogin, setLogin] = useState(false)
  const [isBlur, setOnBlur] = useState(false)
  const bears = useBearStore((state) => state.bears);
  const increase = useBearStore((state) => state.increasePopulation);
  const decrease = useBearStore((state) => state.decreasePopulation);
  const reset = useBearStore((state) => state.removeAllBears);
  const inputIncrease = useBearStore((state) => state.increaseByAmount)
  const handleInput = (e) => {
    setOnBlur(true)
    if(e.target.value.length < 1 && e.code == 'Enter'){
      message.warning('Mohon masukan angka')
      inputIncrease(0)
    }else if(e.code == 'Enter') {
      inputIncrease(parseInt(e.target.value))
    }
  }
  const handleLogin = (respond) => {
    if(respond.clientId == googleClient.web.client_id){
      setLogin(true)
      console.log(respond)
    }
  }
  const handleLogout = () => {
    setLogin(false)
    googleLogout()
  }
  return (
    <GoogleOAuthProvider clientId={googleClient.web.client_id}>
    <div className="container">
      <Row justify={"center"} align={"middle"}>
        <Col>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
        </Col>
        <Col>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </Col>
      </Row>
      <Typography.Title style={{textAlign:"center"}}>Vite + React</Typography.Title>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <Typography.Title style={{ color: "ActiveCaption", textAlign:'center' }}>
          React with zustand example
        </Typography.Title>
        <div style={{display:'flex', justifyContent:'center'}}>
        {isLogin ? <Button style={{display:'flex'}} size="large" onClick={handleLogout} icon={<FcGoogle style={{fontSize:28}} />}>Logout</Button>  : <GoogleLogin theme="filled_blue" onSuccess={(respond) => handleLogin(respond)} onError={(err) => console.log(err)} />}
        </div>
        <Typography.Title style={{ color: "ActiveCaption",textAlign:'center'  }}>
          {bears}
        </Typography.Title>
        <Row justify={"center"} align="middle" gutter={16}>
          <Col>
            <Button onClick={decrease}>-</Button>
          </Col>
          <Col>
            <Button onClick={reset}>Reset</Button>
          </Col>
          <Col>
            <Button onClick={increase}>+</Button>
          </Col>
          <Col>
            <Input placeholder="input by amount" type="number" onKeyDown={(e) => handleInput(e)}  />
          </Col>
        </Row>
      </div>
      <Link to={"/persist"}>
        <p className="read-the-docs">Check route persis example</p>
      </Link>
      <Link to={"/fetchWithZustand"} >
      <p className="read-the-docs">Check route fetch example</p>
      </Link>
    </div>
    </GoogleOAuthProvider> 
  );
}

export default App;
