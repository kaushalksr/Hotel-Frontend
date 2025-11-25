import { useState, useEffect } from "react";
import useFetch from "../useFetch";

const ReadAllHotel = () => {
  const { data, loading, error } = useFetch(
    "https://hotel-backend-lime.vercel.app/hotels"
  );
  const [message, setMessage] = useState("");
  let [hotel, setHotel] = useState([]);

  useEffect(() => {
    if (data) setHotel(data);
  }, [data]);

  const handleDelete = async (hotelId) => {
    try {
      const response = await fetch(
        `https://hotel-backend-lime.vercel.app/hotels/${hotelId}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw "Failed to delete hotel.";
      }

      setHotel((prevState) =>
        prevState.filter((hotel) => hotel._id !== hotelId)
      );

      setMessage("Hotel Deleted sucessfully!");
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error ocurred!</p>;

  return (
    <div>
      <h1>All Hotels</h1>
      <ul>
        {hotel?.map((hotel) => (
          <li key={hotel._id}>
            {hotel.name}{" "}
            <button onClick={() => handleDelete(hotel._id)}>Delete</button>
          </li>
        ))}
      </ul>
      <p>{message}</p>
    </div>
  );
};

export default ReadAllHotel;
