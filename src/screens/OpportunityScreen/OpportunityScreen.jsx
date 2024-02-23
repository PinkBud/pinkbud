import React, { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Navbar from '../HomeScreen/Components/Navbar';
import { useDispatch } from 'react-redux';
import { setTab } from '../../redux/features/currentTab';
import Footer from '../HomeScreen/Components/Footer';
import axios from 'axios';

export default function WomenOpportunitiesScreen() {
    const dispatch = useDispatch();
    const [events, setEvents] = useState([]);

    useEffect(() => {
        dispatch(setTab("oppo"));
        fetchEvents();
    }, []);

    const fetchEvents = () => {
        axios.get('http://127.0.0.1:8000/events/')
            .then(response => {
                setEvents(response.data);
            })
            .catch(error => {
                console.error('Error fetching events:', error);
            });
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex h-20 items-center border-b px-4 md:px-6">
                <a href="/" className="font-bold text-xl">
                    Women Opportunities
                </a>
                <nav className="flex-1 ml-6">
                    <form className="flex w-full max-w-md">
                        <Input className="rounded-l-md bg-gray-200  " placeholder="Search job openings and workshops" type="search" />
                        <Button className="rounded-r-md bg-primary mx-2 hover:bg-secondary transition-all duration-300 ease-in-out text-white" type="submit" variant="primary">
                            Search
                        </Button>
                    </form>
                </nav>
            </div>
            <div className="container flex-1 py-6 lg:py-12 grid gap-6 px-4 md:px-6">
                <div className="space-y-4">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Workshops & Opportunities</h1>
                    <p className="text-gray-500 md:text-lg lg:text-base dark:text-gray-400">
                        Explore the latest job opportunities for women.
                    </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                    {events.map(event => (
                        <OpportunityCard
                            key={event.title}
                            title={event.title}
                            company={event.contact_no}
                            description={event.description}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

function OpportunityCard({ title, company, description }) {
    return (
        <div className="bg-white shadow-md rounded-md p-6">
            <h3 className="text-2xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-500 mb-2">{company}</p>
            <p className="text-sm leading-relaxed mb-4">{description}</p>
            <button href="#" className="bg-primary  px-2 py-1 rounded text-white hover:bg-secondary">
                View Details
            </button>
        </div>
    );
}
