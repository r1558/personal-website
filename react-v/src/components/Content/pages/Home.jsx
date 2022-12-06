import "../Body.css"
import React from "react"
// import { FaPaperPlane, FaRocket } from "react-icons/fa";
// import { ReactComponent as Plane } from "../../icons/plane.svg";
const Home = () => {
  return (
    <div className="HomePage">
      <div className="plane">
        {/* <FaPaperPlane/> */}
        {/* <Plane width="300" height="300" fill="#222" /> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          fill="#222"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M23 0l-4.5 16.5-6.097-5.43 5.852-6.175-7.844 5.421-5.411-1.316 18-9zm-11 12.501v5.499l2.193-3.323-2.193-2.176zm-8.698 6.825l-1.439-.507 5.701-5.215 1.436.396-5.698 5.326zm3.262 4.287l-1.323-.565 4.439-4.503 1.32.455-4.436 4.613zm-4.083.387l-1.481-.507 8-7.89 1.437.397-7.956 8z" />
        </svg>
      </div>

      <span className="body_top_links"> Home</span>
      <div className="HomePage__para">
        <p>`Developer,Youtuber`</p>
        <p></p>
      </div>
      {/* </div> */}
    </div>
  )
}

export default Home
