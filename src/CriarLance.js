import { Button, TextField } from "@material-ui/core";
import { useState, useEffect } from "react";

export const CriarLance = ({ coleta, entrega, produto, quantidade, lanceAtual, itemId }) => {
  const [showFields, setShowFields] = useState(false);
  const [price, setPrice] = useState("");
  const [priceText, setPriceText] = useState(lanceAtual);
  const [confirmation, setConfirmation] = useState(false);

  const handleClick = () => {
    setShowFields(true);
    console.log(itemId);
  };

  const handleChange = (e) => {
    setPrice(e.target.value);
  };

  const handleButton = () => {
    setConfirmation(true);
    priceText.push(price)
    console.log(priceText);
  }

  const handleRequest = () => {
      
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        coleta: coleta,
        entrega: entrega,
        produto: produto,
        quantidade: quantidade,
        lance: priceText,
      }),
    };
    fetch(`http://localhost:8001/offers/${itemId}`, requestOptions).then(
      (response) => response.json()
    );
    console.log(":p");
  };

  return (
    <div>
      {showFields ? (
        <div>
          Seu preço: <TextField onChange={handleChange} value={price} />{" "}
          <Button onClick={handleButton}>GO</Button>
        </div>
      ) : (
        <div>
          <Button onClick={handleClick}>Dar um Lance</Button>
        </div>
      )}
      {confirmation ? <div><Button onClick={handleRequest}>Confirmar</Button></div> : <div></div>}

    </div>
  );
};
