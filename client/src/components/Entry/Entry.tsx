import { useState } from "react"
import { useNavigate } from "react-router"
import { BillingControls } from "../Billing/BillingControls"
import { BillingStats } from "../Billing/BillingStats"
import { BillingTable } from "../Billing/BillingTable"
import { createNewRow } from "../../utils/CreateRow"
import { useData } from "../../dataContext/DataContext"
import type { Row } from "../../dataContext/types"

export function Entry() {
    const navigate = useNavigate();
    const [rows, setRows] = useState<Row[]>([
        {
            id: 1,
            name: "",
            age: "",
            sex: "",
            referred: "",
            test: "",
            amount: "",
        },
    ]);

    const { data } = useData();
    const [total, setTotal] = useState({ patients: 0, amount: 0 })

    const handleTotalsChange = (patients: number, amount: number) => {
        setTotal({ patients, amount })
    }

    const handleRowsChange = (updatedRows: Row[]) => { setRows(updatedRows) }
    const addRow = () => { setRows([...rows, createNewRow()]) }
    const clearAll = () => { setRows([]) }

    const generatePDF = () => { navigate("/pdfgenerator", { state: { rows, data } }); }

    return (
        <div className="p-6 space-y-4">
            <BillingTable
                rows={rows}
                onRowsChange={handleRowsChange}
                onTotalsChange={handleTotalsChange}
            />
            <BillingControls
                onAdd={addRow}
                onClear={clearAll}
                generatePDF={generatePDF}
            />
            <BillingStats totalPatients={total.patients} totalAmount={total.amount} />
        </div>
    )
}
