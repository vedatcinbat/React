export interface Post {
    id: string;
    title: string;
    content: string;
}

export interface GetPostsData {
    posts: Post[];
}