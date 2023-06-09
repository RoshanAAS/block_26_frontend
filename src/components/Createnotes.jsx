import axios from "axios";
import React, { useState } from "react";

const initState = {
  title: "",
  body: "",
  categorey: "",
};

const Createnotes = () => {
  const [state, setState] = useState(initState);

  const Createnotes = () => {
    const token = localStorage.getItem("token") || null;
    console.log(token);
    axios
      .post(`https://lilac-boa-hem.cyclic.app/notes/create`, state, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handalSubmit = (e) => {
    e.preventDefault();

    Createnotes();
  };

  const handalchnage = (e) => {
    const { name, value } = e.target;

    setState((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <>
      <h1>Create Notes</h1>
      <form onSubmit={handalSubmit}>
        <label>Title</label>
        <br />
        <input
          value={state.title}
          name="title"
          placeholder="Title"
          onChange={handalchnage}
        />
        <br />
        <label>Description</label>
        <br />
        <textarea
          value={state.body}
          name="body"
          placeholder="Description"
          onChange={handalchnage}
        />
        <br />
        <label>Category</label>
        <br />
        <input
          value={state.categorey}
          name="categorey"
          placeholder="Category"
          onChange={handalchnage}
        />
        <br />
        <button type="submit">Add Note</button>
      </form>
    </>
  );
};

export default Createnotes;
