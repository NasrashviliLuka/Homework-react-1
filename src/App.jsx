import React, { useState } from "react";
const [name, setName] = useState("");
const [artists, setArtists] = useState([]);
const [firstname, setfirstName] = useState("");
const [lastname, setLastName] = useState("");

return (
  <>
    <input
      type="text"
      placeholder="setfirstName"
      onChange={(e) => setfirstName(e.target.value)}
    />
    <br />
    <input
      type="text"
      placeholder="setLastName"
      onChange={(e) => setLastName(e.target.value)}
    />
    <br />
    <input value={name} onChange={(e) => setName(e.target.value)} />
    <button
      onClick={() => {
        setArtists([...artists, { id: nextId++, name: name }]);
      }}
    >
      Add
    </button>
    <ul>
      {artists.map((artist) => (
        <li key={artist.id}>{artist.name}</li>
      ))}
    </ul>
    {setfirstName} {setLastName}
  </>
);

export default App;
