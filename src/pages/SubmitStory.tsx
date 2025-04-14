
import { useState } from "react";
import { Upload, Camera, MapPin, X } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/layout/Layout";

const categories = ["Wildlife", "Adventure", "Culture", "Food", "Other"];

const SubmitStory = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    category: "",
    story: "",
    name: "",
    email: "",
  });
  const [images, setImages] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files);
      
      // Limit to 5 images total
      if (images.length + newFiles.length > 5) {
        toast({
          title: "Too many images",
          description: "You can upload a maximum of 5 images.",
          variant: "destructive",
        });
        return;
      }
      
      setImages((prev) => [...prev, ...newFiles]);
      
      // Create preview URLs
      const newPreviewUrls = newFiles.map((file) => URL.createObjectURL(file));
      setPreviewUrls((prev) => [...prev, ...newPreviewUrls]);
    }
  };

  const removeImage = (index: number) => {
    // Remove from preview
    URL.revokeObjectURL(previewUrls[index]);
    setPreviewUrls((prev) => prev.filter((_, i) => i !== index));
    
    // Remove from files
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.title || !formData.location || !formData.category || !formData.story || !formData.name || !formData.email) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    if (images.length === 0) {
      toast({
        title: "No images uploaded",
        description: "Please upload at least one image for your story.",
        variant: "destructive",
      });
      return;
    }
    
    // Simulate form submission
    setIsSubmitting(true);
    
    setTimeout(() => {
      // In a real app, this would send data to a server
      toast({
        title: "Story submitted successfully!",
        description: "Thank you for sharing your Uganda experience. Your story will be reviewed and published soon.",
      });
      
      // Reset form
      setFormData({
        title: "",
        location: "",
        category: "",
        story: "",
        name: "",
        email: "",
      });
      
      // Clean up preview URLs and reset images
      previewUrls.forEach(url => URL.revokeObjectURL(url));
      setPreviewUrls([]);
      setImages([]);
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-green-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Share Your Uganda Story</h1>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl max-w-3xl mx-auto">
            Tell us about your travels, adventures, and experiences in the Pearl of Africa
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-green-800 mb-6">Submit Your Story</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                {/* Story Title */}
                <div>
                  <Label htmlFor="title">Story Title *</Label>
                  <Input
                    id="title"
                    name="title"
                    placeholder="Give your story a captivating title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                {/* Location */}
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <Label htmlFor="location">Location *</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                      <Input
                        id="location"
                        name="location"
                        placeholder="Where in Uganda was this experience?"
                        className="pl-10"
                        value={formData.location}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  
                  {/* Category */}
                  <div className="flex-1">
                    <Label htmlFor="category">Category *</Label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      required
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select a category</option>
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                
                {/* Story Text */}
                <div>
                  <Label htmlFor="story">Your Story *</Label>
                  <Textarea
                    id="story"
                    name="story"
                    placeholder="Share your experience, what made it special, and any tips for other travelers..."
                    rows={8}
                    value={formData.story}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                {/* Image Upload */}
                <div>
                  <Label>Photos *</Label>
                  <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <input
                      type="file"
                      id="images"
                      multiple
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageChange}
                    />
                    
                    {previewUrls.length > 0 ? (
                      <div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                          {previewUrls.map((url, index) => (
                            <div key={index} className="relative rounded-md overflow-hidden h-32">
                              <img
                                src={url}
                                alt={`Preview ${index + 1}`}
                                className="w-full h-full object-cover"
                              />
                              <button
                                type="button"
                                onClick={() => removeImage(index)}
                                className="absolute top-2 right-2 bg-black bg-opacity-50 rounded-full p-1 text-white hover:bg-opacity-70 transition-opacity"
                              >
                                <X size={16} />
                              </button>
                            </div>
                          ))}
                        </div>
                        
                        {previewUrls.length < 5 && (
                          <label
                            htmlFor="images"
                            className="inline-flex items-center gap-2 text-sm text-green-700 hover:text-green-800 cursor-pointer"
                          >
                            <Camera size={18} />
                            Add more photos
                          </label>
                        )}
                      </div>
                    ) : (
                      <label
                        htmlFor="images"
                        className="flex flex-col items-center justify-center cursor-pointer"
                      >
                        <Upload className="h-12 w-12 text-gray-400 mb-2" />
                        <p className="text-base font-medium text-gray-700">Click to upload photos</p>
                        <p className="text-sm text-gray-500 mt-1">
                          Upload up to 5 images (PNG, JPG)
                        </p>
                      </label>
                    )}
                  </div>
                </div>
                
                {/* Contact Info */}
                <div className="pt-4 border-t border-gray-200">
                  <h3 className="text-lg font-medium text-green-800 mb-4">Your Information</h3>
                  
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                      <Label htmlFor="name">Your Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div className="flex-1">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                
                {/* Terms */}
                <div className="flex items-start mb-4">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      type="checkbox"
                      required
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-green-300"
                    />
                  </div>
                  <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                    I agree to the <a href="#" className="text-green-700 hover:underline">Terms and Conditions</a> and grant permission to use my content for the Tell Your Story UG campaign.
                  </label>
                </div>
                
                {/* Submit Button */}
                <div className="mt-6">
                  <Button
                    type="submit"
                    className="w-full bg-green-700 hover:bg-green-800"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Your Story"}
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Guidelines Section */}
      <section className="py-12 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">Submission Guidelines</h2>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-800 font-bold">1</div>
                  <p className="text-gray-700">
                    <strong>Be authentic:</strong> Share your genuine experiences and personal perspectives.
                  </p>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-800 font-bold">2</div>
                  <p className="text-gray-700">
                    <strong>Include photos:</strong> High-quality images that showcase your experience (maximum 5 photos).
                  </p>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-800 font-bold">3</div>
                  <p className="text-gray-700">
                    <strong>Be specific:</strong> Mention exact locations, activities, and what made your experience special.
                  </p>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-800 font-bold">4</div>
                  <p className="text-gray-700">
                    <strong>Respect:</strong> Ensure your content is respectful of local cultures, traditions, and environments.
                  </p>
                </li>
                <li className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-800 font-bold">5</div>
                  <p className="text-gray-700">
                    <strong>Length:</strong> Aim for 300-1000 words to provide enough detail while keeping readers engaged.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SubmitStory;
