import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  // useStateを呼び出すことで、state変数(ここでは、count)を宣言。
  const [count, setCount] = useState(0); // stateの初期値0を引数として渡している。
  const [food, setFood] = useState('XXX');

  // useEffectは、レンダー後に処理をすることを伝えるフック。毎回のレンダー後に呼ばれる。
  /*useEffect(() => {
    // 副作用関数
    //document.title = `You clicked ${count} times`;
  });*/

  useEffect(function foods() {
    // 条件付きで副作用を実行するためには、useEffectの内部に関数(つまり、部品)として入れることで実行可能。
    switch (count) {
      case 3:
        setFood('ハンバーグ');
        break;
      case 6:
        setFood('餃子');
        break;
      default:
        setFood('XXX');
        break;
    }
  }, [count])

  return (
    <div>
      {/* 「this.state.変数」とせずに、そのまま「変数」(ここでは、{count})を使うことができる。 */}
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count+1)}>
        Click me
      </button>
      <p>{food}</p>
    </div>
  );
}

export default App;