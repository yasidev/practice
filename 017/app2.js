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


function User({name,username,avatar = './avatar3.jfif'}){
    return(
        <div className="user">
            <div>
                <img src={avatar}/>
            </div>
            <div>
                <p>{name}</p>
                <p>{username}</p>
            </div>
        </div>
    )
}

function UserElement(){
    return(
        <div>
            {
            users.map(({name,username,avatar})=>{
                return (<User name={name} username={username} avatar={avatar} />)
            })
            }
        </div>
    
    )
}

const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(
<UserElement/>
)