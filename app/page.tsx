import Image from "next/image";
import InternetAdoptionStory from './components/InternetAdoptionStory';
import FixedBackgroundStory from './components/FixedBackgroundStory';
import DesignRationale from './components/DesignRationale';
import FinalReflection from './components/FinalReflection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="relative">
        {/* Header Section */}
        <div className="relative z-20 bg-white">
          <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-center mb-8 pt-8 pb-4">
              The World is Rapidly Achieving Widespread Internet Usage
            </h1>
            <p className="text-lg mb-2 pl-10"> Vis & Society (Spring 2025) Assignment 4: Persuasive or Deceptive Visualization? </p>
            <p className="text-lg mb-8 pl-10">Author: Ryan Yen</p>
            <div className="flex mx-auto flex-row mb-20">
              <p className="mt-8 mb-8 text-lg w-1/2 mx-auto">
                A total of 5.56 billion people around the world were using the internet at the start of 2025, equivalent to 67.9 percent of the world's total population. This impressive figure means that internet users are now a "supermajority", with more than twice as many people using the internet as not
                <a href="https://datareportal.com/global-digital-overview#:~:text=A%20total%20of%205.56%20billion,using%20the%20internet%20as%20not." target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-700"> (source). </a>
                From 1990 to 2020, the global internet usage has reportedly grown by an astonishing <span className="font-bold text-blue-500"> 30.69% (with a notably high standard deviation of 38.53%). </span>
                On the surface, these numbers imply a remarkable surge in connectivity: more and more people can go online, access digital services, and participate in the global economy.
              </p>
              <Image src="/imgs/internet_boost_global.png" alt="Global Internet Usage" width={1000} height={1000} className="w-2/5 mx-auto h-1/2" />
            </div>
          </div>
        </div>

        {/* Fixed Background Story Section */}
        <section className="relative h-[600vh]">
          <FixedBackgroundStory />
        </section>

        {/* Regular Scrollytelling Section */}
        <section className="relative z-20 bg-white pt-20">
          <h2 className="text-3xl font-bold mb-4 text-center px-4">A Step-by-Step Reveal of Deceptive Design Choices</h2>
          <p className="mb-4 text-center px-4">Here's how each design choice shaped (and sometimes distorted) the audience's perception: </p>
          <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <InternetAdoptionStory />
          </div>
        </section>

        {/* Design Rationale Section */}
        <section className="relative z-20 bg-white">
          <DesignRationale />
        </section>

        {/* Final Reflection Section */}
        <section className="relative z-20">
          <FinalReflection />
        </section>
      </div>
    </main>
  );
}
