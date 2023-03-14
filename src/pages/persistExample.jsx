import { Button, Col, Layout, Row, Typography, Checkbox, Form, Input} from "antd";
import React from "react";
import { PersistGate } from "zustand-persist";
import { usePersistExample } from "../store/persistExample";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { useBearStore } from "../store/example";
function PersistExample() {
  const { data, create, remove, update, clear } = usePersistExample();
  const bears = useBearStore((state) => state.bears)
  const [text, setText] = React.useState("");
  const navigate = useNavigate()
  const onSubmit = async (data) => {
   try {
    await setText('');
    await create({
        text,
        completed: false,
        date: new Date().toISOString(),
      });
      // console.log(data)
     
   } catch (error) {
    console.log(error)
   }
  };
  const contentStyle = {
    textAlign: "center",
    minHeight: 120,
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#108ee9",
  };
  return (
    // <PersistGate>
      <Layout>
        <Button onClick={() => navigate('/')}>back to home</Button>
        <Layout.Content style={contentStyle}>
                <Typography.Text style={{color:'white'}}>Ini counter dari store bears</Typography.Text>
            <Button>{bears}</Button>
            <br />
          <Button
            onClick={() => {
              clear();
              purge();
            }}
          >
            Clear
          </Button>
          <br />
          <Typography.Title style={{color:'white'}} >COntoh persist data menggunakan zustand</Typography.Title>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onSubmit}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="text"
              name="text"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input onChange={(e) => setText(e.target.value)} />
            </Form.Item>
            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
          {data.map((item, index) => (
            <div
              key={index}
              className={`todo-item ${item.completed ? "completed" : ""}`}
            >
              <input
                type="checkbox"
                onClick={() => {
                  update(item.id, {
                    ...item,
                    completed: !item.completed,
                  });
                }}
                id={`checkbox-${index}`}
              />
              <label className="todo-item-text" htmlFor={`checkbox-${index}`}>
                {item.text}
              </label>
              <Button onClick={() => remove(item.id)}>Remove</Button>
            </div>
          ))}
        </Layout.Content>
      </Layout>
    //  </PersistGate>
  );
}

export default PersistExample;
