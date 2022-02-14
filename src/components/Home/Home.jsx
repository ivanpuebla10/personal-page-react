import './Home.css'
const url = "https://media-exp1.licdn.com/dms/image/C4D03AQE5Qy64sOXApw/profile-displayphoto-shrink_800_800/0/1600971625021?e=1650499200&v=beta&t=XkANpq0aMwXDriB4D6c4QavKhfRgtd91P0A31qUSWPo"

const Home = () => {
    return (
      <div className="home">
          <div className="first-box">
          <img src={url}></img>
          </div>
          <span><h1>ABOUT ME</h1></span>
      </div>
    )
  }
  
  export default Home