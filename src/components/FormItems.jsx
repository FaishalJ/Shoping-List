import { useState } from 'react';

export default function FormItems({ handleAddShoping }) {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!description || !quantity) return
    const newItems = {
      description: description,
      id: Date.now(),
      quantity,
      paid: false
    }

    handleAddShoping(newItems);

    setQuantity(1);
    setDescription("");
  }

  return (
    < form className='shoping' onSubmit={handleSubmit}>
      <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, ind) => <option value={ind + 1} key={ind + 1}>{ind + 1}</option>)}
      </select>
      <input type="text" placeholder="Add item" autoComplete='off' value={description} onChange={(e) => setDescription(e.target.value)} />
      <button type="submit">Add</button>
    </form >
  )
}