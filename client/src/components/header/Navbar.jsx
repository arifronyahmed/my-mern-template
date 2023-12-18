import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <Link to="/">home</Link>
      <Link to="/test1">test1</Link>
      <Link to="/test2">test2</Link>
    </div>
  );
}
