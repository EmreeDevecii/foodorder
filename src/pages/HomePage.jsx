import React, { useEffect } from "react";
import menuler from "../yemekdata";
import MenuList from "../components/MenuList";
import { useDispatch, useSelector } from "react-redux";
import { getAllBurgers } from "../actions/burgerAction";
import Dondurucu from "../components/Dondurucu";
import { useNavigate } from "react-router-dom";
function HomePage() {
  const dispatch = useDispatch();

  const burgerState = useSelector((state) => state.getAllBurgersReducer);

  const { burgers, loading } = burgerState;
  console.log(burgers);
  const navigate = useNavigate();
  const falanState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = falanState;

  useEffect(() => {
    if (currentUser) {
      dispatch(getAllBurgers());
    } else {
      navigate("/login");
    }
  }, [currentUser]);

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
