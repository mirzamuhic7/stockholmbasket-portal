import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white dark:bg-gray-800 shadow-lg">
      <div className="p-4 text-xl font-bold text-gray-700 dark:text-gray-100">
        Stockholm Basket
      </div>
      <nav className="mt-4">
        <ul className="space-y-2">
          <li><Link to="/" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">Dashboard</Link></li>
          <li><Link to="/players" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">Players</Link></li>
          <li><Link to="/tournaments" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">Tournaments</Link></li>
          <li><Link to="/settings" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">Settings</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;