import Item from "./Item";
import styles from "@/components/footer/footer.module.css";
import { COMPANY, DEALACRES, RESOURCES, EXPLORECITIES } from "./Menu";
const ItemsContainer = () => {
  return (
    <div className={`${styles.itemcont} flex justify-around`}>
      <Item Links={COMPANY} title="COMPANY" />
      <Item Links={DEALACRES} title="DEALACRES" />
      <Item Links={RESOURCES} title="RESOURCES" />
      <Item Links={EXPLORECITIES} title="EXPLORECITIES" />
    </div>
  );
};

export default ItemsContainer;
