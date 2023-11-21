import { Link } from "react-router-dom";

function Page404() {
  return (
    <main className="main404">
      <div className="maindiv">
        <h1 className="title404">404</h1>
        <h2 className="text404">SƏHİFƏ TAPILMADI!</h2>
        <br />
        <Link to="/" className="btn2">Ana Səhifə <i class="fas fa-long-arrow-alt-right"></i></Link>
      </div>
    </main>
  );
}
export default Page404;
