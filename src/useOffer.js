import { useState, useEffect } from "react";

export default () => {

    const [offers, setOffers] = useState([]);

    const getApiData = async () => {
        try {
          const response = await fetch(
            `http://localhost:8001/offers`
          );
          const data = await response.json();
          if (data.response !== []) {
            setOffers(data);
          }
        } catch (err) {
          console.log("nao foi");
        }
      };

      useEffect(() => {
        getApiData();
      }, []);
    return{
        offers
    }
}