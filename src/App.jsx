import React from 'react';
import './App.css';

function App(){
  return (
  <>
  <div>
    <input placeholder='TODOを入力'/>
    <button>追加</button>
  </div>

  <div>
    <p>未完了のTODO</p>
    <ul>
      <div>
        <li>aaaaa</li>
        <button>完了</button>
        <button>削除</button>
      </div>
      <div>
        <li>iiiii</li>
        <button>完了</button>
        <button>削除</button>
      </div>
    </ul>
  </div>
  <div></div>
  </>
  );
}

export default App;
