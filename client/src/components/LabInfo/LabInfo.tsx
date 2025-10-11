import { Input } from "../ui/input.tsx"
import { Label } from "../ui/label.tsx"
export function LabInfo() {
  return (
    <div className="space-y-6">
      <h4 className="text-lg font-semibold">Laboratory Information</h4>
      <div className="grid w-full max-w-sm items-center gap-3">
        <Label htmlFor="lab-name">Laboratory Name:</Label>
        <Input type="text" id="lab-name" placeholder="Enter Laboratory Name" />
      </div>
      <div className="grid w-full max-w-sm items-center gap-3">
        <Label htmlFor="address">Address</Label>
        <Input type="text" id="address" placeholder="Enter Address" />
      </div>

      <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
        <div className="flex flex-col">
          <Label htmlFor="from-date">From Date</Label>
          <Input type="date" id="from-date" />
        </div>
        <div className="flex flex-col">
          <Label htmlFor="to-date">To Date</Label>
          <Input type="date" id="to-date" />
        </div>
      </div>
    </div>
  )
}