import { Button, TextField, Paper } from "@material-ui/core";
import { useState } from "react";

export const CreateOffer = () => {
  const [openFields, setOpenFields] = useState(false);
  const [endColeta, setEndColeta] = useState("");
  const [endEntrega, setEndEntrega] = useState("");
  const [tipoProduto, setTipoProduto] = useState("");
  const [quant, setQuant] = useState("");

  const handleClick = () => {
    setOpenFields(true);
  };

  const handleColeta = (e) => {
    setEndColeta(e.target.value);
  };

  const handleEntrega = (e) => {
    setEndEntrega(e.target.value);
  };

  const handleProduto = (e) => {
    setTipoProduto(e.target.value);
  };

  const handleQuantidade = (e) => {
    setQuant(e.target.value);
  };

  const handleRequest = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        coleta: endColeta,
        entrega: endEntrega,
        produto: tipoProduto,
        quantidade: quant,
        lance: [""],
      }),
    };
    fetch("http://localhost:8001/offers", requestOptions).then((response) =>
      response.json()
    );
    console.log(endColeta, endEntrega, tipoProduto, quant);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClick}>
        Criar Oferta
      </Button>
      {openFields ? (
        <div>
          <Paper elevation={6}>
            <div>
              Endereço de Coleta:
              <TextField onChange={handleColeta} value={endColeta} />
            </div>
            <div>
              Endereço de Entrega:
              <TextField onChange={handleEntrega} value={endEntrega} />
            </div>
            <div>
              Produto:
              <TextField onChange={handleProduto} value={tipoProduto} />
            </div>
            <div>
              Quantidade:
              <TextField onChange={handleQuantidade} value={quant} />
            </div>
            <Button onClick={handleRequest}>Enviar Oferta</Button>
          </Paper>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
