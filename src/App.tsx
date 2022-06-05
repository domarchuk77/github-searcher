import { Navigate, Route, Routes } from "react-router";
import UsersList from "./components/UsersList";
import UserDetails from "./components/UserDetails";
import s from "./App.module.scss";
import { AppRoutes } from "./constants/Routes";

export default function App() {
  const {
    users: {
      baseRoutes: { main },
      details: { login },
    },
  } = AppRoutes;
  return (
    <div>
      <div className={s.container}>
        <h1>Github Searcher</h1>
        <Routes>
          <Route path={main}>
            <Route index element={<UsersList />} />
            <Route path={login} element={<UserDetails />} />
          </Route>
          <Route path="*" element={<Navigate to={main} />} />
        </Routes>
      </div>
    </div>
  );
}
