import { Button } from "../ui/button";
import { Plus, FileDown, Trash2, BarChart2 } from "lucide-react"
interface Properties {
    onAdd: ()=> void
    onClear:()=>void
}
export function BillingControls({ onAdd, onClear }: Properties) {
  return (
    <div className="flex flex-wrap gap-3 mt-4">
      <Button onClick={onAdd}>
        <Plus className="mr-2 h-4 w-4" /> Add Patient
      </Button>
      <Button variant="secondary">
        <FileDown className="mr-2 h-4 w-4" /> Download PDF
      </Button>
      <Button variant="outline" onClick={onClear}>
        <Trash2 className="mr-2 h-4 w-4" /> Clear All
      </Button>
      <Button variant="destructive">
        <BarChart2 className="mr-2 h-4 w-4" /> Export Data
      </Button>
    </div>
  )
}