import ReactHtmlParser from "react-html-parser";
import { Link } from "react-router-dom";
function PostCard(props) {
      const getDescription = () => {
          if (props.post && props.post.description) {
              const truncatedDescription =
                  props.post.description.length > 200
                      ? `${props.post.description.slice(0, 200)}...`
                      : props.post.description;
              return {__html: truncatedDescription};
          }
          return {__html: ""};
      };
  return (
    <Link
      to={`/article/${props.post.url}`}
      style={{ textDecoration: "none", color: "#fff" }}
    >
      <div className="cart" key={props.post.id}>
        <img alt={props.post.title} src={`http://localhost:8000${props.post.img}`} className="cart-img" />
        <div className="cartbg"></div>
        <div className="cart-text">
            <h2 style={{ color: "#fff", fontSize: "28px" }}>
              {props.post.title.length > 50
                ? `${props.post.title.slice(0, 50)}...`
                : props.post.title}
            </h2>

            {/* <div className="post-card">
              <div className="description" style={{ color: "black", fontSize: "16px" }}>
                <div dangerouslySetInnerHTML={getDescription()} />
              </div>
            </div> */}

          <div style={{position:'relative'}}>
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
    </Link>
  );
}
export default PostCard;
