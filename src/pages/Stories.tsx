
import { useState } from "react";
import { Search, MapPin, Heart, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";

// Story data (in a real app, this would come from an API)
const storyData = [
  {
    id: 1,
    title: "A Day with Mountain Gorillas",
    location: "Bwindi Impenetrable Forest",
    author: "Sarah Johnson",
    excerpt: "My life-changing encounter with Uganda's gentle giants in their natural habitat.",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    likes: 128,
    category: "Wildlife"
  },
  {
    id: 2,
    title: "Sunset Safari on the Nile",
    location: "Murchison Falls National Park",
    author: "Michael Tumusiime",
    excerpt: "Witnessing the spectacular wildlife along Uganda's iconic river.",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    likes: 93,
    category: "Adventure"
  },
  {
    id: 3,
    title: "Traditional Dance Experience",
    location: "Kampala Cultural Center",
    author: "Emma Nakato",
    excerpt: "Immersing in the vibrant rhythms and movements of Ugandan cultural dances.",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    likes: 87,
    category: "Culture"
  },
  {
    id: 4,
    title: "Hiking the Rwenzori Mountains",
    location: "Rwenzori Mountains National Park",
    author: "David Okello",
    excerpt: "My journey through the legendary Mountains of the Moon.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    likes: 115,
    category: "Adventure"
  },
  {
    id: 5,
    title: "Coffee Tour in the Highlands",
    location: "Sipi Falls, Eastern Uganda",
    author: "Lisa Akello",
    excerpt: "Learning about Uganda's coffee culture from bean to cup.",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    likes: 76,
    category: "Food"
  },
  {
    id: 6,
    title: "Exploring Kampala's Markets",
    location: "Owino Market, Kampala",
    author: "James Opio",
    excerpt: "Navigating the vibrant chaos of Uganda's largest market.",
    image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    likes: 62,
    category: "Culture"
  },
  {
    id: 7,
    title: "Lake Victoria Fishing Adventure",
    location: "Entebbe, Central Uganda",
    author: "Daniel Mugisha",
    excerpt: "A day spent with local fishermen on Africa's largest lake.",
    image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    likes: 89,
    category: "Adventure"
  },
  {
    id: 8,
    title: "Chimpanzee Tracking in Kibale",
    location: "Kibale Forest National Park",
    author: "Olivia Namuli",
    excerpt: "Up close with our closest relatives in their natural habitat.",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    likes: 104,
    category: "Wildlife"
  }
];

// Categories for filtering
const categories = ["All", "Wildlife", "Adventure", "Culture", "Food"];

const Stories = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter stories based on search term and category
  const filteredStories = storyData.filter((story) => {
    const matchesSearch = 
      story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      story.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      story.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === "All" || story.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-green-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Explore Uganda Stories</h1>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl max-w-3xl mx-auto">
            Discover incredible experiences shared by travelers from around the world
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="w-full md:w-1/2 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                placeholder="Search stories by title, author, or location..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center mr-2">
                <Filter size={18} className="mr-1 text-green-800" />
                <span className="text-sm font-medium text-green-800">Filter:</span>
              </div>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={selectedCategory === category ? "bg-green-700 hover:bg-green-800" : ""}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredStories.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredStories.map((story) => (
                <Card key={story.id} className="hover:-translate-y-1 transition-transform duration-300">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={story.image} 
                      alt={story.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center text-sm text-gray-500 mb-1">
                      <MapPin size={16} className="mr-1" /> {story.location}
                    </div>
                    <CardTitle>{story.title}</CardTitle>
                    <CardDescription>By {story.author}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{story.excerpt}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <div className="flex items-center text-gray-500">
                      <Heart size={16} className="mr-1" /> {story.likes}
                    </div>
                    <Link to={`/stories/${story.id}`} className="text-green-700 hover:text-green-800 font-medium text-sm flex items-center">
                      Read More <span className="ml-1">→</span>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-2xl font-medium text-gray-700 mb-4">No stories found</h3>
              <p className="text-gray-500 mb-6">Try adjusting your search or filters</p>
              <Button 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
                className="bg-green-700 hover:bg-green-800"
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-yellow-400">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-green-900 mb-4">Have a story to share?</h2>
          <p className="text-lg text-green-800 mb-6 max-w-2xl mx-auto">
            Join our community and share your unique Uganda experience with travelers around the world.
          </p>
          <Button size="lg" className="bg-green-800 hover:bg-green-900">
            <Link to="/submit-story">Submit Your Story</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Stories;
