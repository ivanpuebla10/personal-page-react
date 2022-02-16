import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      
        <h1>About me</h1>
        <p>
          Hello! My name is Iván Puebla and I'm studying Full-Stack Web
          Development in The Bridge's Bootcamp.
        </p>
        <p>These are the technologies I have learned:</p>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>ES6</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>Sequelize</li>
          <li>SQL</li>
          <li>MongoDB</li>
          <li>React</li>
        </ul>
        <p>
          Click <a href="https://github.com/ivanpuebla10">here</a> to access my
          GitHub's profile, where you can find all my project's repositories.
        </p>
    </div>
  );
};

export default Home;
