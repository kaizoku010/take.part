
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
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
      <section id="hero" className="hero relative h-[80vh] bg-cover bg-center flex items-center" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${Bikes})`
        }}>
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">Tell Your Story</h1>
          <p id="hero-text" className="text-xl md:text-2xl mb-4 max-w-2xl mx-auto drop-shadow-md">
            Share your Ugandan adventures and inspire others to explore the Pearl of Africa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
              href="https://x.com/TellYourStoryUg/" 
              target="_blank" 
              rel="noopener noreferrer" >
            <Button size="lg" className="bg-yellow-dx hover:bg-yellow-600 text-black">
              <div className="flex items-center gap-2">
                {/* <Camera size={20} /> */}
                TAKE PART
              </div>
            </Button>
            </a>
            <a 
              href="https://exploreuganda.com/ " 
              target="_blank" 
              rel="noopener noreferrer" >
            <Button id="vist-ug">
              <div className="flex items-center gap-1">
                EXPLORE UGANDA
                <ArrowRight size={20} />
              </div>
            </Button>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-green-50 about-section">
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
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
          <a 
              href="https://exploreuganda.com/" 
              target="_blank" 
              rel="noopener noreferrer" >
            <Button className="bg-green-800 hover:bg-green-800">

              <div className="flex items-center gap-2">
                View All More
                <ArrowRight size={20} />
              </div>
              
            </Button>
            </a>
          </div>
        </div>
      </section>
      
      {/* Carousel */}
      <section id="carousel-section" className="py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2 text-green-800">Uganda's Natural Beauty</h2>
            {/* <div className="w-20 h-1 bg-green-900 mx-auto mb-3"></div> */}
            <p className="text-lg max-w-3xl mx-auto text-gray">
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
  
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
      </section>
      
      {/* Call to Action */}
      <section id="cta" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-2">Ready To Share Your Uganda Experience?</h2>
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

      <section id="prizes-section" className="prizes-section prizes">
        <div className="content-prizes">
                <h1 className="win-title">WIN A FULLY PAID TRIP TO :</h1>
                <div className="prize"><img src={tick} alt="tick" />Sese Islands</div>
                <div className="prize"><img src={tick} alt="tick" />Murchinson Falls</div>
                <div className="prize"><img src={tick} alt="tick" />Queen Elizabeth</div>
                <div className="prize"><img src={tick} alt="tick" />Chimp trekking in Kibale</div>
             <a href="https://x.com/TellYourStoryUg"             target="_blank" 
              rel="noopener noreferrer" >
                              <button className="take-part">TAKE PART</button>

             </a>

        </div>
        <div className="content-prizes-2">

        </div>

      </section>

      {/* Terms Section */}
      <section id="terms" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Terms & Conditions</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <div className="max-w-3xl mx-auto text-gray-700">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Eligibility</AccordionTrigger>
                  <AccordionContent>
                  <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                    <p style={{marginBottom: "1rem"}}>Participation is open to individuals who are:</p>
                    <li>Residents or citizens of Uganda or international tourists who have visited Uganda
                    </li>
                    <li>Aged 18 years or older at the time of entry. Active users on at least one major social
                    </li>
                    <li>media platform (e.g. Instagram, Facebook, TikTok, X/Twitter, YouTube)</li>
                  </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>Content Guidelines</AccordionTrigger>
                  <AccordionContent>
                    All submitted content must be original and related to tourism experiences in Uganda. Content must not violate any copyright laws or contain inappropriate material.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>Usage Rights</AccordionTrigger>
                  <AccordionContent>
                    By submitting content, you grant Tell Your Story UG the right to use, modify, and share your content across our platforms for campaign purposes.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>Prize Terms</AccordionTrigger>
                  <AccordionContent>
                    Winners will be selected based on content quality and engagement. Prizes are non-transferable and cannot be exchanged for cash. Travel dates are subject to availability.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Contact Us</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <div className="max-w-3xl mx-auto text-gray-700">
              {/* Add your contact content here */}
              <p>Contact information goes here...</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;



