import React from "react";

const Menu = () => {
  const posts = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: "https://images.pexels.com/photos/10647646/pexels-photo-10647646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: "https://images.pexels.com/photos/8330846/pexels-photo-8330846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: "https://images.pexels.com/photos/20780436/pexels-photo-20780436/free-photo-of-table-near-window-in-kitchen.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: "https://images.pexels.com/photos/27806921/pexels-photo-27806921/free-photo-of-a-train-is-traveling-through-a-train-station.jpeg",
    },
  ];

  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={post.img} alt="" />
          <h1>{post.title}</h1>
          <button>Read More</button>
        </div>
      ))}
    </div>
  );
};

export default Menu;
