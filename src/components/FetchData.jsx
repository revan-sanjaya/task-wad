import { useState, useEffect } from "react";

export default function FetchData() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/quotes/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="rounded-2xl bg-white/10 p-6 text-center backdrop-blur">
      <h2 className="mb-2 text-xl font-semibold">Quote Motivasi</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p className="italic">"{quote.quote}"</p>
          <p className="mt-2 text-sm text-white/60">- {quote.author}</p>
        </>
      )}
    </div>
  );
}
