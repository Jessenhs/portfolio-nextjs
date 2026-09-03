/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly GITHUB_USERNAME: string;
  readonly GITHUB_TOKEN?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
