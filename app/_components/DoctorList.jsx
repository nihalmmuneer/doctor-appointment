import Image from "next/image";
import React from "react";

const DoctorList = ({ doctors }) => {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold mb-2  p-5">Popular Doctors</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-2">
        {doctors &&
          doctors.map(
            (doctor, index) =>
              index < 8 && (
                <div
                  key={index}
                  className="border-[1px] p-3 rounded-lg hover:border-primary hover:shadow-md"
                >
                  <Image
                    src={doctor?.image?.url}
                    alt={doctor?.Name}
                    width={500}
                    height={200}
                    className="h-[260px] w-full object-cover rounded-lg"
                  />
                  <div className="mt-2 flex items-baseline flex-col gap-1">
                    <h2 className="font-bold text-xs bg-blue-100 text-primary rounded-full  p-2">
                      {doctor?.categories[0]?.Name}
                    </h2>
                    <h2 className="font-bold">{doctor.Name}</h2>
                    <h2 className="text-xs text-primary font-bold">
                      {doctor?.Year_of_Experience}years
                    </h2>
                    <h2 className="text-gray-500 text-sm line-clamp-1">
                      {doctor.Address}
                    </h2>
                    <h2 className=" cursor-pointer text-primary w-full text-center mt-2 border-[1px] p-2 px-3 text-xs font-bold hover:bg-blue-500 hover:text-white border-primary rounded-full">
                      Book Now
                    </h2>
                  </div>
                </div>
              )
          )}
      </div>
    </div>
  );
};

export default DoctorList;
