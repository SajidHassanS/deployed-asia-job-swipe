"use client"
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BsBookmarkDash } from "react-icons/bs";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import PaginationComponent from "./Pagination";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { MdGridView } from "react-icons/md";
import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Define an interface for the shape of each job object
interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  logo: string;
  tags: string[];
  categories?: string[];
}

// Specify the type of the jobs parameter using the Job interface
const JobListings: React.FC<{ jobs: Job[] }> = ({ jobs }) => {
  return (
    <div className="md:w-3/4 p-4">
      <div className="flex justify-between items-center mb-2">
        <div className="">
          <h2 className="lg:text-3xl md:text-2xl text-xl font-bold ">
            All Jobs
          </h2>
        </div>
        <div className="flex  items-center  gap-3">
          <div>
            <p>Sort by: </p>
          </div>
          <div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger> Most relevant</AccordionTrigger>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="h-5 border border-black hidden md:block"></div>
          <div className="hidden md:block">
            <MdGridView />
          </div>
        </div>
      </div>
      <div className="md:mb-10">
        <p>Showing {jobs.length} results</p>
      </div>
      {jobs.map((job) => (
        <Card key={job.id} className="mb-5 p-4">
          <div className="">
            <div className=" bg-white  ">
              <div className="flex justify-between mb-5 md:mb-2">
                <div className="flex items-center">
                  <Image
                    width={61}
                    height={61}
                    src={job.logo}
                    alt={job.company}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h3 className="md:text-xl text-lg font-bold">
                      {job.title}
                    </h3>
                    <div className="flex md:gap-3 items-center">
                      <p className="text-sm text-gray-600">
                        {job.company} • {job.location}
                      </p>
                      <div className="md:block hidden">
                        <IoCheckmarkDoneSharp className="text-blue" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:mt-3">
                  <div className="md:hidden mb-2 flex justify-end">
                    <BsBookmarkDash className="text-blue " size={20} />
                  </div>
                  <p className="md:text-xl text-md font-bold">{job.salary}</p>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex flex-wrap gap-3 md:ml-20  items-center mt-2">
                  {/* Render buttons for different categories */}
                  {job.tags.map(tag => (
                    <Button asChild className="rounded-[30px] " size={"custom"} key={tag}>
                      <Link
                        className="bg-sky-300 text-blue text-sm md:px-4 md:py-2"
                        href="/signin"
                      >
                        {tag}
                      </Link>
                    </Button>
                  ))}
                  <div className="hidden md:block h-5 border border-lightgrey"></div>
                  {job.categories?.map(category => (
                    <Button asChild className="rounded-[30px]" size={"custom"} key={category}>
                      <Link
                        className="border border-darkGrey text-darkGrey text-sm px-4 py-2"
                        href="/signin"
                      >
                        {category}
                      </Link>
                    </Button>
                  ))}
                  <div className="md:block hidden">
                    <BsBookmarkDash className="text-blue " size={30} />
                  </div>
                </div>

                <div className="flex flex-col mt-2">
                  <Dialog>
                    <DialogTrigger>
                      <Button
                        className="bg-blue text-white text-sm px-8 py-2 rounded-md"
                      >
                        Apply
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-white ">
                      <DialogHeader className="bg-blue px-16 py-5 flex text-center ">
                        <DialogTitle className="text-white text-3xl">Your Profile Is Incomplete</DialogTitle>
                      </DialogHeader>
                      <DialogDescription className="px-16 ">
                        <h1 className="modaltext text-2xl">Complete your Profile to Apply for job!</h1>
                        <p className="text-signininput4">Click on button to complete your profile.</p>
                      </DialogDescription>
                      <div className="px-16 pb-10">
                        <Button className="w-full px-24 py-6" asChild size={"custom"}>
                          <Link
                            className="bg-blue text-white text-sm  rounded-md"
                            href="/myprofile"
                          >
                            Go to My Profile
                          </Link>
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <Button asChild size={"custom"}>
                    <Link
                      className="text-red-500 text-sm px-4 py-2 rounded-md"
                      href="/signin"
                    >
                      Decline
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      ))}

      <PaginationComponent />
    </div>
  );
};

export default JobListings;