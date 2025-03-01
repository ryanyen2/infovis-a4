'use client';

import { Scrollama, Step } from 'react-scrollama';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface StepData {
  data: number;
  title: string;
  content: string;
  image: string;
  deceptiveScore: number;
  overlays?: {
    text: string;
    position: { x: number; y: number };
  }[];
}

export default function InternetAdoptionStory() {
  const [currentStepIndex, setCurrentStepIndex] = useState<number | null>(null);

  const steps: StepData[] = [
    {
      data: 1,
      title: "Eye‐Catching Spiral Layout With No Explicit Axis",
      content: "Not showing a standard radial axis for usage means the viewer assumes the outer boundary is close to \"100%,\" even if in reality the spiral only reached 40–50%. The aesthetic swirl distracts from the actual numerical scale. Yes, the swirl is memorable and suggests upward momentum, but, once you add real axis lines or usage ticks, the illusion quickly breaks and reveals that some spirals remain relatively small.",
      image: '/imgs/a4_spiral_map.svg',
      deceptiveScore: -2,
      overlays: [
        {
          text: "No explicit axis shown",
          position: { x: 30, y: 25 }
        },
        {
          text: "Aesthetic swirl distracts from scale",
          position: { x: 60, y: 70 }
        }
      ]
    },
    {
      data: 2,
      title: "Spiral Aggregation by Region",
      content: "By aggregating country‐level data into a single regional average, I mask the huge disparities within each region (e.g., Singapore vs. Cambodia both in \"East Asia & Pacific\"). It bolsters a feel‐good message: \"Look, the spiral is big, so the region is near universal coverage!\" It's visually striking—big spirals suggest big progress. But, it conceals outliers (countries < 20% usage).",
      image: '/imgs/country_level_internet_usage.svg',
      deceptiveScore: -1.5,
      overlays: [
        {
          text: "Since the original chart shows some countries with low usage",
          position: { x: 45, y: 60 }
        },
        {
          text: "I changed the aggregation method to mask disparities...",
          position: { x: 30, y: 30 }
        }
      ]
    },
    {
      data: 3,
      title: "Choropleth → Bubble Plot",
      content: "Switching from traditional choropleth to bubble plot like spiral visualization potentially impede readers to make fare comparison between regions (or countries). For example, it is difficult for use to tell which spiral is larger in specific years, some big bubble also occlude the small bubble and giving reader the impression that the world is all experiencing rapid growth. Also, the radius is calculated through: radius = (usage_val / max_usage) * spiral_scale * (1 + time_factor). which with the spiral_scale=15 that exaggerate the actual scale.",
      image: '/imgs/global_internet_usage_choropleth.svg',
      deceptiveScore: -2,
      overlays: [
        {
          text: "So readers can't compare sizes accurately",
          position: { x: 45, y: 60 }
        },
        {
          text: "I changed from the choropleth to the bubble plot",
          position: { x: 30, y: 30 }
        }
      ]
    }
  ];

  const onStepEnter = ({ data }: { data: number }) => {
    setCurrentStepIndex(data - 1);
  };

  return (
    <div className="relative flex flex-row items-start w-full max-w-7xl mx-auto mt-20">
      <div className="w-2/3 sticky top-0 flex items-center justify-center p-4 h-screen">
        <AnimatePresence mode="wait">
          {currentStepIndex !== null && (
            <motion.div
              key={currentStepIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative w-full aspect-square"
            >
              <div className="relative w-full h-full">
                {steps[currentStepIndex].data > 1 && <span className="text-lg text-gray-700"> The Original Chart: </span>}
                <Image
                  src={steps[currentStepIndex].image}
                  alt={steps[currentStepIndex].title}
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                />
                
                {steps[currentStepIndex].overlays?.map((overlay, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="absolute text-white bg-black/75 px-4 py-2 rounded-lg shadow-lg text-sm pointer-events-none"
                    style={{
                      left: `${overlay.position.x}%`,
                      top: `${overlay.position.y}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    {overlay.text}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      <div className="w-1/3">
        <Scrollama offset={0.5} onStepEnter={onStepEnter}>
          {steps.map((step, index) => (
            <Step data={step.data} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg p-6 mb-80 mx-4"
              >
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold">{step.title}</h2>
                  <div className={`px-3 py-1 rounded-full text-white text-xs ${
                    step.deceptiveScore <= -2 ? 'bg-red-500' :
                    step.deceptiveScore <= -1 ? 'bg-orange-500' :
                    'bg-yellow-500'
                  }`}>
                    Deceptive Score: {step.deceptiveScore}
                  </div>
                </div>
                <p className="text-gray-700">{step.content}</p>
              </motion.div>
            </Step>
          ))}
        </Scrollama>
      </div>
    </div>
  );
} 