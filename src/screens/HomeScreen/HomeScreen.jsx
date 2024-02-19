import React from "react";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import { law_data, opportunity_data, therapy_data } from "./data";

const HomeScreen = () => {
  return (
    <div className="flex flex-col min-h-screen w-full bg-background">
      <Navbar />
      <div className="w-full flex flex-col items-center mt-16 px-10">
        <div className="">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Helping Women Heal & Thrive
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Providing support, resources, and opportunities for women who have
            experienced abuse.
          </p>
          <div className="flex justify-center mt-10">
            <button className="bg-primary p-2 rounded text-white">Explore More</button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center space-10 py-10 px-10 md:px-24 gap-3">
        <Card imgUrl={therapy_data.imageUrl} description={therapy_data.description} title={therapy_data.title} redirectUrl={therapy_data.redirectUrl}/>
        <Card imgUrl={opportunity_data.imageUrl} description={opportunity_data.description} title={opportunity_data.title} redirectUrl={opportunity_data.redirectUrl}/>
        <Card imgUrl={law_data.imageUrl} description={law_data.description} title={law_data.title} redirectUrl={law_data.redirectUrl}/>
      </div>
    </div>
  );
};

export default HomeScreen;
