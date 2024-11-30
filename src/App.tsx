// import LeftNavBar from "./components/LeftNav";
import Header from "./components/Header";
import { CourseOverview } from "./pages/CourseOverview";

function App() {
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <Header />

      <div className="flex flex-1 overflow-hidden">
        {/* Left Nav */}
        {/* <LeftNavBar /> */}

        {/* Main Content */}
        <main className="flex-1 p-4 overflow-auto">
          <h1>123</h1>
        </main>
      </div>
    </div>
  );
}

export default App;
