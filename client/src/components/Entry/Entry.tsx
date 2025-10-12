import { useState } from "react"
import { BillingControls } from "../Billing/BillingControls"
import { BillingStats } from "../Billing/BillingStats"
import { BillingTable } from "../Billing/BillingTable"

export function Entry() {
    const [totalPatients, setTotalPatients] = useState(1)
    const [totalAmount, setTotalAmount] = useState(0)

    const handleTotalsChange = (patients: number, amount: number) => {
        setTotalPatients(patients)
        setTotalAmount(amount)
    }

    return (
        <div className="p-6 space-y-4">
            <BillingTable onTotalsChange={handleTotalsChange} />
            <BillingControls
                onAdd={() => { }}
                onClear={() => {
                    setTotalPatients(0)
                    setTotalAmount(0)
                }}
            />
            <BillingStats totalPatients={totalPatients} totalAmount={totalAmount} />
        </div>
    )
}

