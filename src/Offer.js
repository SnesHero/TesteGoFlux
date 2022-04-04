import { useState, useEffect } from "react";
import { Paper } from "@material-ui/core";

export const Offer = ({ coleta, entrega, produto, quantidade}) => {
  return (
    <div>
      <Paper  elevation={6} className="OfferCard">
        <div>Oferta!</div>
        <div>Endereço de coleta: {coleta}</div>
        <div>Endereço de entrega: {entrega}</div>
        <div>Produto: {produto}</div>
        <div>Quantidade: {quantidade}</div>
        
      </Paper>
      
    </div>
  );
};
