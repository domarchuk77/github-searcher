import { Repo, User, UserDetails } from "../types/user";
import { api } from "./api";

const DEFAULT_SEARCH_TEXT = "a";

export const getUsers = async (searchText: string) => {
  const res = await api.get<{ items: User[] }>(
    `search/users?q=${searchText || DEFAULT_SEARCH_TEXT}`
  );
  return res.data.items;
};

export const getUser = async (login: string) => {
  const res = await api.get<UserDetails>(`users/${login}`);
  return res.data;
};

export const getUserRepos = async (login: string, searchText: string) => {
  const res = await api.get<{ items: Repo[] }>(
    `search/repositories?q=${searchText} in:name user:${login}`
  );
  return res.data.items;
};
