import React, { useState } from "react";
import { posts } from "../utils";

const Header = () => {
  //создать state для хранения значения инпута
  //создать функцию которая сохраняет значения инпута
  //создать функцию которая очищает инпут

  return (
    <div className="posts">
      {posts.map((post) => (
        <div className="post">
          <div className="post_header">
            <img src={post.user.avatar} alt="" width={50} height={50} />
            <span>{post.user.username}</span>
          </div>
          <div className="post_img">
            <img src={post.img} alt="" />
            <div></div>
          </div>

          <div className="">
            {post.comments.map((comment) => (
              <span>{comment.content}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Header;
