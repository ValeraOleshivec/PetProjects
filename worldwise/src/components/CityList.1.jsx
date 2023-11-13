import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";

export function CityList({ cities, loading }) {
  if (loading) return <Spinner />;
  if (!cities.length)
    return <Message message="Add your first city by clicking on the map" />;
  const countries = new Set([
    cities.map((el) => {
      return { country: el.country, emoji: el.emoji };
    }),
  ]);
  console.log(countries, "Tyt");
  return (
    <ul className={styles.countryList}>
      {countries.map(() => (
        <p>Привет</p>
      ))}
    </ul>
  );
}
