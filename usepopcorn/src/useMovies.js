import { useEffect, useState } from "react";
export function useMovies(query, callBack) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setError] = useState("");
  useEffect(
    function () {
      const controller = new AbortController();
      setError("");
      setLoading(true);
      callBack?.();
      async function fetchMovies() {
        try {
          const res = await fetch(
            `https://www.omdbapi.com/?apikey=7033e7df&s=${query}`,
            { signal: controller.signal }
          );
          if (!res.ok)
            throw new Error("Something went wrong with fetch movies");
          const data = await res.json();
          if (data.Response === "False") throw new Error("Movie not found :(");
          setMovies(data.Search);
          setError("");
        } catch (err) {
          if (err.name !== "AbortError") setError(err.message);
        } finally {
          setLoading(false);
        }
      }
      if (query.length < 3) {
        setLoading(false);
        setMovies([]);
        setError("");
        return;
      }
      fetchMovies();
      return function () {
        controller.abort();
      };
    },
    [query]
  );
  return { movies, loading, err };
}
