export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
    {/* Sidebar */}
    <aside className="w-64 bg-white shadow-lg p-4">
      <h2 className="text-xl font-bold mb-6">Dashboard</h2>
      <ul className="space-y-4">
        <li className="text-blue-600 font-semibold">Home</li>
        <li className="text-gray-700">Analytics</li>
        <li className="text-gray-700">Settings</li>
      </ul>
    </aside>

    {/* Main content */}
    <main className="flex-1 p-6">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-2xl font-bold">Welcome, User</h1>
        {/* Conditionally render this greeting based on time or auth */}
        <p className="text-sm text-gray-500 mt-1">
          Have a productive day!
        </p>
      </header>

      {/* Cards Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Card 1 */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-lg font-semibold">Total Sales</h2>
          <p className="text-2xl font-bold text-green-600">$12,345</p>
          {/* Conditionally render increase/decrease badge */}
          <span className="text-sm text-gray-500">+15% this week</span>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-lg font-semibold">New Users</h2>
          <p className="text-2xl font-bold text-blue-600">89</p>
          {/* Example placeholder for condition */}
          <span className="text-sm text-gray-500">Active signups</span>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-lg font-semibold">Support Tickets</h2>
          <p className="text-2xl font-bold text-red-600">23</p>
          {/* Show alert if tickets are high */}
          <span className="text-sm text-red-500">High volume!</span>
        </div>
      </section>
    </main>
  </div>
  );
}
