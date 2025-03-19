import React from "react";
import { useQuery, gql } from "@apollo/client";
import { GetPostsData } from "../../graphql/types";

const GET_POSTS = gql`
  query GetPosts {
    posts {
      id
      title
      content
    }
  }
`;

const PostsList: React.FC = () => {
  const { loading, error, data } = useQuery<GetPostsData>(GET_POSTS);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {data?.posts.map((post) => (
        <li key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default PostsList;
