import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
          <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
              <a href="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">M</span>
                </div>
                <span className="text-xl font-bold text-gray-900">Marketing<span className="text-green-600">.Green</span></span>
              </a>
              <div className="flex space-x-6">
                <a href="/" className="text-gray-600 hover:text-green-600 transition-colors">Home</a>
                <a href="/community" className="text-gray-600 hover:text-green-600 transition-colors">Community</a>
                <a href="/knowledge" className="text-gray-600 hover:text-green-600 transition-colors">Knowledge Hub</a>
              </div>
            </div>
          </nav>
          {children}
          <footer className="bg-gray-900 text-white py-8 text-center">
            <div className="max-w-4xl mx-auto px-4">
              <p className="text-lg">© 2024 Marketing.Green 🌱 - Sustainable Marketing Solutions</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}