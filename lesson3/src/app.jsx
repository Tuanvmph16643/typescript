// import { useState } from "react";
import Board from "./components/board";
// import Square from "./components/square";
// import Avatar from "./components/avatar";
// Props: Là một đối tượng, truyền dữ liệu từ component cha xuống component con
// Imutable
// const user = {
//   name: "Vu Manh Tuan",
//   age: 21,
//   image: "https://picsum.photos/200/300",
// };

const App = () => {
  // JSX
  // const [couter, setCouter] = useState(10);
  // function increase() {
  //   setCouter(couter + 1);
  // }
  // function decrease() {
  //   setCouter(couter - 1);
  // }
  // console.log(couter);
  // return <>
  //   <div>{couter}</div>
  //   <button onClick={increase}>Tăng</button>
  //   <button onClick={decrease}>Giảm</button>
  // </>;

  return <div className="h-[100vh] flex justify-center items-center">
        <Board>

        </Board>
    </div>
  
};

export default App;
