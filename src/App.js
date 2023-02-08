import './App.css';
import Card from './Components/card/Card';
import { useState } from 'react';


function App() {

  const [article] = useState([{
    title: "Titre",
    pic: "https://picsum.photos/200/300",
    desc: "Description"
  },

  {
    title: "Titre",
    pic: "https://picsum.photos/200/300",
    desc: "Description"
  }]
  )

  return (
    <div className="App">
      {article.map((article) => {
        return <Card title={article.title} pic={article.pic} desc={article.desc}/>
      })}
    </div>
  );
}

export default App;
