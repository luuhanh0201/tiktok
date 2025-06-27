import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes";
import { DefaultLayout, HeaderOnly } from "./components/Layout";
import { Fragment } from "react";

function App() {
    return (
        <div className="">
            <Routes>
                {publicRoutes.map((route, index) => {
                    let Layout = DefaultLayout;
                    if (route.layout) {
                        Layout = route.layout;
                    } else if (route.layout === null) {
                        Layout = Fragment;
                    } else {
                        Layout = DefaultLayout;
                    }
                    const Page = route.component;
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </div>
    );
}

export default App;
