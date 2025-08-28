import { Outlet } from "react-router";
import Header from "./components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAuthUser } from "./thunks/authThunk";
import { getToken } from "./utils/token";
import Loader from "./components/Loader";

const App = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if(getToken())
      dispatch(getAuthUser());
  }, [])
  
  if (auth.status === "loading") {
    return <Loader />;
  }
  
  return (
    <>
        <Header />
          <div style={{padding: "0 40px"}}>
              <Outlet />
          </div>
    </>
  );
};

export default App;
