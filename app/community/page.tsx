"use client"
import { useState, useEffect } from "react"

interface Member {
  id: number
  name: string
  role: string
  company: string
  expertise: string[]
  location: string
  joined: string
  avatar: string
}

interface Discussion {
  id: number
  title: string
  author: string
  category: string
  replies: number
  lastActivity: string
  excerpt: string
}

export default function Community() {
  const [activeTab, setActiveTab] = useState('overview')
  const [members, setMembers] = useState<Member[]>([])
  const [discussions, setDiscussions] = useState<Discussion[]>([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    // Load sample community data
    const sampleMembers: Member[] = [
      {
        id: 1,
        name: "Sarah Johnson",
        role: "Sustainability Director",
        company: "EcoTech Solutions",
        expertise: ["Green Marketing", "Email Campaigns", "Carbon Tracking"],
        location: "San Francisco, CA",
        joined: "2024-01-15",
        avatar: "SJ"
      },
      {
        id: 2,
        name: "Michael Chen",
        role: "Marketing Manager",
        company: "Sustainable Brands Inc",
        expertise: ["Social Media", "Content Strategy", "Eco-Packaging"],
        location: "Toronto, Canada",
        joined: "2024-02-03",
        avatar: "MC"
      },
      {
        id: 3,
        name: "Emily Rodriguez",
        role: "Digital Marketing Lead",
        company: "Green Future Corp",
        expertise: ["SEO", "PPC", "Renewable Energy Marketing"],
        location: "Barcelona, Spain",
        joined: "2024-01-28",
        avatar: "ER"
      },
      {
        id: 4,
        name: "David Kumar",
        role: "Brand Strategist",
        company: "Clean Energy Partners",
        expertise: ["Brand Development", "Sustainable Messaging", "B2B Marketing"],
        location: "Mumbai, India",
        joined: "2024-02-10",
        avatar: "DK"
      }
    ]

    const sampleDiscussions: Discussion[] = [
      {
        id: 1,
        title: "Best Practices for Carbon-Neutral Email Marketing",
        author: "Sarah Johnson",
        category: "Email Marketing",
        replies: 23,
        lastActivity: "2 hours ago",
        excerpt: "Let's discuss how to reduce the environmental impact of our email campaigns while maintaining effectiveness..."
      },
      {
        id: 2,
        title: "Sustainable Packaging Design Trends for 2024",
        author: "Michael Chen",
        category: "Packaging",
        replies: 18,
        lastActivity: "5 hours ago",
        excerpt: "What are the latest trends in eco-friendly packaging that also enhance brand appeal?"
      },
      {
        id: 3,
        title: "ROI Measurement for Green Marketing Initiatives",
        author: "Emily Rodriguez",
        category: "Analytics",
        replies: 31,
        lastActivity: "1 day ago",
        excerpt: "How do you measure the return on investment for sustainability-focused marketing campaigns?"
      },
      {
        id: 4,
        title: "Building Trust Through Authentic Green Messaging",
        author: "David Kumar",
        category: "Strategy",
        replies: 15,
        lastActivity: "2 days ago",
        excerpt: "Avoiding greenwashing while effectively communicating your brand's environmental commitment..."
      }
    ]

    setMembers(sampleMembers)
    setDiscussions(sampleDiscussions)
  }, [])

  const filteredMembers = members.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.expertise.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  const filteredDiscussions = discussions.filter(discussion =>
    discussion.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    discussion.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          🌍 Green Marketing <span className="text-green-600">Community</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Connect with sustainable marketing professionals, share insights, and grow together in our eco-conscious community.
        </p>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <div className="text-2xl font-bold text-green-600">{members.length}</div>
          <div className="text-sm text-gray-600">Active Members</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <div className="text-2xl font-bold text-blue-600">{discussions.length}</div>
          <div className="text-sm text-gray-600">Discussions</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <div className="text-2xl font-bold text-purple-600">15</div>
          <div className="text-sm text-gray-600">Countries</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow text-center">
          <div className="text-2xl font-bold text-orange-600">87</div>
          <div className="text-sm text-gray-600">Topics</div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search members, discussions, or expertise..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
          />
          <div className="absolute right-3 top-3 text-gray-400">🔍</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-8">
        <div className="bg-white rounded-lg shadow p-1 inline-flex">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-6 py-2 rounded-md font-semibold transition-colors ${
              activeTab === 'overview'
                ? 'bg-green-600 text-white'
                : 'text-gray-600 hover:text-green-600'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('members')}
            className={`px-6 py-2 rounded-md font-semibold transition-colors ${
              activeTab === 'members'
                ? 'bg-green-600 text-white'
                : 'text-gray-600 hover:text-green-600'
            }`}
          >
            Members
          </button>
          <button
            onClick={() => setActiveTab('discussions')}
            className={`px-6 py-2 rounded-md font-semibold transition-colors ${
              activeTab === 'discussions'
                ? 'bg-green-600 text-white'
                : 'text-gray-600 hover:text-green-600'
            }`}
          >
            Discussions
          </button>
        </div>
      </div>

      {/* Content */}
      {activeTab === 'overview' && (
        <div className="space-y-8">
          {/* Welcome Section */}
          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-2xl">
            <h2 className="text-3xl font-bold mb-4">Welcome to the Community!</h2>
            <p className="text-lg mb-6 opacity-90">
              Join conversations, share expertise, and collaborate on sustainable marketing initiatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setActiveTab('discussions')}
                className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Join Discussions
              </button>
              <button
                onClick={() => setActiveTab('members')}
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                Browse Members
              </button>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900">🔥 Hot Discussions</h3>
              <div className="space-y-4">
                {discussions.slice(0, 3).map((discussion) => (
                  <div key={discussion.id} className="border-b border-gray-200 pb-3 last:border-b-0">
                    <h4 className="font-semibold text-gray-900 mb-1">{discussion.title}</h4>
                    <div className="text-sm text-gray-600">
                      {discussion.replies} replies • {discussion.lastActivity}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900">👥 New Members</h3>
              <div className="space-y-4">
                {members.slice(0, 3).map((member) => (
                  <div key={member.id} className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                      {member.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{member.name}</div>
                      <div className="text-sm text-gray-600">{member.role} at {member.company}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'members' && (
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2 text-gray-900">Community Members</h2>
            <p className="text-gray-600">Connect with {filteredMembers.length} sustainable marketing professionals</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMembers.map((member) => (
              <div key={member.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {member.avatar}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{member.name}</h3>
                    <p className="text-sm text-gray-600">{member.role}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-gray-700">Company</p>
                    <p className="text-sm text-gray-600">{member.company}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-gray-700">Location</p>
                    <p className="text-sm text-gray-600">{member.location}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-gray-700">Expertise</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {member.expertise.map((skill, index) => (
                        <span key={index} className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-3 border-t">
                    <p className="text-xs text-gray-500">Joined {new Date(member.joined).toLocaleDateString()}</p>
                  </div>
                </div>
                
                <button className="w-full mt-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                  Connect
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'discussions' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold mb-2 text-gray-900">Community Discussions</h2>
              <p className="text-gray-600">{filteredDiscussions.length} active conversations</p>
            </div>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
              Start Discussion
            </button>
          </div>

          <div className="space-y-4">
            {filteredDiscussions.map((discussion) => (
              <div key={discussion.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{discussion.title}</h3>
                    <p className="text-gray-600 mb-3">{discussion.excerpt}</p>
                  </div>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium ml-4">
                    {discussion.category}
                  </span>
                </div>
                
                <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span>By {discussion.author}</span>
                    <span>•</span>
                    <span>{discussion.replies} replies</span>
                    <span>•</span>
                    <span>{discussion.lastActivity}</span>
                  </div>
                  <button className="text-green-600 hover:text-green-700 font-semibold">
                    Join Discussion →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}