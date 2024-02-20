import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { CardTitle, CardDescription, CardHeader, Card } from "@/components/ui/card";
import Navbar from "../HomeScreen/Components/Navbar";
import { useDispatch } from 'react-redux';
import { setTab } from '../../redux/features/currentTab';
import Footer from '../HomeScreen/Components/Footer';

function TherapySessionCard({ title, description, onClick }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4">
        <VideoIcon className="w-8 h-8" />
        <div className="grid gap-1">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
        <a className="ml-auto" href="#">
          <Button size="sm" onClick={
            ()=>{
              window.location.href="http://localhost:3000/react-rtc-demo"
            }
          }>Join Now</Button>
        </a>
      </CardHeader>
    </Card>
  );
}

export default function TherapyScreen() {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(setTab("therapy"))
    },[])
  // Dummy data for active sessions
  const activeSessions = [
    { id: 1, title: 'Session with Dr. Smith', description: 'A one-on-one session with Dr. Smith to discuss anxiety management.' },
    { id: 2, title: 'Group Therapy', description: 'Join a group therapy session to connect with others.' },
  ];

  // Dummy data for future sessions
  const futureSessions = [
    { id: 3, title: 'Session with Dr. Johnson', description: 'A one-on-one session with Dr. Johnson to discuss stress management.' },
  ];

  return (
    <div className="flex flex-col w-full min-h-screen">
      <Navbar />
      <main className="flex-1 overflow-y-auto mt-10 pb-6 md:pb-10">
        <div className="max-w-6xl w-full mx-auto grid gap-6 px-4 md:grid-cols-2 md:gap-8 md:px-6">
          {/* Active Sessions */}
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold">Active Sessions</h1>
            <p className="text-gray-500 dark:text-gray-400">Your active therapy sessions.</p>
            {activeSessions.map(session => (
              <TherapySessionCard
                key={session.id}
                title={session.title}
                description={session.description}
              />
            ))}
          </div>

          {/* Future Sessions */}
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold">Upcoming Sessions</h1>
            <p className="text-gray-500 dark:text-gray-400">Your upcoming therapy sessions.</p>
            {futureSessions.map(session => (
              <TherapySessionCard
                key={session.id}
                title={session.title}
                description={session.description}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}


function BellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}


function FrameIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="22" x2="2" y1="6" y2="6" />
      <line x1="22" x2="2" y1="18" y2="18" />
      <line x1="6" x2="6" y1="2" y2="22" />
      <line x1="18" x2="18" y1="2" y2="22" />
    </svg>
  )
}


function VideoIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 8-6 4 6 4V8Z" />
      <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
    </svg>
  )
}
