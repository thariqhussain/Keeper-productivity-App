import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import InputArea from './Components/InputArea';
import { useState } from 'react';
import TodoItem from './Components/TodoItem';

function App() {
  const [items, setItems] = useState([]);
      const [inputText, setInputText] = useState({
        title: '',
        description: ''
    });

    function handleChange(event) {
        const {name, value} = event.target;
        setInputText(prevValues => {
            return{
                ...prevValues,
                [name]: value
            }
        })
    }

  function addItem() {
    setItems(prevItems => [...prevItems, inputText]);
    setInputText({title:'', description:''});
  }

  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((arrayItem, index) => {
        return index !== id
      })
    });
  }

  return (
    <div id='Main-page'>
      <Header />
      <div className='gallery-box'>

        <InputArea
          handleChange={handleChange}
          addItem={addItem}
          inputText={inputText}
        />

        <div className='mapping-note-boxes'>
          {
            items.map((todoItem, index) => (
              <TodoItem 
                id={index}
                key={index}
                title={todoItem.title}
                description={todoItem.description}
                onChecked={deleteItem}
              />
            ))
          }
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;


// pending functionalities:
// 1. delete functionality
// 2. if input was empty, then add button should not work