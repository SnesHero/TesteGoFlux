import { useState, useEffect } from "react";

export const LanceAceito = ({ lanceEscolhido, objId }) => {

    const handleRequest = () => {
      
        const requestOptions = {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            coleta: coleta,
            entrega: entrega,
            produto: produto,
            quantidade: quantidade,
            fechado: lanceEscolhido,
          }),
        };
        fetch(`http://localhost:8001/offers/${objId}`, requestOptions).then(
          (response) => response.json()
        );
        console.log(":p");
      };
};
