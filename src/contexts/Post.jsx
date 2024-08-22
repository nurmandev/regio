import React, { createContext, useState, useContext, useEffect } from "react";
import postsService from "../services/post";

const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await postsService.getPostsList();
      setPosts(response.results);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const createPost = async (data) => {
    setLoading(true);
    setError(null);
    try {
      const response = await postsService.createPost(data);
      setPosts((prevPosts) => [...prevPosts, response.data]);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const createFavoritePost = async (data) => {
    setLoading(true);
    setError(null);
    try {
      await postsService.createFavoritePost(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const deleteFavoritePost = async (id) => {
    setLoading(true);
    setError(null);
    try {
      await postsService.deleteFavoritePost(id);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchPost = async (id) => {
    setLoading(true);
    setError(null);
    try {
      const response = await postsService.getPost(id);
      setPost(response);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const updatePost = async (id, data) => {
    setLoading(true);
    setError(null);
    try {
      const response = await postsService.updatePost(id, data);
      setPosts((prevPosts) =>
        prevPosts.map((post) => (post.id === id ? response.data : post))
      );
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const partialUpdatePost = async (id, data) => {
    setLoading(true);
    setError(null);
    try {
      const response = await postsService.partialUpdatePost(id, data);
      setPosts((prevPosts) =>
        prevPosts.map((post) => (post.id === id ? response.data : post))
      );
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const deletePost = async (id) => {
    setLoading(true);
    setError(null);
    try {
      await postsService.deletePost(id);
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PostsContext.Provider
      value={{
        posts,
        post,
        loading,
        error,
        fetchPosts,
        createPost,
        createFavoritePost,
        deleteFavoritePost,
        fetchPost,
        updatePost,
        partialUpdatePost,
        deletePost,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export const usePosts = () => {
  const context = useContext(PostsContext);
  if (!context) {
    throw new Error("usePosts must be used within a PostsProvider");
  }
  return context;
};
