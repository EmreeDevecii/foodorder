import React, { useEffect } from "react";
import menuler from "../yemekdata";
import MenuList from "../components/MenuList";
import { useDispatch, useSelector } from "react-redux";
import { getAllBurgers } from "../actions/burgerAction";
import Dondurucu from "../components/Dondurucu";
function HomePage() {
  const dispatch = useDispatch();

  const burgerState = useSelector((state) => state.getAllBurgersReducer);

  const { burgers, loading } = burgerState;
  console.log(burgers);

  useEffect(() => {
    dispatch(getAllBurgers());
  }, []);

  return (
    <div>
      <div className="row">
        {loading ? (
          <Dondurucu />
        ) : (
          burgers.map((menu) => (
            <div className="col-md-4">
              <MenuList menu={menu} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default HomePage;
