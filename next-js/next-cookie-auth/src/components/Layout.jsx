import Link from 'next/link';

export default function Layout({ title, children }) {
  return (
    <div className="root">
      <nav className="navbar">
        <span>
          Welcome, <strong>Guest</strong>
        </span>
        <div>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/profile">
            <a>Profile</a>
          </Link>
          <a>Logout</a>
          <Link href="/login">
            <a>Login</a>
          </Link>
        </div>
      </nav>
      <h1>{title}</h1>
      {children}

      <style jsx>{`
        .root {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }
        .navbar {
          width: 100%;
          display: flex;
          justify-content: space-around;
        }
        a {
          margin-right: 0.5em;
        }
      `}</style>
    </div>
  );
}
