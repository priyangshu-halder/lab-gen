import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../ui/select";
import { TableCell, TableRow } from "../ui/table.tsx";

interface BillingRowProperties {
    row: any,
    index: number,
    onChange: (id: number, field: string, value: string) => void,
    onRemove: (id: number) => void
}

export function BillingRow({ row, index, onChange, onRemove }: BillingRowProperties) {
    return (
        <TableRow>
            <TableCell>{index + 1}</TableCell>
            <TableCell>
                <Input
                    placeholder="Patient Name"
                    value={row.name}
                    onChange={(e) => onChange(row.id, "name", e.target.value)}
                />
            </TableCell>
            <TableCell>
                <Input
                    type="number"
                    placeholder="Age"
                    value={row.age}
                    min={0}
                    max={150}
                    onChange={(e) => onChange(row.id, "age", e.target.value)}
                />
            </TableCell>
            <TableCell>
                <Select
                    value={row.sex}
                    onValueChange={(v) => onChange(row.id, "sex", v)}
                >
                    <SelectTrigger className="w-[80px]">
                        <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="M">M</SelectItem>
                        <SelectItem value="F">F</SelectItem>
                    </SelectContent>
                </Select>
            </TableCell>
            <TableCell>
                <Input
                    placeholder="Doctor/Hospital"
                    value={row.referred}
                    onChange={(e) => onChange(row.id, "referred", e.target.value)}
                />
            </TableCell>
            <TableCell>
                <Input
                    placeholder="Test Names"
                    value={row.test}
                    onChange={(e) => onChange(row.id, "test", e.target.value)}
                />
            </TableCell>
            <TableCell>
                <Input
                    type="number"
                    placeholder="0.00"
                    step="0.01"
                    value={row.amount}
                    onChange={(e) => onChange(row.id, "amount", e.target.value)}
                />
            </TableCell>
            <TableCell>
                <Button variant="destructive" size="icon" onClick={() => onRemove(row.id)}>
                    X
                </Button>
            </TableCell>
        </TableRow>

    )
}