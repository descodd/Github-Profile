import {
  FaFileAlt,
  FaMapMarkerAlt,
  FaPencilAlt,
  FaUsers,
  FaUserFriends,
  FaRegEnvelope,
} from "react-icons/fa";

function User({ user }) {
  return (
    <>
      <section className="user">
        <div className="user-container">
          <div className="flex-col">
            <div className="img">
              <img src={user.avatar_url} alt="profile-picture" />
            </div>
            <div className="user-details">
              <p className="name">{user.name}</p>
              <p className="login">{user.login}</p>
              <p className="bio">{user.bio}</p>
              <div className="email-location">
                <div className="email">
                  <p>
                    <FaRegEnvelope />
                  </p>
                  <p>
                    <span>{user.email}</span>
                  </p>
                </div>
                <div className="location">
                  <p>
                    <FaMapMarkerAlt />
                  </p>
                  <p>
                    <span> {user.location}</span>
                  </p>
                </div>
              </div>
            </div>
            <p className="portfolio btn">
              <a target="_blank" rel="noreferrer" href={user.html_url}>
                <span> Portfolio: </span>
                <span>visit</span>
              </a>
            </p>
          </div>
          <section className="social-container">
            <div className="social-card">
              <div>
                <p>Followers</p>
                <p>{user.followers}</p>
              </div>
              <p>
                <FaUsers />
              </p>
            </div>

            <div className="social-card">
              <div>
                <p>Public Repos</p>
                <p>{user.public_repos}</p>
              </div>
              <p>
                <FaFileAlt />
              </p>
            </div>
            <div className="social-card">
              <div>
                <p>Following</p>
                <p>{user.following}</p>
              </div>
              <p>
                <FaUserFriends />
              </p>
            </div>
            <div className="social-card">
              <div>
                <p>Public Gists</p>
                <p>{user.public_gists}</p>
              </div>
              <p>
                <FaPencilAlt />
              </p>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default User;
