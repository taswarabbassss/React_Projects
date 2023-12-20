import { useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
function Map() {
  const [searchParam, setSearchParam] = useSearchParams();
  const lat = searchParam.get("lat");
  const lng = searchParam.get("lng");
  return (
    <div className={styles.mapContainer}>
      <h1>MAP</h1>
      <h1>
        Position: {lat},{lng}
      </h1>

      <button
        onClick={() => {
          setSearchParam({ lat: 23, lng: 53, else: "nothing" });
        }}
      >
        Change Postion
      </button>
    </div>
  );
}

export default Map;
