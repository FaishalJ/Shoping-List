export default function Footer({ myShoping }) {
  const paid = myShoping.filter(item=>item.paid===true).length;
  const average = (paid / myShoping.length) * 100;
  
  return (
    <footer>
      <p>{myShoping.length === 0 ? `Start adding some items to your shoping list 🛒` : `🛒 You have ${myShoping.length} items on your list, and you already bought ${paid}(${Math.floor(average)}%)`}</p>
    </footer>
  )
}