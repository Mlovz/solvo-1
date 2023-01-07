import { api } from "api";
import "./detail.scss";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Rectangle from "../../assets/Rectangle 8 (2).png";
import Eyes from "../../assets/Eyes.svg";
import Like from "../../assets/Like.svg";

import moment from "moment";
import "moment/locale/ru";

const Detail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState([]);

  useEffect(() => {
    if (id) {
      const getPost = async () => {
        setLoading(true);

        const res = await api.get(`/api/article/${id}`);

        if (res.data) {
          setLoading(false);
          setPost([res.data]);
        }
      };

      getPost();
    }
  }, [id]);

  return (
    <div className="detail">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        post.map((item) => (
          <div className="detail_card">
            <img src={Rectangle} alt="" />

            <div className="detail_card_info">
              <h2>{item.title}</h2>
              <span className="fs-12">
                {moment(item.createdAt).startOf("hour").fromNow()}
              </span>
              <p className="fs-16">{item.content}</p>
            </div>

            <div className="detail_card_footer">
              <div className="detail_card_footer_user">
                <img src={item.user.avatar} alt="" />
                <span>{item.user.username}</span>
              </div>

              <div className="detail_card_footer_stats">
                <div>
                  <img src={Like} alt="" />
                  <span>{item.user.saved.length}</span>
                </div>
                <div>
                  <img src={Eyes} alt="" />
                  <span>20</span>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Detail;
