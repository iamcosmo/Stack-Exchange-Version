
import './App.css'

function App() {

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Navbar */}
      <header className="bg-white shadow p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-xl font-bold text-primary">Stack Overflow</div>
          <input
            type="text"
            placeholder="Search Your Answers Here..."
            className="border rounded px-4 py-2 w-1/2"
          />
          <div className="space-x-4">
            <button className="text-primary">Products</button>
            <button className="rounded-full border px-4 py-2">Profile</button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto mt-6 grid grid-cols-12 gap-4">
        {/* Sidebar */}
        <aside className="col-span-3 bg-white p-4 shadow rounded">
          <ul className="space-y-4">
            <li className="font-semibold">Home</li>
            <li>Public</li>
            <li>Tags</li>
            <li>Users</li>
            <li>Collectives</li>
          </ul>
        </aside>

        {/* Main Section */}
        <main className="col-span-9 space-y-6">
          {/* Top Questions */}
          <section className="bg-white p-4 shadow rounded">
            <h2 className="text-lg font-bold mb-4">Top Questions</h2>
            <div className="space-y-4">
              <div className="p-4 border rounded flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">
                    I am not able to use view binding in activity in Kotlin
                  </h3>
                  <div className="text-sm text-gray-500 space-x-2">
                    <span>Android</span>
                    <span>Kotlin</span>
                  </div>
                </div>
                <div className="text-sm text-gray-500">7 votes</div>
              </div>
              {/* Repeat question cards */}
            </div>
          </section>

          {/* The Overflow Blog */}
          <section className="bg-white p-4 shadow rounded">
            <h2 className="text-lg font-bold mb-4">The Overflow Blog</h2>
            <ul className="space-y-2">
              <li>The unexpected benefits of mentoring others</li>
              <li>Podcast 354: Building for AR with Niantic Labs</li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App
