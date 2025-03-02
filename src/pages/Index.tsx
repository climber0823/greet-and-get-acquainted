
import { Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Find Local Businesses</h1>
          <div className="max-w-2xl mx-auto relative">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input 
                type="text" 
                placeholder="Search businesses..." 
                className="pl-10 w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-8">Browse Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((category) => (
              <Card key={category.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <h3 className="font-medium">{category.name}</h3>
                  <p className="text-sm text-gray-500">{category.count} businesses</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Listings Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-8">Featured Businesses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredListings.map((listing) => (
              <Card key={listing.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-medium mb-2">{listing.name}</h3>
                  <p className="text-sm text-gray-500 mb-4">{listing.category}</p>
                  <p className="text-sm">{listing.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Temporary sample data (we'll replace this with Supabase data later)
const categories = [
  { id: 1, name: "Restaurants", count: 24 },
  { id: 2, name: "Retail", count: 18 },
  { id: 3, name: "Professional Services", count: 15 },
  { id: 4, name: "Health & Wellness", count: 12 },
  { id: 5, name: "Entertainment", count: 9 },
  { id: 6, name: "Home Services", count: 21 },
  { id: 7, name: "Automotive", count: 8 },
  { id: 8, name: "Technology", count: 11 }
];

const featuredListings = [
  {
    id: 1,
    name: "Tech Solutions Inc",
    category: "Technology",
    description: "Professional IT services and consulting for businesses of all sizes."
  },
  {
    id: 2,
    name: "Green Garden Restaurant",
    category: "Restaurants",
    description: "Farm-to-table dining experience with organic ingredients."
  },
  {
    id: 3,
    name: "Wellness Center",
    category: "Health & Wellness",
    description: "Comprehensive health and wellness services for mind and body."
  }
];

export default Index;
