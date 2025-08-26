import { Outlet } from "react-router";

const App = () => {
  return (
      <div>
          <div style={{padding: "0 40px"}}>
              <Outlet />
          </div>
    </div>
  );
};

export default App;
