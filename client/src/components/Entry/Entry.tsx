import { useState } from "react"
import { BillingControls } from "../Billing/BillingControls"
import { BillingStats } from "../Billing/BillingStats"
import { BillingTable } from "../Billing/BillingTable"
import { createNewRow } from "../../utils/CreateRow"

interface Row {
    id: number;
    name: string;
    age: string;
    sex: string;
    referred: string;
    test: string;
    amount: string;
}

export function Entry() {
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

    const [total, setTotal] = useState({ patients: 0, amount: 0 })

    const handleTotalsChange = (patients: number, amount: number) => {
        setTotal({ patients, amount })
    }

    const handleRowsChange = (updatedRows: Row[]) => { setRows(updatedRows) }
    const addRow = () => { setRows([...rows, createNewRow()]) }
    const clearAll = () => { setRows([]) }

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
            />
            <BillingStats totalPatients={total.patients} totalAmount={total.amount} />
        </div>
    )
}

