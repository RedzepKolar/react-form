import CustomInput from "./CustomInput";
import {useState} from "react";

function Weather() {
    let [city, setCity] = useState("");
    let [country, setCountry] = useState("");
    let [temperature, setTemperature] = useState("");
    let [cities, setCities] = useState([]);

    function handleAddCity(e){
        e.preventDefault();
        if(country === "" || city === "" || temperature === ""){
            return;
        }

        setCountry("");
        setCity("");
        setTemperature("");

        const newCity = [{
            name: city,
            country: country,
            temperature: temperature,
        }];

        setCities(currentCities => [...currentCities, ...newCity]);

    }

    return(
    <div className="container">
        <div className="row vh-100 d-flex justify-content align-items-center">
            <div className="col-md-8">
                <div className="card shadow">
                    <div className="card-body">
                        <div className="mb-3 mt-4">
                            <h5 className="fw-bold text-uppercase mb-2">Weather form</h5>
                            <form className="mb-3">
                                <CustomInput labelName="City" type="text" value={city}
                                             onInput={(e) => setCity(e.currentTarget.value)}/>
                                <CustomInput labelName="Country" type="text" value={country}
                                             onInput={(e) => setCountry(e.currentTarget.value)}/>
                                <CustomInput labelName="Temperature" type="number" value={temperature}
                                             onInput={(e) => setTemperature(e.currentTarget.value)}/>
                                <div className="d-grid">
                                    <button className="btn btn-primary" type="submit" onClick={handleAddCity}>
                                        Add city temperature
                                    </button>
                                </div>
                                <div className="mt-4">
                                    {cities.map((city, index) => (
                                        <p key={index}>The temperature in <b>{city.name}</b>, which is located in <b>{city.country}</b>, is currently <b>{city.temperature}°C.</b>  </p>
                                    ))}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    )
}

export default Weather;