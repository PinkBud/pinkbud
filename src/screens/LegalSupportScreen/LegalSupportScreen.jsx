import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import Navbar from '../HomeScreen/Components/Navbar';
import { useDispatch } from 'react-redux';
import { setTab } from '../../redux/features/currentTab';

export default function LegalSupportScreen() {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(setTab("legal"))
    },[])
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <header className="flex items-center h-20 px-4 border-b">
        <div className="flex items-center gap-4">
          
          <h1 className="text-xl font-semibold hidden md:block">Legal Support</h1>
        </div>
        
      </header>
      <div className="flex flex-1 min-h-0 py-6">
        <div className="hidden md:flex flex-col w-80 border-r">
          <div className="p-4 space-y-4">
            <div className="relative rounded-md bg-gray-100">
              <Input
                className="bg-transparent pl-8"
                placeholder="Search lawyers..."
                type="search"
              />
              <SearchIcon className="absolute top-2 left-1  ` w-6 h-6   m-auto" />
            </div>
            <div className="grid gap-2">
              <div className="font-semibold">Location</div>
              <CheckboxWithLabel id="ny" label="New York" />
              <CheckboxWithLabel id="sf" label="San Francisco" />
              <CheckboxWithLabel id="la" label="Los Angeles" />
            </div>
            <div className="grid gap-2">
              <div className="font-semibold">Practice Area</div>
              <CheckboxWithLabel id="criminal" label="Criminal Law" />
              <CheckboxWithLabel id="family" label="Family Law" />
              <CheckboxWithLabel id="business" label="Business Law" />
            </div>
            <div className="grid gap-2">
              <div className="font-semibold">Rating</div>
              <CheckboxWithLabel id="5star" label="5 stars" />
              <CheckboxWithLabel id="4star" label="4 stars" />
              <CheckboxWithLabel id="3star" label="3 stars" />
            </div>
          </div>
        </div>
        <div className="flex-1 p-4 overflow-auto">
          <h2 className="text-2xl font-semibold mb-4">Find Lawyers</h2>
          {/* Lawyer Cards will go here */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <LawyerCard name="Alice Johnson" practiceAreas={['Criminal Law', 'Family Law']} rating={5} />
            <LawyerCard name="Emily Davis" practiceAreas={['Business Law', 'Employment Law']} rating={4} />
            {/* Add more lawyer cards here */}
          </div>
        </div>
      </div>
    </div>
  );
}

function CheckboxWithLabel({ id, label }) {
  return (
    <Label variant="none">
      <Checkbox className="mr-2" id={id} />
      <span className="ml-2">{label}</span>
    </Label>
  );
}

function LawyerCard({ name, practiceAreas, rating }) {
  return (
    <div className="bg-white p-4 shadow-md rounded-md">
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <p className="text-sm text-gray-500 mb-2">{practiceAreas.join(', ')}</p>
      <div className="flex items-center gap-1 mb-2">
        {Array.from({ length: rating }, (_, index) => (
          <StarIcon key={index} className="w-4 h-4 text-yellow-500" />
        ))}
      </div>
      <div className="flex justify-between">
        <Button size="sm" className="w-full">Contact</Button>
        
      </div>
    </div>
  );
}

function SearchIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function StarIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
