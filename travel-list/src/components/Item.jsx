function Item({ item, deleteItem, togglePackage }) {
  return (
    <li>
      <input type="checkbox" onChange={() => togglePackage(item.id)} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => deleteItem(item.id)}>&times;</button>
    </li>
  );
}
export default Item;
