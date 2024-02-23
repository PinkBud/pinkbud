import React, { useState } from 'react';
import axios from 'axios';
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import Navbar from '../HomeScreen/Components/Navbar';

export default function AddEventScreen() {
    const navigate = useNavigate();
  const [eventDetails, setEventDetails] = useState({
    title: '',
    contact_no: '',
    description: '',
    prize: 0,
    certification: false,
    date: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEventDetails(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = () => {
   if (localStorage.getItem("isNgo")== "true"){
    axios.post('http://127.0.0.1:8000/events/', eventDetails)
    .then(response => {
      navigate("/opportunity")
      console.log(response.data); // Log the response data
      // Handle success response if needed
    })
    .catch(error => {
      console.error('Error:', error);
      // Handle error if needed
    });
   } else {
    alert("Can't add event...");
   }
  };

  return (
    <div className='min-h-screen flex justify-center items-center flex-col'>
      
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader>
        <CardTitle className="text-lg">Event Details</CardTitle>
        <CardDescription>Enter your event details below. All fields are required.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input id="title" name="title" value={eventDetails.title} onChange={handleChange} placeholder="Enter the title" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-number">Contact Number</Label>
          <Input id="contact-number" name="contact_no" value={eventDetails.contact_no} onChange={handleChange} placeholder="Enter your contact number" required type="tel" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea className="min-h-[100px]" id="description" name="description" value={eventDetails.description} onChange={handleChange} placeholder="Enter the description" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="prize-money">Prize Money</Label>
          <Input id="prize-money" name="prize" value={eventDetails.prize} onChange={handleChange} placeholder="Enter the prize money" type="number" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="certification" name="certification" checked={eventDetails.certification} onChange={handleChange} />
            <Label className="leading-none" htmlFor="certification">
              Certification provided
            </Label>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="date">Date</Label>
          <Input id="date" name="date" value={eventDetails.date} onChange={handleChange} type="date" />
        </div>
      </CardContent>
      <CardFooter>
        <Button size="sm" onClick={handleSubmit}>Save</Button>
      </CardFooter>
    </Card>
    </div>
  );
}
