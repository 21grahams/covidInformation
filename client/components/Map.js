import React, { useState } from "react";
import Area from "./Area";
import commaNumber from "comma-number";
import SearchBar from "material-ui-search-bar";

const Map = ({ data, setData, global }) => {
  const [searched, setSearched] = useState("");
  const [rows, setRows] = useState([]);

  const handleSearch = (searchVal) => {
    const filteredRows = data.filter((country) => {
      return country.Country.toLowerCase().includes(searchVal.toLowerCase());
    });
    setRows(filteredRows);
  };

  return (
    <div>
      <SearchBar
        value={searched}
        onChange={(searchVal) => handleSearch(searchVal)}
        onCancelSearch={() => setSearched('')}
        placeholder="Search Country Here"
      />
      {global ? (
        <div className="totals">
          <>
            <h1 className="text">Global Cases</h1>
            <h4 className="text">
              New Confirmed Cases:{" "}
              <span className="numbers">
                {commaNumber(global.NewConfirmed)}
              </span>
            </h4>
            <h4 className="text">
              New Confirmed Deaths:{" "}
              <span className="numbers">{commaNumber(global.NewDeaths)}</span>
            </h4>
            <h4 className="text">
              Total Confirmed Cases:{" "}
              <span className="numbers">
                {commaNumber(global.TotalConfirmed)}
              </span>
            </h4>
            <h4 className="text">
              Total Deaths:{" "}
              <span className="numbers">{commaNumber(global.TotalDeaths)}</span>
            </h4>
          </>
        </div>
      ) : null}

      {rows
        ? rows.map((location, i) => <Area location={location} key={i} />)
        : "Loading..."}

    </div>
  );
};

export default Map;
