import LeftNavBar from "./components/LeftNav";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <Header />

      <div className="flex flex-1 overflow-hidden">
        {/* Left Nav */}
        <LeftNavBar />

        {/* Main Content */}
        <main className="flex-1 p-4 overflow-auto">
          <h2>Main Content</h2>
          <p>
            This is the main content area. It will consume all remaining space.
          </p>
        </main>
      </div>
    </div>
  );
}

export default App;
