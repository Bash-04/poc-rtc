import { GetItemsWS } from "../lib/ItemLib";

const ItemSelecterWS: React.FC = () => {
  
  const res = GetItemsWS();

  console.log(res)

  return (
    <div className="itemSelecter">
      <h2>Available Items</h2>
      <div style={{ display: "flex", width: "fit-content", justifyContent: "space-around" }}>
      </div>
    </div>
  );
};

export default ItemSelecterWS;
