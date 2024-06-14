import React from 'react';
import '../../lib/globals.css';

const Login = () => {
  return (
    <main>
      <body>
      <section className='section-login'>
          <div className='div-bienvenida'>
            <h1>Bienvenido</h1>
          </div>
          <div className='div-login'>
            <input className='input-login' type="text" placeholder='Nombre de usuario'>
            </input>
            <input className='input-login' type="text" placeholder='Contraseña'>
            </input>
          </div>
        </section>
      </body>
      <footer>
      </footer>
    </main>
  );
}

export default Login;