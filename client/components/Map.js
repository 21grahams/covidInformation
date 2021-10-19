import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    setRows(data);
  }, [data]);

  return (
    <div>
      <SearchBar
        style={{marginLeft: '10px'}}
        value={searched}
        onChange={(searchVal) => handleSearch(searchVal)}
        onCancelSearch={() => setSearched('')}
        placeholder="Search Country Here"
      />
      {global ? (
        <div>
          <>
            <h1 className="textTotal" style={{fontSize: 'xx-large'}}>Global Cases</h1>
            <h4 className="textTotal">New Confirmed Cases:{" "}<span className="numberTotals">{commaNumber(global.NewConfirmed)}</span></h4>
            <h4 className="textTotal">New Confirmed Deaths:{" "}<span className="numberTotals">{commaNumber(global.NewDeaths)}</span></h4>
            <h4 className="textTotal">Total Confirmed Cases:{" "}<span className="numberTotals">{commaNumber(global.TotalConfirmed)}</span></h4>
            <h4 className="textTotal">Total Deaths:{" "}<span className="numberTotals">{commaNumber(global.TotalDeaths)}</span></h4>
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
