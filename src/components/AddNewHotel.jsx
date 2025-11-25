import useFetch from "../useFetch";
import { useState } from "react";
const AddNewHotel = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    location: "",
    rating: "",
    website: "",
    phoneNumber: "",
    checkInTime: "",
    checkOutTime: "",
    anemities: "",
    priceRange: "",
    reservationsNeeded: false,
    isParkingAvailable: false,
    isWifiAvailable: false,
    isPoolAvailable: false,
    isSpaAvailable: false,
    isRestaurantAvailable: false,
    photos: "",
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]:
        type === "checkbox"
          ? checked
          : type === "number"
          ? parseInt(value)
          : value,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://hotel-backend-git-main-kaushal-kishores-projects-52ddfca8.vercel.app/hotels",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      window.location.reload();
      if (!response.ok) {
        throw "Failed to Add Hotel!!";
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <h1>Add New Hotel</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Hotel Name: </label>
        <input
          type="text"
          onChange={handleChange}
          value={formData.name}
          name="name"
        />
        <br />
        <br />
        <label htmlFor="category">Category: </label>
        <select
          name="category"
          onChange={handleChange}
          value={formData.category}>
          <option value="Budget">Budget</option>
          <option value="Mid-Range">Mid-Range</option>
          <option value="Luxury">Luxury</option>
          <option value="Boutique">Boutique</option>
          <option value="Resort">Resort</option>
          <option value="Other">Other</option>
        </select>
        <br />
        <br />
        <label htmlFor="location">Location: </label>
        <input
          type="text"
          onChange={handleChange}
          value={formData.location}
          name="location"
        />
        <br />
        <br />
        <label htmlFor="rating">Rating: </label>
        <input
          type="number"
          onChange={handleChange}
          value={formData.rating}
          name="rating"
        />
        <br />
        <br />
        <label htmlFor="website">Website: </label>
        <input
          type="text"
          onChange={handleChange}
          value={formData.website}
          name="website"
        />
        <br />
        <br />
        <label htmlFor="phoneNumber">Phone Number: </label>
        <input
          type="number"
          onChange={handleChange}
          value={formData.phoneNumber}
          name="phoneNumber"
        />
        <br />
        <br />
        <label htmlFor="checkInTime">CheckIn Time: </label>
        <input
          type="text"
          onChange={handleChange}
          value={formData.checkInTime}
          name="checkInTime"
        />
        <br />
        <br />
        <label htmlFor="checkOutTime">CheckOut Time: </label>
        <input
          type="text"
          onChange={handleChange}
          value={formData.checkOutTime}
          name="checkOutTime"
        />
        <br />
        <br />
        <label htmlFor="anemities">Anemities: </label>
        <input
          type="text"
          onChange={handleChange}
          value={formData.anemities}
          name="anemities"
        />
        <br />
        <br />
        <label htmlFor="priceRange">Price Range: </label>
        <select
          name="priceRange"
          onChange={handleChange}
          value={formData.priceRange}>
          <option value="$$ (11-30)">$$ (11-30)</option>
          <option value="$$$ (31-60)">$$$ (31-60)</option>
          <option value="$$$$ (61+)">$$$$ (61+)</option>
          <option value="Other">Other</option>
        </select>
        <br />
        <br />
        <label htmlFor="reserVationsNeeded">Reservation Needed: </label>
        <input
          type="checkbox"
          name="reservationsNeeded"
          onChange={handleChange}
          checked={formData.reservationsNeeded}
        />
        <br /> <br />
        <label htmlFor="isParkingAvailable">Is ParkingAvailable: </label>
        <input
          type="checkbox"
          name="isParkingAvailable"
          onChange={handleChange}
          checked={formData.isParkingAvailable}
        />
        <br /> <br />
        <label htmlFor="isWifiAvailable">Is Wifi Available: </label>
        <input
          type="checkbox"
          name="isWifiAvailable"
          onChange={handleChange}
          checked={formData.isWifiAvailable}
        />
        <br /> <br />
        <label htmlFor="isPoolAvailable">Is Pool Available: </label>
        <input
          type="checkbox"
          name="isPoolAvailable"
          onChange={handleChange}
          checked={formData.isPoolAvailable}
        />
        <br /> <br />
        <label htmlFor="isSpaAvailable">Is Spa Available: </label>
        <input
          type="checkbox"
          name="isSpaAvailable"
          onChange={handleChange}
          checked={formData.isSpaAvailable}
        />
        <br /> <br />
        <label htmlFor="isRestaurantAvailable">Is Restaurant Available: </label>
        <input
          type="checkbox"
          name="isRestaurantAvailable"
          onChange={handleChange}
          checked={formData.isRestaurantAvailable}
        />
        <br /> <br />
        <label htmlFor="photos">Photos: </label>
        <input
          type="text"
          name="photos"
          onChange={handleChange}
          value={formData.photos}
        />
        <br /> <br />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default AddNewHotel;
