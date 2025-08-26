import { createBrowserRouter } from "react-router";
import App from "../App";
import Articles from "../pages/Articles";
import CreateArticle from "../pages/CreateArticle";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Articles />
            },
            {
                path: "articles/create",
                element: <CreateArticle />
            }
        ]
    }
]);
export default routes;