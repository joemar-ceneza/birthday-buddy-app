import { useState } from "react";
import "../css/App.scss";
import data from "../../data";
import Person from "./Person";

export default function App() {
  const [peoples, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{peoples.length} birthdays today</h3>
        <Person people={peoples} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  );
}
