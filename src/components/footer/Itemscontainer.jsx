import Item from "./Item";
import styles from '@/components/footer/footer.module.css'
import { Heading1,Heading2,Heading3,Heading4 } from "./Menu";
const ItemsContainer = () => {
  return (
    <div className={styles.itemcont}>
      <Item Links={Heading1} title="Heading1" />
      <Item Links={Heading2} title="Heading2" />
      <Item Links={Heading3} title="Heading3" />
      <Item Links={Heading4} title="Heading4" />
    </div>
  );
};

export default ItemsContainer;