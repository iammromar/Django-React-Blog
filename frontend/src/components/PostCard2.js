import { Link } from "react-router-dom";

function PostCard2(props) {
  return (
   <Link  to={`/article/${props.post.url}`}
   style={{ textDecoration: "none", color: "#fff" }}>
    <div className="post-card2">
      <div style={{ display: "flex" }}>
        <img id="post-card2-img" src={`http://localhost:8000${props.post.img}`} />
        <div className="p-3 homecard2">
          <h2 style={{ color: "#000" }}>
            {props.post.title.length > 40
              ? props.post.title.substring(0, 40) + "..."
              : props.post.title}
          </h2>

          <div className="mt-3" style={{position:'relative'}}>
            <img src="https://ik.imagekit.io/7wk7frhpr/vdfv.jpg?updatedAt=1696854402195" className="postcard-profile" />
            <div className="username-date">
              <span className="cart-user">Mr Omar</span>
           
              <p className="cart-date">
                {props.post.created_date}   
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
   </Link>
  );
}
export default PostCard2;
