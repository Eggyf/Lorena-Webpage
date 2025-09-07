import React, { useState, ChangeEvent, FormEvent } from 'react';
import '../../styles/signinPage.css'; // Importamos el archivo CSS externo

const SignInPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const validate = (): { email?: string; password?: string } => {
    const err: { email?: string; password?: string } = {};
    if (!email) {
      err.email = 'El correo es requerido';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      err.email = 'Formato de correo inválido';
    }
    if (!password) {
      err.password = 'La contraseña es requerida';
    }
    return err;
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      alert('Formulario enviado');
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-card">
        <h2 className="signin-title">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Correo electrónico</label>
            <input
              type="email"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              id="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="ejemplo@mail.com"
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input
              type="password"
              className={`form-control ${errors.password ? 'is-invalid' : ''}`}
              id="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Tu contraseña"
            />
            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
          </div>

          <button type="submit" className="btn btn-primary w-100">Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
