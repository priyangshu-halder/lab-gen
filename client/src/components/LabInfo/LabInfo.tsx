import { Input } from "../ui/input.tsx"
import { Label } from "../ui/label.tsx"
import { useData } from "../../dataContext/DataContext.tsx"

export function LabInfo() {
  const { data, setData } = useData();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <div className="space-y-6">
      <div className="grid w-full max-w-sm items-center gap-3">
        <Label htmlFor="lab-name">Laboratory Name:</Label>
        <Input
          type="text"
          id="lab-name"
          placeholder="Enter Laboratory Name"
          onChange={handleChange}
          value={data.name}
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-3">
        <Label htmlFor="address">Address</Label>
        <Input
          type="text"
          id="address"
          placeholder="Enter Address"
          onChange={handleChange}
          value={data.address}
        />
      </div>

      <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
        <div className="flex flex-col">
          <Label htmlFor="from-date">From Date</Label>
          <Input
            type="date"
            id="from-date"
            value={data.fromDate}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <Label htmlFor="to-date">To Date</Label>
          <Input
            type="date"
            id="to-date"
            value={data.toDate}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  )
}