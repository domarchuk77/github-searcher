export interface User {
  avatar_url: string;
  events_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  html_url: string;
  id: number;
  login: string;
  node_id: string;
  organizations_url: string;
  received_events_url: string;
  repos_url: string;
  score: number;
  site_admin: false;
  starred_url: string;
  subscriptions_url: string;
  type: string;
  url: string;
}

export interface UserDetails extends User {
  name: string;
  location: string;
  email: string;
  hireable: boolean;
  bio: string;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export interface Repo {
  name: string;
  svn_url: string;
  html_url: string;
  forks: number;
  stargazers_count: number;
}
