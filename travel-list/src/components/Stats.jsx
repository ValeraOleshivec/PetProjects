function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "Юхуууу, пора на отдых"
          : `Ты добавил ${numItems} в список дел уже выполнил ${numPacked} (${
              isNaN(percentage) ? "0" : percentage
            }%)`}
      </em>
    </footer>
  );
}

export default Stats;
