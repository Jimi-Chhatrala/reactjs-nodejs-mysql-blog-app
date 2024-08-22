import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/10647646/pexels-photo-10647646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/800005/pexels-photo-800005.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <FaEdit />
            </Link>
            <FaTrash />
          </div>
        </div>
        <h1>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, itaque?
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit optio
          eaque dolorem doloremque, sapiente voluptate voluptatem dolor harum
          rem explicabo.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident,
          eos sequi at sit, tenetur, quas porro exercitationem vitae atque animi
          pariatur facere odio iste voluptas dolorum. Praesentium neque quae
          odio labore. Nihil facere ratione voluptatem!
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
          suscipit ab sunt. Sint ex consequatur mollitia alias eum animi,
          eveniet atque veniam labore sequi ducimus.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel totam,
          doloremque ut quisquam dolorum magni non tempora placeat rem ipsam
          quidem eius molestias fuga ratione iusto neque architecto voluptatibus
          nesciunt velit odio cum quos. At voluptatibus voluptates reiciendis
          facilis porro praesentium nobis quam ducimus explicabo aliquid earum
          sed, fugit temporibus!
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nobis
          nesciunt eveniet, dolor porro temporibus? Molestiae temporibus ratione
          ipsa illo. Architecto aliquam amet quibusdam. Aliquam voluptas dolor
          at, pariatur autem dolores consequuntur blanditiis corporis aspernatur
          qui perferendis quae, excepturi sed perspiciatis corrupti ex incidunt,
          ipsa accusamus eum rem a adipisci? Quae consequuntur voluptas
          temporibus consectetur officia aliquam maxime eum officiis quaerat
          suscipit tempore vel praesentium in nam, sunt architecto ipsa?
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
