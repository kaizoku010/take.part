
import Layout from "@/components/layout/Layout";
import { Camera, MapPin, Users, Globe } from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-green-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Tell Your Story UG</h1>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-8"></div>
          <p className="text-xl max-w-3xl mx-auto">
            An exciting digital campaign designed to showcase the beauty, adventure, and culture of Uganda
            through the eyes of its travelers.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
                alt="Uganda landscape" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-green-800 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                Tell Your Story UG is dedicated to promoting Uganda's tourism potential by creating a platform where 
                travelers can share their authentic experiences, stunning photographs, and personal stories 
                about exploring Uganda.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We believe that real stories from real travelers are the most powerful way to showcase the 
                beauty and diversity of Uganda's attractions, from its wildlife and landscapes to its rich 
                cultural heritage and warm hospitality.
              </p>
              <p className="text-lg text-gray-700">
                By collecting and sharing these stories, we aim to inspire more people to visit Uganda 
                and contribute to sustainable tourism development in the country.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Why Participate?</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Camera size={32} className="text-green-800" />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-3">Share Your Experience</h3>
              <p className="text-gray-600">
                Showcase your photos and stories from your Uganda adventures with a global audience.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Users size={32} className="text-green-800" />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-3">Join a Community</h3>
              <p className="text-gray-600">
                Connect with fellow travelers who share your passion for Uganda's beauty and culture.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <MapPin size={32} className="text-green-800" />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-3">Discover Hidden Gems</h3>
              <p className="text-gray-600">
                Find lesser-known destinations and experiences through authentic traveler stories.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Globe size={32} className="text-green-800" />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-3">Promote Uganda</h3>
              <p className="text-gray-600">
                Help showcase Uganda's tourism potential and contribute to its development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Meet Our Team</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto text-gray-600">
              Passionate individuals dedicated to showcasing Uganda's tourism potential
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80&h=600" 
                alt="Team member" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-800">Sarah Nakato</h3>
                <p className="text-gray-500 mb-4">Campaign Director</p>
                <p className="text-gray-600">
                  With over 10 years in tourism promotion, Sarah is passionate about showcasing Uganda's natural beauty.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80&h=600" 
                alt="Team member" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-800">David Okello</h3>
                <p className="text-gray-500 mb-4">Content Manager</p>
                <p className="text-gray-600">
                  A talented photographer and storyteller who has documented Uganda's diverse landscapes and cultures.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80&h=600" 
                alt="Team member" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-800">Emma Kisakye</h3>
                <p className="text-gray-500 mb-4">Community Manager</p>
                <p className="text-gray-600">
                  Emma builds relationships with travelers and ensures their stories are shared with the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Our Partners</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto text-gray-600">
              Working together to promote tourism in Uganda
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-20 flex items-center justify-center">
                <span className="text-xl font-bold text-green-800">Uganda Tourism Board</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-20 flex items-center justify-center">
                <span className="text-xl font-bold text-green-800">Ministry of Tourism</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-20 flex items-center justify-center">
                <span className="text-xl font-bold text-green-800">Uganda Wildlife Authority</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-20 flex items-center justify-center">
                <span className="text-xl font-bold text-green-800">Uganda Hotel Owners Association</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
