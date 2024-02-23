import React from "react";

function Post({ post }) {
  const { title, description, img, username } = post;

  return (
    <div className="bg-white p-4 rounded shadow mx-2">
      <div className="flex items-start">
       
        <div>
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-gray-800 mt-2">{description}</p>
          {img && (
          <img src={img} alt="Post" className="w-16 h-16 object-cover rounded my-2 mr-4" />
        )}
        </div>

      </div>
    </div>
  );
}

export default Post;
