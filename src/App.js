import "./styles.css";
import React, { useState } from "react";

const INITIAL_STATE = [
  { id: 1, baslik: "Alışveriş Yap", tamamlandi: false },
  { id: 2, baslik: "Fatura öde", tamamlandi: true },
  { id: 3, baslik: "Ekmek al", tamamlandi: true }
];

export default function App() {
  const [yeniEleman, setYeniEleman] = useState();

  const [liste, setListe] = useState(INITIAL_STATE);

  const addNew = (title) => {
    setListe([...liste, { id: Date.now(), baslik: title, tamamlandi: false }]);
    setYeniEleman("");
  };

  const MarkCompleted = (id) => {
    setListe(
      liste.map((eleman) =>
        eleman.id === id
          ? { ...eleman, tamamlandi: !eleman.tamamlandi }
          : eleman
      )
    );
  };

  const ClearCompleted = () =>
    setListe(liste.filter((item) => !item.tamamlandi));

  return (
    <div className="App">
      <h1>Yapılacaklar Listesi</h1>
      <div className="ekleme_formu">
        <input
          value={yeniEleman}
          onChange={(event) => {
            setYeniEleman(event.target.value);
          }}
          placeholder="Listeye Ekle"
        />
        <button onClick={() => addNew(yeniEleman)}>Ekle</button>
      </div>
      <div className="liste">
        {liste.map((item) => (
          <div
            key={item.id}
            onClick={() => MarkCompleted(item.id)}
            className={item.tamamlandi ? "yapildi" : ""}
          >
            {item.baslik}
          </div>
        ))}
      </div>
      <button onClick={() => ClearCompleted()}>Tamamlananları Temizle</button>
    </div>
  );
}
