import { Button } from "../ui/button.tsx"

export function Header() {
    const handleLogin=()=>{
        window.location.href= `${import.meta.env.VITE_SERVER_URL}/auth/google`
    };
    return (
        <header className="border-b border-gray-200">
            <div className="container mx-auto px-2">
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="text-2xl font-bold">Invoice Generator</h3>
                    </div>
                    <nav className="flex items-center gap-3">
                        <Button size="sm" onClick={handleLogin}>
                            Login
                        </Button>
                    </nav>
                </div>
            </div>
        </header>
    )
}