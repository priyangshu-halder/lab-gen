import { Card, CardContent } from "../ui/card"
import { Table, TableBody, TableHeader, TableRow, TableHead as TH } from "../ui/table"
import { BillingRow } from "./BillingRow"

interface Row {
  id: number,
  name: string,
  age: string,
  sex: string,
  referred: string,
  test: string,
  amount:string
}

interface BillingTableProperties {
  rows: Row[];
  onRowsChange: (rows: Row[]) => void;
  onTotalsChange?: (patients: number, amount: number) => void
}

export function BillingTable({rows, onRowsChange, onTotalsChange}:BillingTableProperties) {
  const handleChange = (id: number, field: string, value: string) => {
    const updated = rows.map((r) => (r.id === id ? { ...r, [field]: value } : r))
    onRowsChange(updated)
    if (onTotalsChange) {
      const totalPatients = updated.length
      const totalAmount = updated.reduce((sum, r) => sum + (parseFloat(r.amount) || 0), 0)
      onTotalsChange(totalPatients, totalAmount)
    }
  }

  const removeRow=(id:number)=>{
    const updated= rows.filter((r)=>r.id!==id)
    onRowsChange(updated)
  }

  return (
    <Card className="w-full overflow-x-auto">
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