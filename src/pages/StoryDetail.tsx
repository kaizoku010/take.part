
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, MapPin, Heart, Share2, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";

// Demo data - in a real app, this would come from an API
const storyData = [
  {
    id: 1,
    title: "A Day with Mountain Gorillas",
    location: "Bwindi Impenetrable Forest",
    author: "Sarah Johnson",
    date: "April 10, 2024",
    content: `
      <p class="mb-4">
        The morning mist hung heavy over the dense forest as our small group of six trekkers gathered at the ranger station in Bwindi Impenetrable Forest. Our guide, Joseph, briefed us on what to expect during our gorilla trek, emphasizing the importance of maintaining distance and respecting these magnificent creatures in their natural habitat.
      </p>
      
      <p class="mb-4">
        After a challenging two-hour hike through steep, muddy terrain and thick vegetation that truly lived up to the "impenetrable" name, our tracker received a radio call - the Rushegura gorilla family had been located! Excitement rippled through our group as we carefully made our final approach.
      </p>
      
      <p class="mb-4">
        Nothing could have prepared me for the overwhelming emotion of making eye contact with a silverback gorilla for the first time. Just 7 meters away, the massive male sat contentedly munching on bamboo shoots, occasionally glancing up to assess our presence. Around him, females groomed each other while playful juveniles tumbled through the undergrowth.
      </p>
      
      <p class="mb-4">
        The hour we spent observing the family passed in what felt like minutes - a magical, almost spiritual experience that left me with a profound appreciation for these gentle giants who share 98% of their DNA with humans. The way they interacted, communicated, and expressed emotions was incredibly human-like.
      </p>
      
      <p class="mb-6">
        As we reluctantly began our trek back, I realized this encounter had changed something fundamental in me. Seeing these endangered creatures in their natural habitat reinforced the critical importance of conservation efforts in Uganda and throughout Africa. The experience was worth every dollar of the permit fee, knowing it directly supports the protection of these remarkable animals.
      </p>
      
      <h3 class="text-xl font-bold text-green-800 mb-3">Tips for Future Gorilla Trekkers:</h3>
      
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Hire a porter (around $15-20) - they help carry your backpack and assist on difficult terrain while providing income for local communities.</li>
        <li>Bring good hiking boots with ankle support and garden gloves for grabbing onto vegetation.</li>
        <li>Pack a rain jacket regardless of season - the weather in the forest is unpredictable.</li>
        <li>Book your permits well in advance (6+ months if possible) as they sell out quickly.</li>
        <li>Consider staying at a lodge near your tracking point to minimize early morning travel.</li>
      </ul>
      
      <p>
        My day with the mountain gorillas of Bwindi was undoubtedly the highlight of my Uganda trip - a profound wildlife encounter that will stay with me forever.
      </p>
    `,
    images: [
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
    ],
    likes: 128,
    category: "Wildlife"
  },
  {
    id: 2,
    title: "Sunset Safari on the Nile",
    location: "Murchison Falls National Park",
    author: "Michael Tumusiime",
    date: "March 15, 2024",
    content: `
      <p class="mb-4">
        There's something magical about viewing wildlife from the water, especially along the mighty Nile River as it flows through Murchison Falls National Park. My sunset boat safari offered a unique perspective on Uganda's largest protected area.
      </p>
      
      <p class="mb-4">
        We boarded our small vessel at around 4 PM when the intense heat of the day had begun to subside, creating perfect conditions for wildlife viewing. As we pulled away from the dock, our guide explained that we would travel upstream toward the base of the falls, observing animals that come to the riverbanks in the late afternoon.
      </p>
      
      <p class="mb-4">
        Almost immediately, we spotted several massive Nile crocodiles sunning themselves on the banks, their prehistoric forms barely distinguishable from the surrounding rocks until you noticed their impressive teeth. A safe distance away, families of hippos wallowed in the shallows, occasionally submerging completely before resurfacing with loud snorts that echoed across the water.
      </p>
      
      <p class="mb-4">
        The birdlife was equally spectacular. African fish eagles perched regally on overhanging branches, their distinctive calls filling the air. Colorful kingfishers darted along the shoreline, while massive shoebill storks stood motionless in the reeds, patiently waiting for unsuspecting fish.
      </p>
      
      <p class="mb-6">
        As we approached closer to the falls, the noise of rushing water grew louder. The sight of the world's most powerful waterfall compressing into a 7-meter gorge was humbling and awe-inspiring. The raw power of nature was on full display as millions of liters of water forced their way through this narrow gap, creating a thunderous roar and a permanent rainbow in the resulting mist.
      </p>
      
      <p class="mb-4">
        On our return journey, we were treated to the real highlight of the safari: large herds of elephants had emerged from the woodland to drink at the river's edge. In the golden light of sunset, we watched in silent reverence as these magnificent creatures siphoned water with their trunks and playfully sprayed each other. Nearby, elegant antelopes cautiously approached the water, ever vigilant for predators.
      </p>
      
      <p class="mb-6">
        As the sun sank lower on the horizon, it painted the sky in spectacular hues of orange and pink, reflected perfectly in the calm sections of the river. The silhouettes of acacia trees against this vibrant backdrop created the quintessential African sunset scene I had always dreamed of photographing.
      </p>
      
      <h3 class="text-xl font-bold text-green-800 mb-3">Practical Tips:</h3>
      
      <ul class="list-disc pl-6 space-y-2 mb-6">
        <li>Book the afternoon boat rather than the morning one for the best wildlife sightings and lighting.</li>
        <li>Bring a zoom lens if you're into photography - you'll want to capture distant wildlife.</li>
        <li>Apply sunscreen and wear a hat, as there's limited shade on the boats.</li>
        <li>Keep your camera ready but secured - the water can get choppy near the falls.</li>
        <li>Consider combining this with a game drive earlier in the day for the complete Murchison Falls experience.</li>
      </ul>
      
      <p>
        The sunset Nile safari offered a perfect blend of scenery, wildlife, and tranquility. It provided a unique vantage point to observe animals in their natural rhythm and witness the breathtaking power of Murchison Falls up close. This experience ranks among my favorite memories from Uganda.
      </p>
    `,
    images: [
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
    ],
    likes: 93,
    category: "Adventure"
  }
];

const StoryDetail = () => {
  const { id } = useParams<{ id: string }>();
  const storyId = parseInt(id || "1");
  
  // Find the story with the matching id
  const story = storyData.find(s => s.id === storyId) || storyData[0];
  
  // For a real app, you would fetch story data based on the id
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link to="/stories" className="inline-flex items-center text-green-700 hover:text-green-800 mb-6">
            <ArrowLeft size={20} className="mr-2" />
            Back to Stories
          </Link>
          
          {/* Story Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">{story.title}</h1>
            
            <div className="flex flex-wrap gap-4 text-gray-600 mb-6">
              <div className="flex items-center">
                <User size={18} className="mr-1" /> 
                <span>{story.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar size={18} className="mr-1" /> 
                <span>{story.date}</span>
              </div>
              <div className="flex items-center">
                <MapPin size={18} className="mr-1" /> 
                <span>{story.location}</span>
              </div>
              <div className="flex items-center">
                <Heart size={18} className="mr-1" /> 
                <span>{story.likes} likes</span>
              </div>
            </div>
          </div>
          
          {/* Main Image */}
          <div className="mb-8 rounded-lg overflow-hidden">
            <img 
              src={story.images[0]} 
              alt={story.title} 
              className="w-full h-auto object-cover max-h-[500px]"
            />
          </div>
          
          {/* Story Content */}
          <div className="prose prose-lg max-w-none mb-8" dangerouslySetInnerHTML={{ __html: story.content }} />
          
          {/* Additional Images */}
          {story.images.length > 1 && (
            <div className="mb-8">
              <h3 className="text-xl font-bold text-green-800 mb-4">More Photos</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {story.images.slice(1).map((image, index) => (
                  <div key={index} className="rounded-lg overflow-hidden">
                    <img 
                      src={image} 
                      alt={`${story.title} - image ${index + 2}`} 
                      className="w-full h-64 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Sharing and Likes */}
          <div className="flex justify-between items-center mt-8 mb-12">
            <Button variant="outline" className="flex items-center gap-2">
              <Heart size={20} />
              Like This Story
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Share2 size={20} />
              Share
            </Button>
          </div>
          
          {/* Related Stories */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-green-800 mb-6">More Stories You Might Enjoy</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {storyData
                .filter(s => s.id !== storyId)
                .slice(0, 2)
                .map(related => (
                  <Card key={related.id} className="overflow-hidden hover:-translate-y-1 transition-transform duration-300">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={related.images[0]} 
                        alt={related.title} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h4 className="text-xl font-bold mb-2">{related.title}</h4>
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <MapPin size={16} className="mr-1" /> {related.location}
                      </div>
                      <Link 
                        to={`/stories/${related.id}`} 
                        className="text-green-700 hover:text-green-800 font-medium inline-flex items-center"
                      >
                        Read this story <ArrowLeft size={16} className="ml-1 rotate-180" />
                      </Link>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="mt-12 bg-green-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-green-800 mb-4">Have a Uganda Story to Share?</h3>
            <p className="text-lg text-gray-700 mb-6">
              Join our community and inspire others with your unique experiences in the Pearl of Africa.
            </p>
            <Button className="bg-green-700 hover:bg-green-800">
              <Link to="/submit-story">Submit Your Story</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StoryDetail;
