
import { useState } from "react"
import { Card, CardContent } from "../ui/card"
import { Table, TableBody, TableHeader, TableRow, TableHead as TH } from "../ui/table"
import { BillingRow } from "./BillingRow"

export function BillingTable({ onTotalsChange }: { onTotalsChange?: (patients: number, amount: number) => void }) {
  const [rows, setRows] = useState([
    { id: 1, name: "", age: "", sex: "", referred: "", test: "", amount: "" },
  ])

  const handleChange = (id: number, field: string, value: string) => {
    const updated = rows.map((r) => (r.id === id ? { ...r, [field]: value } : r))
    setRows(updated)
    if (onTotalsChange) {
      const totalPatients = updated.length
      const totalAmount = updated.reduce((sum, r) => sum + (parseFloat(r.amount) || 0), 0)
      onTotalsChange(totalPatients, totalAmount)
    }
  }

  const addRow = () => {
    setRows([
      ...rows,
      { id: Date.now(), name: "", age: "", sex: "", referred: "", test: "", amount: "" },
    ])
  }

  const removeRow = (id: number) => setRows(rows.filter((r) => r.id !== id))
  const clearAll = () => setRows([])

  return (
    <Card>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TH>SL.NO</TH>
              <TH>Patient Name</TH>
              <TH>Age</TH>
              <TH>Sex</TH>
              <TH>Referred By</TH>
              <TH>Test</TH>
              <TH>Amount</TH>
              <TH>Action</TH>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row, index) => (
              <BillingRow
                key={row.id}
                row={row}
                index={index}
                onChange={handleChange}
                onRemove={removeRow}
              />
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}