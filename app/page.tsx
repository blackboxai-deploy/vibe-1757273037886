export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
          Marketing<span className="text-green-600">.Green</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          The premier community for sustainable marketing professionals. Connect, learn, and grow with eco-conscious marketers worldwide.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors">
            Join Our Community
          </button>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors">
            Get Started Today
          </button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-4xl mb-4">🌍</div>
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Global Community</h3>
          <p className="text-gray-600">Connect with sustainable marketing professionals from around the world. Share insights, strategies, and build meaningful relationships.</p>
          <a href="/community" className="inline-block mt-4 text-green-600 hover:text-green-700 font-semibold">
            Explore Community →
          </a>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-4xl mb-4">📚</div>
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Expert Resources</h3>
          <p className="text-gray-600">Access comprehensive guides, case studies, and best practices for implementing sustainable marketing strategies in your organization.</p>
          <a href="/knowledge" className="inline-block mt-4 text-green-600 hover:text-green-700 font-semibold">
            Browse Knowledge Hub →
          </a>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <div className="text-4xl mb-4">🔧</div>
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Admin System</h3>
          <p className="text-gray-600">Full-featured admin panel with CRUD functionality. Manage content, users, and community resources with ease.</p>
          <div className="inline-block mt-4 text-gray-500 font-semibold">
            Admin Access Available
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Community Impact</h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-green-600 mb-2">10K+</div>
            <div className="text-gray-600">Members</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Resources</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
            <div className="text-gray-600">Countries</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600 mb-2">95%</div>
            <div className="text-gray-600">Satisfaction</div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Go Green?</h2>
        <p className="text-xl mb-6 opacity-90">Join thousands of marketing professionals making a difference</p>
        <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          Get Started Today
        </button>
      </div>
    </div>
  )
}