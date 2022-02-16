import "./Profile.css";
const url =
  "https://media-exp1.licdn.com/dms/image/C4D03AQE5Qy64sOXApw/profile-displayphoto-shrink_800_800/0/1600971625021?e=1650499200&v=beta&t=XkANpq0aMwXDriB4D6c4QavKhfRgtd91P0A31qUSWPo";

const Profile = () => {
  return (
    <div className="profile">
        <img src={url} className="profile-pic"></img>
        <h2>Personal Information</h2>
        <p>Email: ivanpuebla94@gmail.com</p>
        <p>Phone: 654930841</p>
        <p>Date of birth: 10/11/1994</p>
        <p>City: Valencia</p>
      </div>
  );
};

export default Profile;