import { useEffect, useState } from "react";
import "./App.css";
import { handleCountries, selectCountry } from "./store/slices/allCountries";
import { useDispatch, useSelector } from "react-redux";
import CountryList from "./components/CountryList";
import { handleRegion } from "./store/slices/region";
import Region from "./components/Region";
import { selectMode } from "./store/slices/mode";

function App() {
  const API_URL = "https://restcountries.com/v3.1";
  useEffect(() => {
    fetch(`${API_URL}/all`)
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        dispatch(
          handleCountries({
            country: res,
          })
        );
      });
  }, []);
  const dispatch = useDispatch();
  const country = useSelector(selectCountry);

  const [region, setRegion] = useState("");
  const mode = useSelector(selectMode);
  return (
    <div className={`flex flex-col gap-5 ${mode ? "" : "bg-[#2b3945]"}`}>
      <div className={`${mode ? "" : "bg-[#2b3945]"} flex justify-end`}>
        <select
          className="bg-slate-700 text-white mt-5 p-2 shadow-[0_0px_20px_rgba(0,0,0,0.4)] mr-[35px]"
          value={region}
          onChange={(e) => {
            setRegion(e.target.value);
            dispatch(handleRegion({ region: e.target.value }));
          }}
          name="region"
          id="region"
        >
          <option value="" className="text-red-500 ">{region == "" ? 'Filter by region' : "All world" }</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
      {
        region == "" ? <div className={`${mode ? "" : "bg-[#2b3945]"} flex flex-wrap justify-evenly  gap-[30px]  `}>
          {country.map((el) => {
            return (
              <div key={Math.random()} className="h-[410px] bg-[#2b3945] ">
                <CountryList info={el} />
              </div>
            );
          })}
        </div> : <Region />
      }

    </div>
  );
}

export default App;
