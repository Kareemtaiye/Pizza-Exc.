import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Loader from "../ui/Loader";
import Header from "./header";

function AppLayout() {
  const pageNavigation = useNavigation();
  const isLoading = pageNavigation.state === "loading";
  return (
    <div className="">
      {isLoading && <Loader />}
      <Header />
      <main>
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
