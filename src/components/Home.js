import { useState } from "react";
import { VectorMap } from "react-jvectormap";
import { useSelector, useDispatch } from "react-redux";
import { fetchCountries } from "../redux/Country/Services";


const { getName } = require("country-list");

const mapData = {

  };

function Map(){

    const dispatch = useDispatch()
    const country = useSelector(state => state.country.items)
    const [countryName, setCountryName] = useState([])
    
    const handleClick = (e, countryCode) => { 
        setCountryName(getName(countryCode))
        dispatch(fetchCountries(countryCode))
      };

 

  return (
    <div>
      <VectorMap
        map={"world_mill"}
        backgroundColor="#0077be" 
        zoomOnScroll={false}
        containerStyle={{
          width: "100%",
          height: "520px"
        }}
        onRegionClick={handleClick} //gets the country code
        containerClassName="map"
        regionStyle={{
          initial: {
            fill: "#e4e4e4",
            "fill-opacity": 0.9,
            stroke: "none",
            "stroke-width": 0,
            "stroke-opacity": 0
          },
          hover: {
            "fill-opacity": 0.8,
            cursor: "pointer"
          },
          selected: {
            fill: "#2938bc" //color for the clicked country
          },
          selectedHover: {
            fill: "#2938bc"
          }
        }}
        regionsSelectable={true}
        series={{
          regions: [
            {
              values: mapData, //this is your data
              scale: ["#146804", "#ff0000"], //your color game's here
              normalizeFunction: "polynomial"
            }
          ]
        }}
      />
        {country && (
            <div>
                <h1>{countryName}</h1>
                <h2>Confirmed: {country.confirmed?.value}</h2>
                <h2>Recovered: {country.recovered?.value}</h2>
                <h2>Deaths: {country.deaths?.value}</h2>
                <h4>Last Update: {country.lastUpdate}</h4>
            </div>
        )}
    </div>
  );
};
export default Map;
