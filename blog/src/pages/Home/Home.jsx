import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getFetch = async () => {
      try {
        setLoading(true);

        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        setData(res.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };

    getFetch();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        data.map((item) => (
          <div key={item.id}>
            <h1>{item.title}</h1>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
