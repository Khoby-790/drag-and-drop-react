import { useSelector } from "react-redux";
import Board from "./components/Board";
import Card from "./components/Card";



function App() {

  const { boards } = useSelector(state => state)

  return (
    <div className="container">
      {boards.map(({ title, items }, boardIndex) => (
        <Board key={boardIndex} title={title}>
          {items.map((item, itemIndex) => (
            <Card item={item} key={itemIndex} itemId={itemIndex} groupId={boardIndex} />
          ))}
        </Board>
      ))}
    </div>
  );
}

export default App;
