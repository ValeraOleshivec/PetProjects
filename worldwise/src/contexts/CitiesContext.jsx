import {
  createContext,
  useState,
  useEffect,
  useContext,
  useReducer,
  useCallback,
} from "react";

const CitiesContext = createContext();
const initialState = {
  cities: [],
  loading: false,
  currentCity: {},
  error: "",
};
function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, loading: true };
    case "cities/loaded":
      return { ...state, loading: false, cities: action.payload };
    case "city/loaded":
      return { ...state, loading: false, currentCity: action.payload };
    case "city/created":
      return {
        ...state,
        loading: false,
        cities: [...state.cities, action.payload],
        currentCity: action.payload,
      };
    case "city/deleted":
      return {
        ...state,
        loading: false,
        cities: state.cities.filter((city) => city.id !== action.payload),
      };
    case "reject":
      return { ...state, loading: false, error: action.payload };
    default:
      throw new Error("Incorrect action type");
  }
}
function CitiesProvider({ children }) {
  const [{ cities, loading, currentCity }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(function () {
    dispatch({ type: "loading" });
    async function fetchCities() {
      try {
        const res = await fetch(`http://localhost:8000/cities`);
        const data = await res.json();
        dispatch({ type: "cities/loaded", payload: data });
      } catch (err) {
        dispatch({ type: "reject", payload: "Something err" });
      }
    }
    fetchCities();
  }, []);
  const getCity = useCallback(
    async function getCity(id) {
      dispatch({ type: "loading" });
      try {
        const res = await fetch(`http://localhost:8000/cities/${id}`);
        const data = await res.json();
        dispatch({ type: "city/loaded", payload: data });
      } catch (err) {
        dispatch({ type: "reject", payload: "Something err" });
      }
    },
    [currentCity.id]
  );
  async function createCity(newCity) {
    dispatch({ type: "loading" });
    try {
      const res = await fetch(`http://localhost:8000/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      dispatch({ type: "city/created", payload: data });
    } catch (err) {
      dispatch({ type: "reject", payload: "Something err" });
    }
  }
  async function deleteCity(id) {
    console.log(id);
    dispatch({ type: "loading" });
    try {
      await fetch(`http://localhost:8000/cities/${id}`, {
        method: "DELETE",
      });
      dispatch({ type: "city/deleted", payload: id });
    } catch (err) {
      dispatch({ type: "reject", payload: "Something err" });
    }
  }
  return (
    <CitiesContext.Provider
      value={{ cities, loading, currentCity, getCity, createCity, deleteCity }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("Cities Context was used outside of Cities Provider");
  return context;
}
export { CitiesProvider, useCities };
