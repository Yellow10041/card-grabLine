import clsx from "clsx";
import styles from "./App.module.scss";

import CardGrab from "./components/CardGrab";
import Rank from "./components/Rank";

const App = () => {
  return (
    <div className={clsx(styles.App)}>
      <div className={clsx(styles.App_cardsGrab)}>
        <CardGrab />
        <CardGrab theme="light" />
      </div>
      <div className={clsx(styles.App_rank)}>
        <Rank />
        <Rank theme="dark" />
      </div>
    </div>
  );
};

export default App;
