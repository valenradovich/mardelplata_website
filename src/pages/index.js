import * as React from "react"
import { useState, useEffect } from "react";
import getWeatherData from "../services/api.js";
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"


const placesList = [
  {
    name: "Playa Grande",
    url: "https://www.marplataturismo.gob.ar/atractivo/playa-grande",
    category: "🏖️",
    phone: "(223) 451-9718"
  },
  {
    name: "Museo MAR",
    url: "https://www.museomar.org/",
    category: "🏛️",
    phone: "(223) 486-2600"
  },
  {
    name: "Torreón del Monje",
    url: "https://www.marplataturismo.gob.ar/atractivo/torreon-del-monje",
    category: "🏛️",
    phone: "(223) 451-9718"
  },
  {
    name: "Torre Tanque",
    url: "http://www.osmgp.gov.ar/osse/visitas-guiadas",
    category: "🏛️",
    phone: "(223) 499-2924"
  },
  {
    name: "Centro Cultural Victoria Ocampo",
    url: "https://www.mardelplata.gob.ar/centroculturalvictoriaocampo",
    category: "🏛️",
    phone: "(223) 494-2878"
  },
  {
    name: "Puerto de la ciudad",
    url: "https://mardelplata.com/puerto-2/",
    category: "🚢",
    phone: "(223) 535-5079"
  },
  {
    name:"Aquarium",
    url: "https://www.aquarium.com/",
    category: "🐠",
    phone: "(223) 494-2878"
  },
  {
    name:"Gruta de Lourdes",
    url: "https://www.facebook.com/grutadelourdesmdq/",
    category: "⛪",
    phone: "(223) 480-3072"
  },
  {
    name:"Aquopolis",
    url: "https://www.aquopolis.com.ar/",
    category: "🏊",
    phone: "(223) 467-0700"
  },
  {
    name:"Helados Italia",
    url: "https://www.instagram.com/heladositalia/",
    category: "🍦",
    phone: "(223) 451-6905"
  },
  {
    name:"Manolo",
    url: "http://churrosmanolo.com/es/",
    category: "🍽",
    phone: "(223) 486-2142"
  },
  {
    name:"La Marina",
    url: "https://www.instagram.com/lamarinamdq/",
    category: "🍽",
    phone: "(223) 519-3360"
  },
  {
    name:"Sarasanegro",
    url: "https://www.instagram.com/sarasanegro/",
    category: "🍽",
    phone: "(223) 473-0808"
  },
  {
    name:"Torombolo",
    url: "https://www.torombolo.com",
    category: "🍽",
    phone: "(223) 486-2424"
  },
  {
    name:"Chichilo",
    url: "https://www.instagram.com/chichilorestaurant/",
    category: "🍽",
    phone: "(223) 489-6317"
  }
];

const IndexPage = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getWeatherData();
      setWeatherData(data);
    };
    fetchData();

    const intervalId = setInterval(async () => {
      const data = await getWeatherData();
      setWeatherData(data);
    }, 30000);

    return () => clearInterval(intervalId);
  }, []);

  let weatherIcon = null;

  // VER SI ESTO SE PUEDE HACER POR ID DE LA WEB QUE ESTA GUARDADA EN LA BARRA DE MARCADORES
  if (weatherData) {
    if (weatherData.mainWeather === 800 && weatherData.sunset >= weatherData.currentTime) {
      weatherIcon = (
        <img
          src={"https://cdn-icons-png.flaticon.com/512/6974/6974833.png"}
          alt={weatherData.mainWeather}
        />
      );
    }else if (weatherData.mainWeather === 800 && weatherData.sunset <= weatherData.currentTime) {
      weatherIcon = (
        <img
          src={"https://cdn-icons-png.flaticon.com/512/6974/6974813.png"}
          alt={weatherData.mainWeather}
        />
      );
    } else if (weatherData.mainWeather >= 802 && weatherData.mainWeather <= 804) {
      weatherIcon = (
        <img
          src={"https://cdn-icons-png.flaticon.com/512/6974/6974809.png"}
          alt={weatherData.mainWeather}
        />
      );
    } else if (weatherData.mainWeather >= 500 && weatherData.mainWeather <= 531) {
      weatherIcon = (
        <img
          src={"https://cdn-icons-png.flaticon.com/512/6974/6974826.png"}
          alt={weatherData.mainWeather}
        />
      );
    } else if (weatherData.mainWeather >= 600 && weatherData.mainWeather <= 622) {
      weatherIcon = (
        <img
          src={"https://cdn-icons-png.flaticon.com/512/6974/6974830.png"}
          alt={weatherData.mainWeather}
        />
      );
    } else if (weatherData.mainWeather === 801) {
      weatherIcon = (
        <img
          src={"https://cdn-icons-png.flaticon.com/512/6974/6974835.png"}
          alt={weatherData.mainWeather}
        />
      );
    } else if (weatherData.mainWeather >= 200 && weatherData.mainWeather <= 232) {
      weatherIcon = (
        <img
          src={"https://cdn-icons-png.flaticon.com/512/6974/6974845.png"}
          alt={weatherData.mainWeather}
        />
      );
    } else if (weatherData.mainWeather >= 701 && weatherData.mainWeather <= 781) {
      weatherIcon = (
        <img
          src={"https://cdn-icons-png.flaticon.com/512/6974/6974809.png"}
          alt={weatherData.mainWeather}
        />
      );
    } else if (weatherData.mainWeather >= 300 && weatherData.mainWeather <= 321) {
      weatherIcon = (
        <img
          src={"https://cdn-icons-png.flaticon.com/512/6974/6974819.png"}
          alt={weatherData.mainWeather}
        />
      );
  }
}

  return (

  <Layout>
    <div>
    <div className={styles.nout}>
      <div>
        <div className={styles.trasitionss}>
          <div className={styles.jfpreP}>
            <main className={styles.faFWGR}>
              <h1>Mar del Plata</h1>
              {weatherData && (
                <div className={styles.gDAypO}>
                  <div className={styles.eeVhzW}>
                    <time>{weatherData.currentDayName} {weatherData.currentTime}</time>
                    <div>
                      <div className={styles.jruNVV}>
                        <div className={styles.bxjPYi}>
                          <div className={styles.cLUMYz}><img src="https://www.svgrepo.com/show/43232/temperature.svg"
                              alt="temperature"  />
                            <p>{weatherData.temperature}°</p>
                          </div>
                          <div className={styles.cLUMYz}><img src="https://www.svgrepo.com/show/390943/drizzling.svg"
                              alt="precipitacion_probability"  />
                            <p>{weatherData.precipitation_probability}%</p>
                          </div>
                        </div>
                        <div className={styles.bxjPYi}>
                          <div className={styles.cLUMYz}><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTE4LDEwYTQsNCwwLDEsMC00LTRBNCw0LDAsMCwwLDE4LDEwWm0wLTZhMiwyLDAsMSwxLTIsMkEyLDIsMCwwLDEsMTgsNFptLTEuMTUsOC40N2ExLDEsMCwwLDAtMS43LDBsLTEsMS42M0wxMC44Niw4LjVhMSwxLDAsMCwwLTEuNzIsMGwtNywxMkExLDEsMCwwLDAsMywyMkgyMWExLDEsMCwwLDAsLjg1LTEuNTNaTTEwLjQ1LDIwSDQuNzRMMTAsMTFsMi45NCw1LTEuMjUsMlptMi4zNSwwLDEuNDktMi4zN0wxNSwxNi41N2gwTDE2LDE0Ljg5LDE5LjIsMjBaIi8+PC9zdmc+"
                              alt="sunset" />
                            <p>{weatherData.sunrise.toString()}</p>
                          </div>
                          <div className={styles.cLUMYz}><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTE3LjY2LDguMzRhMSwxLDAsMCwwLC43LS4yOWwuNzEtLjcxYTEsMSwwLDEsMC0xLjQxLTEuNDFMMTcsNi42NGExLDEsMCwwLDAsMCwxLjQxQTEsMSwwLDAsMCwxNy42Niw4LjM0Wk0xMiw2YTEsMSwwLDAsMCwxLTFWNGExLDEsMCwwLDAtMiwwVjVBMSwxLDAsMCwwLDEyLDZaTTQsMTJIM2ExLDEsMCwwLDAsMCwySDRhMSwxLDAsMCwwLDAtMlpNNS42NCw4LjA1YTEsMSwwLDAsMCwuNy4yOSwxLDEsMCwwLDAsLjcxLS4yOSwxLDEsMCwwLDAsMC0xLjQxbC0uNzEtLjcxQTEsMSwwLDAsMCw0LjkzLDcuMzRaTTIxLDEySDIwYTEsMSwwLDAsMCwwLDJoMWExLDEsMCwwLDAsMC0yWk0xMSwxOUg4YTEsMSwwLDAsMCwwLDJoM2ExLDEsMCwwLDAsMC0yWm03LTRoLS44OGE1LjM5LDUuMzksMCwwLDAsLjM4LTIsNS41LDUuNSwwLDAsMC0xMSwwLDUuMzksNS4zOSwwLDAsMCwuMzgsMkg2YTEsMSwwLDAsMCwwLDJIMThhMSwxLDAsMCwwLDAtMlptLTMuMTUsMEg5LjE1YTMuNDQsMy40NCwwLDAsMS0uNjUtMiwzLjUsMy41LDAsMCwxLDcsMEEzLjQ0LDMuNDQsMCwwLDEsMTQuODUsMTVaTTE2LDE5SDE1YTEsMSwwLDAsMCwwLDJoMWExLDEsMCwwLDAsMC0yWiIvPjwvc3ZnPg=="
                              alt="sunset" />
                            <p>{weatherData.sunset.toString()}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div className={styles.bKuZIj}>
                <div className={styles.iRSWyz}>
                  <h3>Atracciones</h3>
                  <ul className={styles.PDnog}>
                    {placesList.map((place) => (
                      <li className={styles.eFWAde}><a href={place.url}><span>{place.category} {place.name}</span><span>{place.phone}</span></a></li>
                    ))}
                  </ul>
                </div>
              </div>
            </main>
              <div className={styles.jGUyed}>{weatherIcon}</div> 
          </div>
        </div>
      </div>
    </div>
  </div>
  </Layout>
);
};

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Mar del Plata"/>

export default IndexPage
