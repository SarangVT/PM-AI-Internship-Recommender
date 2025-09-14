export default function Header() {
  return (
    <header className="flex justify-between items-center p-6 bg-white shadow-md">
      <h1 className="text-2xl font-bold text-blue-600">Unstop</h1>
      <nav>
        <ul className="flex space-x-6 text-gray-600">
          <li><button className="hover:text-blue-600">Internships</button></li>
          <li><button className="hover:text-blue-600">Jobs</button></li>
          <li><button className="hover:text-blue-600">Competitions</button></li>
          <li><button className="hover:text-blue-600">Mentorships</button></li>
          <li><button className="hover:text-blue-600">Practice</button></li>
        </ul>
      </nav>
      <button className="bg-blue-600 text-white px-4 py-1 rounded">Login</button>
    </header>
  );
}
