import { useState } from "react";
import Title from "./Title";
import data from "./data";
import Menu from "./Menu";
import Categories from "./Categories";

// const tempcategory = data.map((item) => item.category);
// const unique = new Set(tempcategory);
// const allCategory = ["all", ...unique];
// console.log(allCategory);

const allCategory = ["all", ...new Set(data.map((item) => item.category))];
const App = () => {
  const [menuItems, setMenuItems] = useState(data);
  const [category, setCategory] = useState(allCategory);
  const filterItems = (category) => {
    const newItems = data.filter((item) => item.category === category);
    if (category === "all") {
      return setMenuItems(data);
    }
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className="menu">
        <Title text="our menu" />
        <Categories data={category} filterItems={filterItems} />
        <Menu data={menuItems} />
      </section>
    </main>
  );
};
export default App;
