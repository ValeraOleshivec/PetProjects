// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";

import styles from "./Form.module.css";
import Button from "./Button";
import Spinner from "./Spinner";
import Message from "./Message";
import { useNavigate } from "react-router-dom";
import { useUrlPositon } from "../hooks/useUrlPositon";
import { useCities } from "../contexts/CitiesContext";

export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

function Form() {
  const { createCity, loading } = useCities();
  const [cityName, setCityName] = useState("");
  const [lat, lng] = useUrlPositon();
  const [country, setCountry] = useState("");
  const [emoji, setEmojy] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [isLoadingGeo, setIsLoadingGeo] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  useEffect(
    function () {
      if (!lng && !lat) return;
      async function fetchCityData() {
        try {
          setError("");
          setIsLoadingGeo(true);
          const res = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
          );
          const data = await res.json();
          if (!data.city)
            throw new Error("Ты выбрал не страну,нажми в другом месте");
          setCityName(data.city);
          setCountry(data.countryName);
          setEmojy(convertToEmoji(data.countryCode));
        } catch (err) {
          setError(err.message);
        } finally {
          setIsLoadingGeo(false);
        }
      }
      fetchCityData();
    },
    [lat, lng]
  );
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    if (!cityName || !date) return;
    const newCity = {
      cityName,
      country,
      emoji,
      date,
      notes,
      position: { lat, lng },
    };
    await createCity(newCity);
    navigate("/app/cities");
  }
  if (isLoadingGeo) return <Spinner />;
  if (!lng && !lat) return <Message message="Начни нажав на город с карты" />;
  if (error) return <Message message={error} />;
  return (
    <form
      className={`${styles.form} ${loading ? styles.loading : ""}`}
      onSubmit={handleSubmit}
    >
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        <span className={styles.flag}>{emoji}</span>
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        {/* <input
          id="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        /> */}
        <DatePicker
          id="date"
          onChange={(date) => setDate(date)}
          selected={date}
          dateFormat="dd/MM/yyyy"
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <Button type="primary">Add</Button>
        <Button
          type="back"
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
        >
          &larr; Back
        </Button>
      </div>
    </form>
  );
}

export default Form;
