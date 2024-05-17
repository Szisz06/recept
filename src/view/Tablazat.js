import React, { useState } from "react";
import './Tablazat.css';

export default function Tablazat({ tabla, onDelete ,}) {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleRowClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="table-responsive">
      <h1>Receptek táblázata</h1>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Név</th>
            <th>Kategória</th>
            <th>Kép</th>
            <th>Leírás</th>
            <th>Műveletek</th>
          </tr>
        </thead>
        <tbody>
          {tabla.map((item, index) => (
            <tr key={index} onClick={() => handleRowClick(item)}>
              <td>{index + 1}</td>
              <td>{item.nev}</td>
              <td>{item.kategoria_nev}</td>
              <td>
                <img src={item.kep} alt={item.nev} style={{ maxWidth: "100px" }} />
              </td>
              <td>{item.leiras}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={(e) => {
                    e.stopPropagation(); 
                    onDelete(item.id);
                  }}
                >
                  Törlés
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
