export interface BlogProps {
    userId: number
    githubUser: GithubUser
    blogRepoName: string
    blogConfig: BlogConfig
  }
  
  export interface GithubUser {
    userName: string
    userId: number
    avatarUrl: string
  }
  
  export interface BlogConfig {
    templateIndex: number
    templateOption: TemplateOption
    blogName: string
    blogDescription: string
    blogHeadline: string
    socialMedia: SocialMedia
  }
  
  export interface TemplateOption {}
  
  export interface SocialMedia {
    github: string
    facebook: string
    linkedin: string
    instagram: string
    threads: string
    youtube: string
  }
  

export async function getRepo(): Promise<BlogProps | null> {
    const token = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

    try {
        const response = await fetch("https://blog-builder-theta.vercel.app/api/repo?token=" + token);
        if (response.status >= 400) return null;
        return await response.json();
    } catch (error) {
        return null;
    }
}