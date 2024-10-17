import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const CategorySearch = () => {
  return (
    <div className="mb-14 items-center flex flex-col gap-2">
      <h2 className="text-4xl font-bold tracking-wide">
        Search <span className="text-primary">Doctors</span>
      </h2>
      <h2 className="text-gray-500 text-lg ">
        Search Your Doctor and Book Appointment in one click!
      </h2>
      <div className="flex w-full max-w-sm items-center space-x-2 mt-2">
        <Input type="text" placeholder="Search..." />
        <Button type="submit">
          <Search className="h-4 w-4 mr-1"/>
          Search
        </Button>
      </div>
    </div>
  );
};

export default CategorySearch;
