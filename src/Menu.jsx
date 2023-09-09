import MenuItem from "./MenuItem";

const Menu = ({ data }) => {
  return (
    <div className="section-center">
      {data.map((item) => {
        return <MenuItem key={item.id} {...item} />;
      })}
    </div>
  );
};
export default Menu;
