const Profile = ({ profile }) => {
  return (
    <div className="card">
      <div className="card-header">
        <img src={profile.header} alt={profile.headerAlt} />
      </div>
      <div className="card-content">
        <h3 className="card-title">{profile.title}</h3>
        <p className="card-excerpt">{profile.excerpt}</p>
        <div className="author">
          <div className="profile-img ">
            <img src={profile.profileImg} alt={profile.name} />
          </div>
          <div className="author-info">
            <strong>{profile.name}</strong>
            <small className="animate-bg-text">{profile.date}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
