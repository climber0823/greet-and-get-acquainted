import { useState } from 'react';
import { Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useBusinesses } from '@/hooks/useBusinesses';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { data: businesses, isLoading } = useBusinesses(undefined, searchQuery);

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="w-full bg-white py-12">
        <div className="w-full max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">Find Local Businesses</h1>
          <div className="max-w-2xl mx-auto relative">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input 
                type="text" 
                placeholder="Search businesses..." 
                className="pl-10 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="w-full py-12">
        <div className="w-full max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-8 text-gray-900">Browse Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
      <section className="w-full bg-white py-12">
        <div className="w-full max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-8 text-gray-900">Featured Businesses</h2>
          {isLoading ? (
            <div className="text-center">Loading...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {businesses?.map((business) => (
                <Card key={business.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-medium mb-2">{business.name}</h3>
                    <p className="text-sm text-gray-500 mb-4">{business.category}</p>
                    <p className="text-sm">{business.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
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

export default Index;
