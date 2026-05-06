import React, { useState } from "react";
import "./../styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const states = [/* ✅ keep your same data here (no change) */];

function App() {
  // ✅ selected state
  const [state, setState] = useState(states[0]);

  // ✅ selected city (object, not array)
  const [city, setCity] = useState(states[0].city[0]);

  // ✅ landmarks list
  const [landmarks, setLandmarks] = useState(
    states[0].city[0].landmarks
  );

  // ✅ selected landmark
  const [data, setData] = useState(
    states[0].city[0].landmarks[0]
  );

  function handleStateChange(e) {
    const value = e.target.value;
    const foundState = states.find((s) => s.name === value);

    setState(foundState);
    setCity(foundState.city[0]);
    setLandmarks(foundState.city[0].landmarks);
    setData(foundState.city[0].landmarks[0]);
  }

  function handleCityChange(e) {
    const value = e.target.value;
    const foundCity = state.city.find((c) => c.name === value);

    setCity(foundCity);
    setLandmarks(foundCity.landmarks);
    setData(foundCity.landmarks[0]);
  }

  function handleLandmarksChange(e) {
    const value = e.target.value;
    const foundLandmark = landmarks.find((l) => l.name === value);

    setData(foundLandmark);
  }

  return (
    <div id="main">
      {/* STATE DROPDOWN */}
      <select
        id="state"
        value={state.name}
        onChange={handleStateChange}
      >
        {states.map((el, idx) => (
          <option key={idx} value={el.name}>
            {el.name}
          </option>
        ))}
      </select>

      {/* CITY DROPDOWN */}
      <select
        id="city"
        value={city.name}
        onChange={handleCityChange}
      >
        {state.city.map((el, idx) => (
          <option key={idx} value={el.name}>
            {el.name}
          </option>
        ))}
      </select>

      {/* LANDMARK DROPDOWN */}
      <select
        id="landmark"
        value={data.name}
        onChange={handleLandmarksChange}
      >
        {landmarks.map((el, idx) => (
          <option key={idx} value={el.name}>
            {el.name}
          </option>
        ))}
      </select>

      {/* DISPLAY SECTION */}
      <div>
        <div id="state-title">
          <div id="state-name">{state.name}</div>
          <div id="state-description">{state.description}</div>
        </div>

        <div id="city-title">
          <div id="city-name">{city.name}</div>
          <div id="city-description">{city.description}</div>
        </div>

        <div id="landmark-title">
          <div id="landmark-name">{data.name}</div>
          <div id="landmark-description">{data.description}</div>
        </div>
      </div>
    </div>
  );
}

export default App;