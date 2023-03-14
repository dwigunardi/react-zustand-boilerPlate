import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { useBearStore } from "./store/example";
import { Button, Layout, Row, Typography, Col } from "antd";
import { Link } from "react-router-dom";
import './app.css'
function App() {
  const [count, setCount] = useState(0);
  const bears = useBearStore((state) => state.bears);
  const increase = useBearStore((state) => state.increasePopulation);
  const decrease = useBearStore((state) => state.decreasePopulation);
  const reset = useBearStore((state) => state.removeAllBears);
  return (
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
        </Row>
      </div>
      <Link to={"/persist"}>
        <p className="read-the-docs">Check route persis example</p>
      </Link>
    </div>
  );
}

export default App;
