import { NavLink } from "react-router-dom";

export const Error = () => {
  return (
    <>
      <section id="error-page">
        <div className=" content">
          <h2 className="header">404</h2>
          <h4>Sorry! Page not found</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tempora perspiciatis quibusdam sint natus dolorem ipsam accusantium odit eaque nisi facere aliquam doloremque placeat, tempore beatae quia modi corrupti excepturi!
            Dignissimos harum reiciendis quibusdam, distinctio, repellat suscipit sequi maiores hic impedit alias eos nulla eius, aperiam adipisci necessitatibus debitis iste consequuntur quam libero ut. Veniam excepturi ipsa alias laborum quam!
          </p>
          <div className="btns">
            <NavLink to="/">return home</NavLink>
            <NavLink to="/contact">report problem</NavLink>
          </div>
        </div>
      </section>
    </>
  );
};