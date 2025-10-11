import { Button } from "../ui/button.tsx"

export function Header() {
    return (
        <header className="border-b border-gray-200">
            <div className="container mx-auto px-2">
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="text-2xl font-bold">Invoice Generator</h3>
                    </div>
                    <nav className="flex items-center gap-3">
                        <Button size="sm">
                            Login
                        </Button>
                    </nav>
                </div>
            </div>
        </header>
    )
}