// Card Component
const Card = ({ name, img, rating, price }) => (
  <div className="card">
    <img
      src={img}
      alt={name}
      // onError={e => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/250x150?text=Image+Not+Found"; }}
    />
    <div style={{ padding: "1rem" }}>
      <h3>{name}</h3>
      <p>⭐ {rating} &nbsp; | &nbsp; ₹{price}</p>
    </div>
  </div>
);
export default Card;