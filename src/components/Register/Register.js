import React from "react";

const Register = ({ onRouteChange }) => {
  return (
    <div>
      <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-3 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f4" htmlFor="name">Name</label>
                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name" id="name" />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f4" htmlFor="email-address">Email</label>
                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address" />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f4" htmlFor="password">Password</label>
                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" />
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={() => onRouteChange('signIn')}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f4 dib"
                type="submit"
                value="register" />
            </div>
          </div>
        </main>
      </article>
    </div>
  )
};

export default Register;
