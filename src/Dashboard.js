import { Offer } from "./Offer";
import useOffer from "./useOffer";
import { CreateOffer } from "./CreateOffer";
import { Lance } from "./Lance";
import { CriarLance } from "./CriarLance";

export const Dashboard = ({ user }) => {
  const { offers } = useOffer();

  return (
    <div >
      <div className="DashboardItens">
        {offers.map((offer) => (
          <div>
            <Offer
              coleta={offer.coleta}
              entrega={offer.entrega}
              produto={offer.produto}
              quantidade={offer.quantidade}
            />
            <div>
              {user === "transportaor" ? (
                <CriarLance lanceAtual={offer.lance} itemId={offer.id} />
              ) : (
                <Lance lance={offer.lance} itemId={offer.id} />
              )}
            </div>
          </div>
        ))}
      </div>
      <div>{user === "embarcador" ? <CreateOffer /> : <div></div>}</div>
    </div>
  );
};
