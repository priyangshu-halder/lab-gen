import { Card, CardContent } from "../ui/card";
interface Properties {
    totalPatients: number
    totalAmount: number
}

export function BillingStats({ totalPatients, totalAmount }: Properties) {
  return (
    <div className="grid grid-cols-2 gap-4 max-w-sm mt-6">
      <Card className="text-center">
        <CardContent className="py-4">
          <div className="text-2xl font-bold">{totalPatients}</div>
          <div className="text-sm text-muted-foreground">Total Patients</div>
        </CardContent>
      </Card>

      <Card className="text-center">
        <CardContent className="py-4">
          <div className="text-2xl font-bold">₹{totalAmount.toFixed(2)}</div>
          <div className="text-sm text-muted-foreground">Total Amount</div>
        </CardContent>
      </Card>
    </div>
  )
}