import { useState } from "react";
import { VectorMap } from "react-jvectormap";
import { useSelector, useDispatch } from "react-redux";
import { fetchCountries } from "../redux/Country/Services";


const { getName } = require("country-list");

function Map(){

    const dispatch = useDispatch()
    const country = useSelector(state => state.country.items)
    const isLoading = useSelector(state => state.country.isLoading)

    const [countryName, setCountryName] = useState([])
   
    const handleClick = (e, countryCode) => { 
      e.preventDefault();
        setCountryName(getName(countryCode))
        dispatch(fetchCountries(countryCode))
      };

    
   
  return (
    <div className="map">
      <h1>Covid-19</h1>
      <VectorMap
        map={"world_mill"}
        backgroundColor="transparent" 
        zoomOnScroll={false}
        containerStyle={{
          width: "100%",
          height: "400px"
        }}
        onRegionClick= {handleClick}
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
        // onRegionTipShow = {(e, el, code) => {
        //   if (code) {
        //     el.html(el.html() + '<br/>Confirmed:' + country.confirmed.value + '<br/> Recovered:' + country.recovered.value + '<br/>Deaths:' + country.deaths.value);
        //   } else {
        //     el.html.preventDefault();
        //   }
        // }}
        
      />
      {!isLoading && <h2>Select Country...</h2>}
        {country && isLoading && (
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
