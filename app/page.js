"use client";
import { Button } from "@/components/ui/button";
import Hero from "./_components/Hero";
import CategorySearch from "./_components/CategorySearch";
import DoctorList from "./_components/DoctorList";
import GlobalApi from "./_utils/GlobalApi";
import { useEffect, useState } from "react";

export default function Home() {
  const [popularDoctors, setPopularDoctors] = useState([]);
  useEffect(() => {
    getPopularDoctors();
  }, []);
  const getPopularDoctors = () => {
    GlobalApi.getDoctorList().then((resp) => {
      console.log(resp, "doctors");
      setPopularDoctors(resp?.data?.data);
    });
  };
  return (
    <div>
      {/* Hero Section */}
      <Hero />
      {/* Category Search for doctors */}
      <CategorySearch />
      {/* Popular Doctors */}
      <DoctorList doctors={popularDoctors} />
    </div>
  );
}
