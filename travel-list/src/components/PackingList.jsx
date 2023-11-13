import { useState } from "react";
import Item from "./Item";

function PackingList({ items, deleteItem, togglePackage, clearAll }) {
  const [sort, setSort] = useState("input");
  let sortedItems;
  if (sort === "input") {
    sortedItems = items;
  } else if (sort === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  } else {
    sortedItems = items.slice().sort((a, b) => b.packed - a.packed);
  }
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            deleteItem={deleteItem}
            togglePackage={togglePackage}
          />
        ))}
      </ul>
      <div>
        <select onChange={(e) => setSort(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={() => clearAll()}>Clear</button>
      </div>
    </div>
  );
}

export default PackingList;
