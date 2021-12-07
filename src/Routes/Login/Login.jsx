import './Style.css'

function Login() {

  const handleChange = e => {
    const value = e.target.value;
    const type = e.target.id;
    console.log(value, type);
  };

  return (
    <>
    <form className="form" >
      <div className="form__field">
        <label htmlFor="userName">Username</label>
        <input id="userName" onChange={handleChange} type="text"/>
      </div>
      <div className="form__field">
        <label htmlFor="passWord">Password</label>
        <input id="passWord" onChange={handleChange} type="text"/>
      </div>
      <button type="submit">Submit</button>
    </form>
    </>
  );
}

export default Login;

/*Create a mock login form at “/login”. 
It does not need to work but is should 
have fields for username and password as
 well as a submit button.
*/