import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "./Post";
import Navbar from "../HomeScreen/Components/Navbar";
import { useDispatch } from "react-redux";
import { setTab } from "../../redux/features/currentTab";
import { useNavigate } from "react-router-dom";

function CommunityScreen() {
  const [posts, setPosts] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setTab("community"));
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://localhost:8000/posts/");
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <div className="px-10 flex justify-between items-center">
        <h1 className="text-3xl font-semibold mb-4">Community</h1>
        <button
          className="bg-primary hover:bg-secondary text-white font-semibold px-4 py-2 rounded shadow"
          onClick={() => navigate("/posts/add")}
        >
          Add Post
        </button>
      </div>
      <div className="space-y-4">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  );
}

export default CommunityScreen;
