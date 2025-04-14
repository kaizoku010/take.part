
import { ArrowRight, Camera, MapPin, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Layout from "@/components/layout/Layout";
import Bikes from "../media/hero.jpg";
import M1 from "../media/m1.jpg";
import M2 from "../media/m2.jpg";
import M3 from "../media/m3.jpg";
import M4 from "../media/m5.jpg";
import M7 from "../media/m4.jpg";
import M8 from "../media/m7.jpg";
import M9 from "../media/m22.jpeg";
import tick from "../media/ics.png";


// Featured story data (in a real app, this would come from an API)
const featuredStories = [
  {
    id: 1,
    title: "A Day with Mountain Gorillas",
    location: "Bwindi Impenetrable Forest",
    author: "Sarah Johnson",
    excerpt: "My life-changing encounter with Uganda's gentle giants in their natural habitat.",
    image: M1,
    likes: 128
  },
  {
    id: 2,
    title: "Sunset Safari on the Nile",
    location: "Murchison Falls National Park",
    author: "Michael Tumusiime",
    excerpt: "Witnessing the spectacular wildlife along Uganda's iconic river.",
    image: M2,
    likes: 93
  },
  {
    id: 3,
    title: "Traditional Dance Experience",
    location: "Kampala Cultural Center",
    author: "Emma Nakato",
    excerpt: "Immersing in the vibrant rhythms and movements of Ugandan cultural dances.",
    image: M3,
    likes: 87
  },
  {
    id: 4,
    title: "Hiking the Rwenzori Mountains",
    location: "Rwenzori Mountains National Park",
    author: "David Okello",
    excerpt: "My journey through the legendary Mountains of the Moon.",
    image: M4,
    likes: 115
  }
];

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-cover bg-center flex items-center" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${Bikes})`
        }}>
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">Tell Your Story</h1>
          <p id="hero-text" className="text-xl md:text-2xl mb-4 max-w-2xl mx-auto drop-shadow-md">
            Share your Ugandan adventures and inspire others to explore the Pearl of Africa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
              <Link to="/submit-story" className="flex items-center">
                {/* <Camera size={20} /> */}
                Share Your Story
              </Link>
            </Button>
            {/* <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              <Link to="/stories" className="flex items-center gap-2">
                Browse Stories
                <ArrowRight size={20} />
              </Link>
            </Button> */}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">About The Campaign</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto text-gray-700">
              <strong>Tell Your Story UG</strong> is an exciting digital campaign designed
              to showcase the beauty, adventure, and culture of Uganda
              through the eyes of its travelers. We invite everyone (locals, tourists, and travel enthusiasts)
              to share their unique Ugandan tourism experiences and
              inspire others to explore the Pearl of Africa.
            </p>
          </div>
        </div>
      </section>
      
      {/* Featured Stories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Featured Images</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto text-gray-600">
              Discover inspiring experiences from travelers who have explored Uganda's wonders
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredStories.map((story) => (
              <Card key={story.id} className="hover:-translate-y-1 transition-transform duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={story.image} 
                    alt={story.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* <CardHeader>
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
                    Read More <ArrowRight size={16} className="ml-1" />
                  </Link>
                </CardFooter> */}
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-green-800 hover:bg-green-800">
              <Link to="/stories" className="flex items-center gap-2">
                View All More
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Carousel */}
      <section id="carousel-section" className="py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-green-800">Uganda's Natural Beauty</h2>
            <div className="w-20 h-1 bg-green-900 mx-auto mb-3"></div>
            <p className="text-lg max-w-3xl mx-auto text-white">
              Explore stunning images from across the Pearl of Africa
            </p>
          </div>
          
          <Carousel className="max-w-4xl mx-auto">
            <CarouselContent>
              <CarouselItem>
                <div className="p-1">
                  <div className="overflow-hidden rounded-lg h-96">
                    <img 
src={M7}
alt="Uganda landscape" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* <div className="text-center mt-4">
                    <h3 className="text-xl font-medium">The Nile River at Sunset</h3>
                    <p className="text-gray-300">Jinja, Eastern Uganda</p>
                  </div> */}
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <div className="overflow-hidden rounded-lg h-96">
                    <img 
src={M8}
alt="Uganda landscape" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* <div className="text-center mt-4">
                    <h3 className="text-xl font-medium">Murchison Falls</h3>
                    <p className="text-gray-300">Murchison Falls National Park</p>
                  </div> */}
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <div className="overflow-hidden rounded-lg h-96">
                    <img 
src={M9}
alt="Uganda landscape" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* <div className="text-center mt-4">
                    <h3 className="text-xl font-medium">Scenic Mountain Views</h3>
                    <p className="text-gray-300">Rwenzori Mountains</p>
                  </div> */}
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-2">Ready to Share Your Uganda Experience?</h2>
          <p className="text-xl text-green-800 mb-8 max-w-2xl mx-auto">
            Join our community of storytellers and help others discover the beauty of Uganda
          </p>
          <Button size="lg" className="bg-green-800 hover:bg-green-900">
            <Link to="/submit-story" className="flex items-center gap-2">
              Start Sharing Now
              <ArrowRight size={20} />
            </Link>
          </Button>
        </div>
      </section>

      <section id="prizes-section">

        <div className="content-prizes">
                <h1 className="win-title">WIN A FULLY PAID TRIP TO :</h1>
                <div className="prize"><img src={tick} alt="tick" />Sese Islands</div>
                <div className="prize"><img src={tick} alt="tick" />Murchinson Falls</div>
                <div className="prize"><img src={tick} alt="tick" />Queen Elizabeth</div>
                <div className="prize"><img src={tick} alt="tick" />Chimp trekking in Kibale</div>
                <button>TAKE PART</button>

        </div>
        <div className="content-prizes-2">

        </div>

      </section>
    </Layout>
  );
};

export default Home;
