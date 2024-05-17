export default function EgyEtel({ item }) {
  if (!item) return null;

  return (
    <div className="selected-item">
      <h2>Kiválasztott recept:</h2>
      <p> {item.nev}</p>
      <img src={item.kep} alt={item.nev} style={{ width: "300px" }} />
      <p><strong>Kategória:</strong> {item.kategoria_nev}</p>
      <p><strong>Leírás:</strong> {item.leiras}</p>
    </div>
  );
}
