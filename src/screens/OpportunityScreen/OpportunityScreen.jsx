import React, { useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Navbar from '../HomeScreen/Components/Navbar';
import { useDispatch } from 'react-redux';
import { setTab } from '../../redux/features/currentTab';
import Footer from '../HomeScreen/Components/Footer';

export default function WomenOpportunitiesScreen() {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(setTab("oppo"))
    },[])
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
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Job Openings</h1>
          <p className="text-gray-500 md:text-lg lg:text-base dark:text-gray-400">
            Explore the latest job opportunities for women.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <OpportunityCard
            title="Senior Software Engineer"
            company="Acme Inc"
            description="We're looking for an experienced software engineer to join our team. The ideal candidate is a self-starter with a passion for technology and innovation."
          />
          <OpportunityCard
            title="Marketing Coordinator"
            company="Marketing Pros"
            description="We're seeking a detail-oriented and creative individual to join our marketing team as a coordinator. This role involves supporting various marketing initiatives and requires excellent communication and organizational skills."
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Upcoming Workshops</h2>
          <p className="text-gray-500 md:text-lg lg:text-base dark:text-gray-400">
            Register for workshops designed to empower women in the workplace.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <OpportunityCard
            title="Leadership Development Workshop"
            company="Women in Business"
            description="Join us for a half-day workshop focused on developing leadership skills. Participants will learn about effective communication, decision-making, and team management."
          />
          <OpportunityCard
            title="Digital Marketing Masterclass"
            company="Marketing Academy"
            description="Learn the latest trends and best practices in digital marketing from industry experts. This full-day masterclass covers social media marketing, content strategy, SEO, and more."
          />
        </div>
      </div>
      <Footer/>
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
