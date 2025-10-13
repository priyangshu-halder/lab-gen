import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { Header } from './components/Header/Header.tsx'
import { LabInfo } from './components/LabInfo/LabInfo.tsx'
import { Entry } from './components/Entry/Entry.tsx'
import { DataProvider } from './dataContext/DataContext.tsx'
import PDFGenerator from './utils/invoice.tsx'
import type { Row, LabInfo as LabInfoType } from './dataContext/types'

function PDFGeneratorPage() {
  const location = useLocation()
  const state = location.state as { rows: Row[], data: LabInfoType } | null

  if (!state) {
    return <div className="p-6">No data to generate PDF</div>
  }

  return <PDFGenerator rows={state.rows} lab={state.data} />
}

function App() {
  return (
    <Router>
      <Header />
      <DataProvider>
        <Routes>
          <Route
            path="/"
            element={
              <div className="p-6 space-y-6">
                <div className="max-w-2xl">
                  <h2 className="text-xl font-semibold mb-4">Laboratory Information</h2>
                  <LabInfo />
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-4">Billing Entry</h2>
                  <Entry />
                </div>
              </div>
            }
          />
          <Route path="/pdfgenerator" element={<PDFGeneratorPage />} />
        </Routes>
      </DataProvider>
    </Router>
  )
}

export default App