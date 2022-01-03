import { React, useState } from "react";
import JSON_DATA from "./data/MOCK_DATA.json";
import "./App.css";

function App() {
  const [searchValue, setSearchValue] = useState("");
  
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <div>
        {JSON_DATA.filter((data) => {
          return searchValue !== ""
            ? data.first_name.toLowerCase().includes(searchValue.toLowerCase())
            : data;
        }).map((data, key) => (
          <div key={key} className="data">
            {data.id} - {data.first_name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
