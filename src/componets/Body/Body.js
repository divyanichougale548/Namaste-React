import { useEffect, useState } from "react";
import Card from "../Card/Card";
import dishes from "../Utils/dishes.json";
import axios from "axios";

// Body Component with Search
const Body = () => {
  const [search, setSearch] = useState("");
  const [restaurantData, setRestaurantData] = useState([]);

  const topRatedRestaurant = () => {
    restaurantData.sort((a, b) => b.rating - a.rating);
    setRestaurantData([...restaurantData]);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    const filtered = dishes.filter((dish) =>
      dish.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setRestaurantData(filtered);
  };

  useEffect(() => {
    setRestaurantData(dishes);
  }, []);
  return (
    <main
      style={{
        padding: "2rem",
        background: "#f9f9f9",
        minHeight: "80vh",
      }}
    >
      <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <input
          type="text"
          placeholder="Search dishes..."
          value={search}
          onChange={handleSearch}
          style={{
            padding: "0.5rem 1rem",
            width: "300px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            margin: "1rem 0",
          }}
        />
        <button
          style={{
            height: 30,
            backgroundColor: "#8B0000",
            borderBlockColor: "#8B0000",
            color: "white",
            borderRadius: "4px",
            cursor: "pointer",
            border: "none",
            padding: "0 20px",
          }}
          onClick={topRatedRestaurant}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        {restaurantData.length > 0 ? (
          restaurantData.map((dish, idx) => <Card key={idx} {...dish} />)
        ) : (
          <p style={{ color: "#8B0000" }}>No dishes found.</p>
        )}
      </div>
    </main>
  );
};
export default Body;
