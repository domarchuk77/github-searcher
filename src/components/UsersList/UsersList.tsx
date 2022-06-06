import s from "./UsersList.module.scss";

import { useQuery } from "react-query";
import { getUsers } from "../../api/users";
import { Link, useSearchParams } from "react-router-dom";
import { SearchParams } from "../../constants/SearchParams";

export default function UsersList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { USER } = SearchParams;
  const user = searchParams.get(USER) || "";

  const { data } = useQuery(["Users", user], () => getUsers(user));

  return (
    <div>
      <input onChange={(e) => setSearchParams({ [USER]: e.target.value })} />
      {data?.map(({ avatar_url, id, login }) => (
        <Link to={login} key={id} className={s.link}>
          <img
            src={avatar_url}
            key={avatar_url}
            width="50px"
            alt="User avatar"
          />
          <div className={s.login}>{login}</div>
        </Link>
      ))}
    </div>
  );
}
