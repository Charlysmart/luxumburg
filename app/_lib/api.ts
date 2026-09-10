async function getImages () {
    const data = await fetch("http://localhost:3000/data/hotelDetails.json");
    const hotelData = await data.json();
    return hotelData;
}