import React, { useState } from "react";
import "./add-post.scss";
import { Button, Heading, Input, Select } from "components";
import { useDispatch } from "react-redux";
import { addArticle } from "redux/actions/articleAction";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const [category, setCategory] = useState("");
  const [data, setData] = useState({
    title: "",
    content: "",
  });
  const [file, setFile] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({ ...data, [name]: value });
  };

  const handleChangeFile = (e) => {
    const file = e.target.files[0];

    if (file) {
      setFile(file);
    }
  };

  const handleAddArticle = (e) => {
    e.preventDefault();
    const newData = {
      title: data.title,
      content: data.content,
      category,
      images: file,
    };

    dispatch(addArticle(newData, navigate));
  };

  return (
    <div className="add-post">
      <Heading>Добавить пост</Heading>

      <form onSubmit={handleAddArticle}>
        <div className="add-post_file">
          <label htmlFor="file">
            <input
              type="file"
              multiple
              id="file"
              onChange={handleChangeFile}
              hidden
            />

            <div>
              <div></div>
              <span className="fs-14">Выберите файл(ы)</span>
            </div>
          </label>
        </div>
        <div className="add-post_img">
          {file && (
            <div>
              <img src={URL.createObjectURL(file)} alt="" />
              <span onClick={() => setFile()}>&times;</span>
            </div>
          )}
        </div>

        <Input
          name="title"
          value={data.title}
          placeholder="Введите название поста"
          required
          onChange={handleChange}
        />

        <Select required select={category} setSelect={setCategory} />

        <Input
          name="content"
          value={data.content}
          placeholder="Введите описание поста"
          textarea
          required
          onChange={handleChange}
        />

        <Button type="submit" fullWidth>
          Добавить
        </Button>
      </form>
    </div>
  );
};

export default AddPost;
