import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import { marketplaceItems } from '../data/mockData';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../components/ui/dialog';
import {
  Search,
  Plus,
  MapPin,
  Car,
  Home,
  Shirt,
  Smartphone,
  Dumbbell,
  Gamepad2,
  Music,
  Book,
  Baby,
  Dog,
  Wrench,
  Grid3X3,
  Heart,
  Share2,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  X
} from 'lucide-react';

const categories = [
  { icon: Grid3X3, label: 'Browse all' },
  { icon: Car, label: 'Vehicles' },
  { icon: Home, label: 'Property Rentals' },
  { icon: Shirt, label: 'Apparel' },
  { icon: Smartphone, label: 'Electronics' },
  { icon: Dumbbell, label: 'Sports' },
  { icon: Gamepad2, label: 'Toys & Games' },
  { icon: Music, label: 'Musical Instruments' },
  { icon: Book, label: 'Books' },
  { icon: Baby, label: 'Baby & Kids' },
  { icon: Dog, label: 'Pet Supplies' },
  { icon: Wrench, label: 'Garden & Outdoor' },
];

const Marketplace = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Browse all');
  const [selectedItem, setSelectedItem] = useState(null);
  const [savedItems, setSavedItems] = useState([]);

  const filteredItems = marketplaceItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'Browse all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleSaveItem = (itemId) => {
    setSavedItems(prev =>
      prev.includes(itemId)
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  return (
    <MainLayout showRightSidebar={false} showLeftSidebar={false}>
      <div className="flex min-h-screen">
        {/* Left Sidebar */}
        <div className="w-[360px] bg-white border-r fixed left-0 top-14 bottom-0 overflow-y-auto hidden lg:block">
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold">Marketplace</h1>
            </div>

            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search Marketplace"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-gray-100 border-none rounded-full"
              />
            </div>

            <Button className="w-full bg-blue-100 text-blue-600 hover:bg-blue-200 mb-4">
              <Plus className="w-4 h-4 mr-2" />
              Create new listing
            </Button>

            <div className="space-y-1">
              {categories.map((category) => {
                const Icon = category.icon;
                const isActive = selectedCategory === category.label;
                return (
                  <button
                    key={category.label}
                    onClick={() => setSelectedCategory(category.label)}
                    className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                      isActive ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-100'
                    }`}
                  >
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center ${
                      isActive ? 'bg-blue-600' : 'bg-gray-200'
                    }`}>
                      <Icon className={`w-5 h-5 ${isActive ? 'text-white' : ''}`} />
                    </div>
                    <span className="font-semibold text-sm">{category.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 lg:ml-[360px]">
          <div className="max-w-[1200px] mx-auto py-6 px-4">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold">Today's picks</h2>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <MapPin className="w-4 h-4" />
                  <span>San Francisco, CA</span>
                  <button className="text-blue-600 hover:underline ml-1">· Change</button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
                >
                  <div className="relative aspect-square">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSaveItem(item.id);
                      }}
                      className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow hover:bg-gray-100 transition-colors"
                    >
                      <Heart className={`w-5 h-5 ${savedItems.includes(item.id) ? 'fill-red-500 text-red-500' : ''}`} />
                    </button>
                  </div>
                  <div className="p-3">
                    <p className="font-bold text-lg">${item.price}</p>
                    <p className="text-sm text-gray-600 truncate">{item.title}</p>
                    <p className="text-xs text-gray-500 mt-1">{item.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Item Detail Modal */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden">
          {selectedItem && (
            <div className="flex flex-col md:flex-row">
              {/* Image */}
              <div className="md:w-1/2 bg-black flex items-center justify-center">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-[300px] md:h-[400px] object-contain"
                />
              </div>

              {/* Details */}
              <div className="md:w-1/2 p-6">
                <h2 className="text-2xl font-bold">${selectedItem.price}</h2>
                <h3 className="text-xl mt-1">{selectedItem.title}</h3>

                <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
                  <span>Listed {selectedItem.posted}</span>
                  <span>·</span>
                  <span>{selectedItem.condition}</span>
                </div>

                <div className="flex items-center gap-2 mt-4">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <span className="text-sm">{selectedItem.location}</span>
                </div>

                <div className="border-t mt-6 pt-6">
                  <h4 className="font-semibold mb-2">Seller information</h4>
                  <div className="flex items-center gap-3">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={selectedItem.seller.avatar} />
                      <AvatarFallback>{selectedItem.seller.firstName[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">
                        {selectedItem.seller.firstName} {selectedItem.seller.lastName}
                      </p>
                      <p className="text-sm text-gray-500">Joined 2020</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-2">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Message Seller
                  </Button>
                  <div className="flex gap-2">
                    <Button
                      variant="secondary"
                      className="flex-1"
                      onClick={() => handleSaveItem(selectedItem.id)}
                    >
                      <Heart className={`w-4 h-4 mr-2 ${savedItems.includes(selectedItem.id) ? 'fill-red-500 text-red-500' : ''}`} />
                      {savedItems.includes(selectedItem.id) ? 'Saved' : 'Save'}
                    </Button>
                    <Button variant="secondary" className="flex-1">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </MainLayout>
  );
};

export default Marketplace;
