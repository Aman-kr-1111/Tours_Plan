import { useState } from "react";
import Data from "./Data";
import Tours from "./components/Tours";

export default function App() {
  const [tours, setTours] = useState(Data);
  function removeTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  if (tours.length === 0) {
    return (
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button onClick={() => setTours(Data)} className="btn-white">
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
}
