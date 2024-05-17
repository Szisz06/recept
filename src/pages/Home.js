// Home.js
import React, { useEffect, useState } from "react";
import DataService from "../modell/DataService";
import { Form, Button } from "react-bootstrap";
import Tablazat from "../view/Tablazat";
import NewModal from "../view/NewModal";
import EgyEtel from "../view/EgyEtel";

export default function Home() {
  const DB = new DataService();

  const [objLista1, setObjLista1] = useState([]);
  const [objLista2, setObjLista2] = useState([]);
  const [objLista3, setObjLista3] = useState([]);
  const [value, setValue] = useState("Főétel");
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    DB.getData("/receptek/1", setObjLista1);
    DB.getData("/receptek/2", setObjLista2);
    DB.getData("/receptek/3", setObjLista3);
  }, []);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleDelete = (id) => {
    DB.deleteData("recept", id, () => {
      if (value === "Főétel") {
        DB.getData("/receptek/1", setObjLista1);
      } else if (value === "Leves") {
        DB.getData("/receptek/2", setObjLista2);
      } else {
        DB.getData("/receptek/3", setObjLista3);
      }
    });
  };

  const handleSave = (newItem) => {
    console.log(newItem)
    DB.postData("receptek", newItem, () => {
      if (value === "Főétel") {
        DB.getData("/receptek/1", setObjLista1);
      } else if (value === "Leves") {
        DB.getData("/receptek/2", setObjLista2);
      } else {
        DB.getData("/receptek/3", setObjLista3);
      }
    });
  };

  const getCurrentList = () => {
    if (value === "Főétel") {
      return objLista1;
    } else if (value === "Leves") {
      return objLista2;
    } else {
      return objLista3;
    }
  };

  const handleRowClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <>
      <h1>Home</h1>
      <div className="valaszto">
        <Form.Group className="mb-3">
          <Form.Label>Étel kiválasztása</Form.Label>
          <Form.Select id="kategoria" value={value} onChange={handleChange}>
            <option value="Főétel">Főételek</option>
            <option value="Leves">Levesek</option>
            <option value="Desszert">Deszzertek</option>
          </Form.Select>
        </Form.Group>
        <Button variant="primary" onClick={() => setShowModal(true)}>
          Új étel
        </Button>
        <Tablazat tabla={getCurrentList()} onDelete={handleDelete} onRowClick={handleRowClick} />
        <EgyEtel item={selectedItem} />
      </div>
      <NewModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        handleSave={handleSave}
      />
    </>
  );
}
