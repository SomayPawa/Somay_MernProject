import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';

export const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const { storeTokenInLS } = useAuth();

  const handleInput = (e) =>{
    let name = e.target.name;
    let value = e.target.value;

    setUser({
        ...user,// that is a spread operator aagar 4 main se sirf ek value change ki hogi to sirf vahi change hogi or koi bhi change nhi hogi 
        [name]:value,
    });
  };

  // Handle form on submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    // Client-side validation
    if (!user.username || !user.email || !user.phone || !user.password) {
      setMessage("All fields are required.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: "POST",
        headers: {
          'Content-Type': "application/json",
        },
        body: JSON.stringify(user)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      if (response.ok) {
        const res_data = await response.json().token;
        console.log(res_data);// isme message,token ,user_id vo bhi auth-controller.js se milege 

        storeTokenInLS(res_data);

        setUser({
          username: "",
          email: "",
          phone: "",
          password: "",
        });
        navigate('/login'); 
      }

    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <main>
        <div className="section-registration">
          <div className="container grid grid-two-cols">
            <div className="registration-image reg-img">
              <img
                src="/images/register.png"
                alt="a nurse with a cute look"
                width="400"
                height="500"
              />
            </div>
            <div className='registration-form'>
              <h1 className='main-heading mb-3'>Register form</h1>
              <br />
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={user.username}
                    onChange={handleInput}
                  />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={user.email}
                    onChange={handleInput}
                  />
                </div>
                <div>
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="number"
                    name="phone"
                    placeholder="Phone"
                    value={user.phone}
                    onChange={handleInput}
                  />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={user.password}
                    onChange={handleInput}
                  />
                </div>
                <br />
                <button type="submit" className="btn btn-submit" disabled={loading}>
                  {loading ? "Signing up..." : "Sign up"}
                </button>
                {message && <p>{message}</p>}
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};
