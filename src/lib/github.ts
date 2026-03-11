const USERNAME = process.env.GITHUB_USERNAME!;
const TOKEN = process.env.GITHUB_TOKEN;

const headers: HeadersInit = TOKEN
  ? { Authorization: `Bearer ${TOKEN}`, "Content-Type": "application/json" }
  : { "Content-Type": "application/json" };

export interface GitHubProfile {
  login: string;
  name: string | null;
  avatar_url: string;
  bio: string | null;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
  company: string | null;
  location: string | null;
  blog: string | null;
  twitter_username: string | null;
}

export interface Repo {
  name: string;
  description: string | null;
  url: string;
  stargazerCount: number;
  forkCount: number;
  primaryLanguage: { name: string; color: string | null } | null;
}

export async function getProfile(): Promise<GitHubProfile | null> {
  try {
    const res = await fetch(`https://api.github.com/users/${USERNAME}`, {
      headers,
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export async function getPinnedRepos(): Promise<Repo[]> {
  if (TOKEN) {
    try {
      const query = `{
        user(login: "${USERNAME}") {
          pinnedItems(first: 6, types: REPOSITORY) {
            nodes {
              ... on Repository {
                name
                description
                url
                stargazerCount
                forkCount
                primaryLanguage { name color }
              }
            }
          }
        }
      }`;
      const res = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers,
        body: JSON.stringify({ query }),
        next: { revalidate: 3600 },
      });
      if (res.ok) {
        const json = await res.json();
        const nodes = json.data?.user?.pinnedItems?.nodes ?? [];
        if (nodes.length > 0) return nodes;
      }
    } catch {
      // fall through to REST fallback
    }
  }

  // Fallback: top repos by stars
  try {
    const res = await fetch(
      `https://api.github.com/users/${USERNAME}/repos?sort=stars&per_page=6&type=public`,
      { headers, next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const repos = await res.json();
    return repos.map((r: Record<string, unknown>) => ({
      name: r.name,
      description: r.description ?? null,
      url: r.html_url,
      stargazerCount: r.stargazers_count,
      forkCount: r.forks_count,
      primaryLanguage: r.language ? { name: r.language, color: null } : null,
    }));
  } catch {
    return [];
  }
}
