import './App.css'
import { Header } from './components/Header/Header.tsx'
import { LabInfo } from './components/LabInfo/LabInfo.tsx'
import { Entry } from './components/Entry/Entry.tsx'
import { DataProvider } from './dataContext/DataContext.tsx'

function App() {
  return (
    <>
      <Header />
      <DataProvider>
        <Routers>
          <LabInfo />
          <Entry />
        </Routers>

      </DataProvider>
    </>
  )
}

export default App
