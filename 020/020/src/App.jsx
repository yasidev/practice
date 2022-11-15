import { useState } from "react";

function App() {
  const [formValues, setFormValues] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [user,setUser] =useState(null)

  function handleChange(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }

  function handleShowForm() {
    setShowForm(true);
  }
  function handleLogIn(e){
    e.preventDefault()
    setUser({username:formValues.username})
    setFormValues({})
  }

  
  return (
    <div>
      {
        user? (
          <div>
            <h3>Welcome {user.username}</h3>
            <button onClick={()=>{setUser(null)}}>Exit</button>
          </div>
        ):(
          showForm ? (
            <form>
              <input
                type="text"
                name="username"
                value={formValues.username}
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                value={formValues.password}
                onChange={handleChange}
              />
              <button type="submit" onClick={handleLogIn} disabled={!formValues.username || !formValues.password}>LogIn</button>
            </form>
          ) : (
            <button onClick={handleShowForm}>SignIn</button>
          )
        )
      }
    </div>
  );
}

export default App;
