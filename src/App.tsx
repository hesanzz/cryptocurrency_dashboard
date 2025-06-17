import { BottomSection } from "./components/BottomSection/BottomSection"
import { CryptoSection } from "./components/CryptoSection/CryptoSection"
import Header from "./components/Header/Header"
import Sidebar from "./components/SideBar/Sidebar"
import { TopSection } from "./components/TopSection/TopSection"

function App() {

  return (
    <div className="bg-dark-primary flex">
      {/* This component contains the navigation links and logo for the dashboard */}
      <Sidebar />
      <div className="flex-1 flex flex-col">
        {/* This component contains the header of the dashboard */}
        {/* It includes the title, search input, notification bell, and user profile image */}
        <Header />
        {/* Main content area */}
        {/* This is where the main content of the dashboard will be rendered */}
        {/* It includes the TopSection, CryptoSection, and BottomSection components */}
        {/* The main content is scrollable and has padding for better spacing */}
        {/* The main content is responsive and adjusts to different screen sizes */}
        <main className="flex-1 p-6 overflow-auto">
          <TopSection />
          <CryptoSection />
          <BottomSection />
        </main>
      </div>
    </div>

  )
}

export default App
