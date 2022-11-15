const users = [
  {
    name: "Yasaman Rashidi",
    username: "yasiRs",
    avatar: './avtar1.png',
  },
  {
    name: "Erfan Alizade",
    username: "ErfanAl",
    avatar: './avatar2.png'
  },
  {
    name: "Niloofar Rezayi",
    username: "NilRe",
  },
];

const userElemet = (
  <div>
    {users.map(
      ({
        name,
        username,
        avatar = "avatar3.jfif",
      }) => {
        return (
          <div className="user">
            <div>
              <img src={avatar} />
            </div>
            <div>
              <p>{name}</p>
              <p>{username}</p>
            </div>
          </div>
        );
      }
    )}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(userElemet);
