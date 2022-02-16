import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
    <img src="data:image/png;base64,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"></img>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/240px-CSS3_logo.svg.png"></img>
    <img src="data:image/png;base64,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"></img>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png"></img>
    <img src="data:image/jpeg;base64,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"></img>
    <img src="https://img2.freepng.es/20190111/thz/kisspng-mongodb-logo-database-nosql-postgresql-how-to-create-an-outstanding-tech-stack-clickup-bl-5c391bdf9cff48.4731136215472465596431.jpg"></img>
    <img src="https://e7.pngegg.com/pngimages/824/227/png-clipart-mysql-logo-database-web-development-blue-text-thumbnail.png"></img>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvoOopWY1x4tYRirSoIos2ckNH4l0qosX6-8XWZbKhzf-Vv4dpL1fR_YN9CYZ-pfqoKZM&usqp=CAU"></img>
  </div>
  );
};

export default Footer;