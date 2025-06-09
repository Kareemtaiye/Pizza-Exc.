import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItemm from "./MenuItem";

function Menu() {
  const menu = useLoaderData();
  return (
    <ul>
      {menu.map(pizza => (
        <MenuItemm pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export async function Loader() {
  const menu = await getMenu();

  return menu;
}

export default Menu;
