import { useState, useCallback } from 'react';
import Router from 'next/router';

import { loginUser } from '../lib/auth';

export default function LoginForm() {
  const [email, setEmail] = useState('test@example.com');
  const [password, setPassword] = useState('example.com');
  const [error, setError] = useState();
  const [pending, setPending] = useState(false);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      setError();
      setPending(true);
      loginUser(email, password)
        .then(() => Router.push('/profile'))
        .catch(err => {
          setError((err.response && err.response.data) || err.message);
        })
        .finally(() => setPending(false));
    },
    [email, password]
  );

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" disabled={pending}>
          {pending ? 'Sending' : 'Send'}
        </button>
        {error && <div>{error}</div>}
      </div>
    </form>
  );
}
