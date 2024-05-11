import { useState } from 'react';

export default function MyList({ myShoping, setmyShoping, handleChange, handleDelete }) {
  const [sort, setSort] = useState('order');

  function handleClearList() {
    const confirmed = window.confirm('Are you sure you want to clear your list?');
    confirmed && setmyShoping([]);
  }

  let sortedList;
  sort === 'order' && (sortedList = myShoping);
  sort === 'description' && (sortedList = myShoping.slice().sort((a, b) => a.description.localeCompare(b.description)));
  sort === 'paid status' && (sortedList = myShoping.slice().sort((a, b) => Number(a.paid) - Number(b.paid)));

  return (
    <div className='list-box'>
      <ul className='list-box-list'>
        {sortedList.map(item => <List item={item} key={item.id} handleChange={handleChange} handleDelete={handleDelete} />)}
      </ul>

      <div className='list-box-clear'>
        <select value={sort} onChange={(e)=>setSort(e.target.value)}>
          <option value="order">SORT BY INPUT ORDER</option>
          <option value="description">SORT BY INPUT DESCRIPTION</option>
          <option value="paid status">SORT BY INPUT PAID STATUS</option>
        </select>
        <button onClick={handleClearList}>Clear list</button></div>
    </div>
  )
}

function List({ item, handleChange, handleDelete }) {

  return (
    <li className={`list-box-item ${item.paid ? "paid" : ""}`}>
      <input type="checkbox" onChange={() => handleChange(item.id)} />
      <span>{item.quantity} {item.description}</span>
      <button onClick={() => handleDelete(item.id)}>❌</button>
    </li>
  )
}