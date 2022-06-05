import s from "./UserDetails.module.scss";
import moment from "moment";

import { useQuery } from "react-query";
import { getUser, getUserRepos } from "../../api/users";
import { useParams } from "react-router";
import { DATE_FORMAT } from "../../constants/date";
import { useSearchParams } from "react-router-dom";

export default function UserDetails() {
  const [searchParams, setSearchParams] = useSearchParams();
  const repo = searchParams.get("repo") || "";
  const { login = "" } = useParams();

  const { data: user } = useQuery([`User ${login}`], () => getUser(login));
  const { data: repos } = useQuery([`${login} repos'`, repo], () =>
    getUserRepos(login, repo)
  );

  const joinDate = moment(user?.created_at).format(DATE_FORMAT);
  return (
    <>
      <div className={s.wrapper}>
        <img className={s.avatar} src={user?.avatar_url} alt="User avatar" />
        <div className={s.info}>
          <div>Name: {user?.name}</div>
          <div>Email: {user?.email}</div>
          <div>Login: {user?.login}</div>
          <div>Join date: {joinDate}</div>
          <div>{user?.followers} Followers</div>
          <div>Following {user?.following}</div>
        </div>
      </div>
      <div className={s.bio}>{user?.bio}</div>
      <input onChange={(e) => setSearchParams({ repo: e.target.value })} />
      {repos?.map(({ name, forks, stargazers_count, html_url }) => (
        <a
          href={html_url}
          target="_blank"
          rel="noreferrer"
          key={html_url}
          className={s.link}
        >
          <div>{name}</div>
          <div>
            <div>{forks} Forks</div>
            <div>{stargazers_count} Stars</div>
          </div>
        </a>
      ))}
    </>
  );
}
