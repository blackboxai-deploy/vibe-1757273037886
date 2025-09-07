"use client"
import { useState, useEffect } from "react"

interface Resource {
  id: number
  title: string
  description: string
  category: string
  type: 'guide' | 'template' | 'case-study' | 'article'
  author: string
  readTime: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  tags: string[]
  downloads: number
  rating: number
  publishDate: string
}

export default function Knowledge() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [resources, setResources] = useState<Resource[]>([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    // Load sample knowledge base data
    const sampleResources: Resource[] = [
      {
        id: 1,
        title: "Complete Guide to Carbon-Neutral Email Marketing",
        description: "Comprehensive guide covering strategies to reduce the environmental impact of email campaigns while maintaining high engagement rates.",
        category: "Email Marketing",
        type: "guide",
        author: "Sarah Johnson",
        readTime: "15 min",
        difficulty: "Intermediate",
        tags: ["Email", "Carbon Neutral", "Sustainability", "ROI"],
        downloads: 1247,
        rating: 4.8,
        publishDate: "2024-01-15"
      },
      {
        id: 2,
        title: "Sustainable Packaging Design Template",
        description: "Ready-to-use Figma template for creating eco-friendly packaging designs that appeal to environmentally conscious consumers.",
        category: "Design",
        type: "template",
        author: "Michael Chen",
        readTime: "5 min",
        difficulty: "Beginner",
        tags: ["Packaging", "Design", "Template", "Eco-Friendly"],
        downloads: 892,
        rating: 4.6,
        publishDate: "2024-02-01"
      },
      {
        id: 3,
        title: "Patagonia's Green Marketing Success Story",
        description: "In-depth case study analyzing how Patagonia built authentic environmental messaging that resonates with consumers.",
        category: "Case Studies",
        type: "case-study",
        author: "Emily Rodriguez",
        readTime: "20 min",
        difficulty: "Advanced",
        tags: ["Case Study", "Branding", "Authenticity", "B2C"],
        downloads: 2156,
        rating: 4.9,
        publishDate: "2024-01-28"
      },
      {
        id: 4,
        title: "ROI Calculator for Green Marketing Initiatives",
        description: "Excel template to measure and track the return on investment for sustainability-focused marketing campaigns.",
        category: "Analytics",
        type: "template",
        author: "David Kumar",
        readTime: "10 min",
        difficulty: "Intermediate",
        tags: ["ROI", "Analytics", "Tracking", "Excel"],
        downloads: 743,
        rating: 4.5,
        publishDate: "2024-02-10"
      },
      {
        id: 5,
        title: "Building Trust Through Authentic Green Messaging",
        description: "Strategies to communicate your brand's environmental commitment without falling into greenwashing traps.",
        category: "Strategy",
        type: "article",
        author: "Lisa Park",
        readTime: "12 min",
        difficulty: "Intermediate",
        tags: ["Messaging", "Trust", "Authenticity", "Brand"],
        downloads: 1535,
        rating: 4.7,
        publishDate: "2024-01-20"
      },
      {
        id: 6,
        title: "Social Media Content Calendar for Earth Day",
        description: "30-day content calendar template for promoting environmental awareness and sustainable products on social media.",
        category: "Social Media",
        type: "template",
        author: "Alex Thompson",
        readTime: "8 min",
        difficulty: "Beginner",
        tags: ["Social Media", "Content Calendar", "Earth Day"],
        downloads: 1089,
        rating: 4.4,
        publishDate: "2024-02-15"
      }
    ]

    setResources(sampleResources)
  }, [])

  const categories = ['all', 'Email Marketing', 'Design', 'Case Studies', 'Analytics', 'Strategy', 'Social Media']

  const filteredResources = resources.filter(resource => {
    const matchesCategory = activeCategory === 'all' || resource.category === activeCategory
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'guide': return '📖'
      case 'template': return '📋'
      case 'case-study': return '📊'
      case 'article': return '📝'
      default: return '📄'
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800'
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800'
      case 'Advanced': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          📚 Knowledge <span className="text-green-600">Hub</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover expert resources, templates, and insights to elevate your sustainable marketing strategies.
        </p>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <div className="text-2xl font-bold text-green-600">{resources.length}</div>
          <div className="text-sm text-gray-600">Resources</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <div className="text-2xl font-bold text-blue-600">
            {resources.reduce((sum, r) => sum + r.downloads, 0).toLocaleString()}
          </div>
          <div className="text-sm text-gray-600">Downloads</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <div className="text-2xl font-bold text-purple-600">
            {categories.length - 1}
          </div>
          <div className="text-sm text-gray-600">Categories</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <div className="text-2xl font-bold text-orange-600">4.7</div>
          <div className="text-sm text-gray-600">Avg Rating</div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="mb-8 space-y-4">
        {/* Search Bar */}
        <div className="relative max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search resources, guides, templates..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
          />
          <div className="absolute right-3 top-3 text-gray-400">🔍</div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-green-50 hover:text-green-600 shadow'
              }`}
            >
              {category === 'all' ? 'All Categories' : category}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Resource */}
      {activeCategory === 'all' && !searchTerm && (
        <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-2xl mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <span className="text-3xl">⭐</span>
            <span className="bg-white text-green-600 px-3 py-1 rounded-full text-sm font-semibold">
              Featured Resource
            </span>
          </div>
          <h2 className="text-3xl font-bold mb-4">
            {resources.find(r => r.rating === Math.max(...resources.map(r => r.rating)))?.title}
          </h2>
          <p className="text-lg mb-6 opacity-90">
            {resources.find(r => r.rating === Math.max(...resources.map(r => r.rating)))?.description}
          </p>
          <div className="flex items-center space-x-6 text-sm opacity-90 mb-6">
            <span>⭐ {resources.find(r => r.rating === Math.max(...resources.map(r => r.rating)))?.rating}/5</span>
            <span>📥 {resources.find(r => r.rating === Math.max(...resources.map(r => r.rating)))?.downloads} downloads</span>
            <span>⏱️ {resources.find(r => r.rating === Math.max(...resources.map(r => r.rating)))?.readTime} read</span>
          </div>
          <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Access Resource
          </button>
        </div>
      )}

      {/* Resource Grid */}
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">
            {activeCategory === 'all' ? 'All Resources' : activeCategory}
            <span className="text-gray-500 font-normal text-lg ml-2">({filteredResources.length})</span>
          </h2>
          <select className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none">
            <option>Sort by Latest</option>
            <option>Sort by Popular</option>
            <option>Sort by Rating</option>
            <option>Sort by Title</option>
          </select>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => (
            <div key={resource.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-2xl">{getTypeIcon(resource.type)}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(resource.difficulty)}`}>
                    {resource.difficulty}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                  {resource.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {resource.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {resource.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                  {resource.tags.length > 3 && (
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                      +{resource.tags.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center space-x-3">
                    <span>⭐ {resource.rating}</span>
                    <span>📥 {resource.downloads}</span>
                    <span>⏱️ {resource.readTime}</span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                      By {resource.author}
                    </div>
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium">
                      {resource.type === 'template' ? 'Download' : 'Read'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">No resources found</h3>
            <p>Try adjusting your search terms or category filters.</p>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Contribute to the Knowledge Hub</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Share your expertise with the community. Submit guides, templates, or case studies to help fellow sustainable marketers.
        </p>
        <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
          Submit Resource
        </button>
      </div>
    </div>
  )
}