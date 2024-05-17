import React, { useState } from 'react'
import './App.css';
import Greeting from './components/Greeting';

function App() {

  const [name, setName] = useState(""); // 入力された名前を管理

  const handleChange = (e) => {
    setName(e.target.value); // 入力した名前を更新
  };

  return (
    <div className="App">
    {/* 入力フォーム */}
    <input
      type="text"
      value={name}
      onChange={handleChange}
      placeholder="名前を入力してください"
    />
      <Greeting name={name}/>
    </div>
  );
}

export default App;
