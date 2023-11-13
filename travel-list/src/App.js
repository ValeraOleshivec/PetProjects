import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
const initialItems = [
  { id: 1, description: "Random", quantity: 2, packed: false },
  { id: 2, description: "Random2", quantity: 12, packed: false },
];
function App() {
  const [items, setItems] = useState(initialItems);
  const handleDelete = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };
  function handleTogglePackage(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearAll() {
    const confirm = window.confirm("Are u sure about that DUUUUUUUDE?");
    if (!confirm) return;
    setItems([]);
  }
  return (
    <>
      <Logo></Logo>
      <Form setItems={setItems} items={items}></Form>
      <PackingList
        items={items}
        deleteItem={handleDelete}
        togglePackage={handleTogglePackage}
        clearAll={handleClearAll}
      />
      <Stats items={items} />
    </>
  );
}

export default App;
