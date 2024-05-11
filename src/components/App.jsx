import '../App.css'
import Footer from './Footer';
import MyList from './MyList';
import FormItems from './FormItems';
import Header from './Header';
import { useState } from 'react';


export default function App() {
  const [myShoping, setmyShoping] = useState([]);

  function handleAddShoping(shopings) {
    setmyShoping(item => [...item, shopings]);
  }

  function handleChange(id) {
    setmyShoping(el=>el.map(item=>item.id === id ? {...item, paid: !item.paid} : item));
  }

  function handleDelete(id) {
    setmyShoping(el=>el.filter(item => item.id !== id))
  }

  return (
    <>
      <Header />
      <main>
        <FormItems handleAddShoping={handleAddShoping} />
        <MyList myShoping={myShoping} setmyShoping={setmyShoping} handleChange={handleChange} handleDelete={handleDelete}/>
      </main>
      <Footer myShoping={myShoping}/>
    </>
  )
}