import { Button } from "@material-ui/core";
import { useState, useEffect } from "react";

export const Lance = ({ lance, itemId }) => {
  const [verLances, setVerLances] = useState(false);
  const [escolhido, setEscolhido] = useState();

  const handleClick = () => {
    setVerLances(true);
  };

  const handleClose = () => {
    console.log("fechar")
    setVerLances(false);
  };

  const aceitarLance = (_lance) => {
    console.log(_lance);
    setEscolhido(_lance);
  }
 
  return (
    <div>
      {verLances ? (
        <div>
          <div onClick={handleClose}>Fechar</div>
          {lance.map((UmLance) => (
            <div>
              <div> {UmLance} </div>
              <Button onClick={()=> {aceitarLance(UmLance)}}>Aceitar</Button>
              <Button>Recusar</Button>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <Button onClick={handleClick}>Ver Lances</Button>
        </div>
      )}
    </div>
  );
};
