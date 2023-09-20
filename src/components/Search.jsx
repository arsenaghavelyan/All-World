import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectSearch } from "../store/slices/search";
import Popup from "./Popup";

export default function Search() {
  const search = useSelector(selectSearch);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${search}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setSearchResult(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (search) {
      fetchData();
    }
  }, [search]);

  const [popup, setPopup] = useState(null);

  return (
    <div>
      {searchResult &&
        searchResult.map((el) => {
          return (
            <div key={Math.random()} className="bg-[#2b3945] ">
              <div className="shadow-[0_0px_60px_rgba(0,0,0,0.3)] h-[400px] cursor-pointer" onClick={() => setPopup(el)}>
                <div className="w-[350px] flex justify-center">
                  <img src={`${el.flags.png}`} alt="" className="object-cover h-[200px] mt-3" />
                </div>
                <div className="p-6 text-white">
                  <div className="text-left font-bold">
                    <h1>{el.name.common}</h1>
                  </div>
                  <div className="mt-5">
                    <p>
                      Population: <span className="text-gray-400">{el.population}</span>
                    </p>
                  </div>
                  <div>
                    <p>
                      Region: <span className="text-gray-400">{el.region}</span>
                    </p>
                  </div>
                  <div>
                    <p>
                      Capital: <span className="text-gray-400">{el.capital}</span>
                    </p>
                  </div>
                </div>
              </div>
              {popup && <Popup info={popup} onClose={() => setPopup(null)} />}
            </div>
          );
        })}
    </div>
  );
}