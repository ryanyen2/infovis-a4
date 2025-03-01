'use client';

import { Scrollama, Step } from 'react-scrollama';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface StepData {
    data: number;
    title: string;
    content: string;
    zoomTo?: {
        scale: number;
        x: number;
        y: number;
    };
}

export default function FixedBackgroundStory() {
    const [currentStepIndex, setCurrentStepIndex] = useState<number | null>(null);

    const steps: StepData[] = [
        {
            data: 1,
            title: "A Spiraling Trend from 1990 to 2019",
            content: "To illustrate this exciting trend, we built a spiral chart on a world map (see the figure below). Each region (e.g. North America, East Asia & Pacific, Sub‐Saharan Africa, etc.) is represented by a spiral that expands over time (1990–2019) according to the region's average internet usage (% of population). The deeper the spiral's color (blues moving from light to dark), the later the year. As each region's spiral fans outward, it visually conveys 'growth' and suggests that connectivity has soared throughout the world.",
            zoomTo: {
                scale: 1.0,
                x: 0,
                y: 0
            }
        },
        {
            data: 2,
            title: "North America's Digital Leadership",
            content: "North America has consistently led the way in internet adoption, showing rapid growth from the early stages. Similarly to North America, Europe & Central Asia, and East Asia & Pacific have huge spirals by 2019—seemingly near 100%.",
            zoomTo: {
                scale: 2.0,
                x: 25,
                y: 20
            }
        },
        {
            data: 3,
            title: "Rapid Growth in Other Regions",
            content: "Other regions (e.g., East Asia and Arabic countries) show relatively sparse spirals, indicating large relative growth in recent years.",
            zoomTo: {
                scale: 2.3,
                x: -75,
                y: 35
            }
        },
        {
            data: 4,
            title: "Small But Significant Growth",
            content: "While Africa has relatively smaller spirals, it has shown significant growth in recent years...... or is it?",
            zoomTo: {
                scale: 2.3,
                x: -25,
                y: -5
            }
        },
        {
            data: 5,
            title: "The Reality",
            content: "Let's add the actual adoption rates to the map as x axis. We can see that most countries in Africa are below 40% adoption rates.",
            zoomTo: {
                scale: 2.5,
                x: -25,
                y: -5
            }
        },
        {
            data: 6,
            title: "In Fact...",
            content: "When we zoom out and look at the global picture with the actual adoption rates (added x axis), we can see that not just Africa, but Latin America and South Asia are also still struggling to reach 70% adoption rates.",
            zoomTo: {
                scale: 1.0,
                x: 0,
                y: 0
            }
        }
    ];

    const onStepEnter = ({ data }: { data: number }) => {
        setCurrentStepIndex(data - 1);
    };

    return (
        <div className="relative min-h-screen mt-20">
            <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center">
                <motion.div
                    className="relative w-full h-full"
                    animate={currentStepIndex !== null ? {
                        scale: steps[currentStepIndex].zoomTo?.scale || 1,
                        x: `${steps[currentStepIndex].zoomTo?.x || 0}%`,
                        y: `${steps[currentStepIndex].zoomTo?.y || 0}%`,
                    } : {}}
                    transition={{ duration: 0.5 }}
                >
                    <Image
                        src={currentStepIndex && currentStepIndex > 3 ? "/imgs/a4_spiral_map.svg" : "/imgs/a4_spiral_map_no_scale.svg"}
                        alt="Spiral Map"
                        fill
                        style={{ objectFit: 'contain' }}
                        priority
                    />
                </motion.div>
            </div>

            <div className="relative z-10">
                <Scrollama offset={0.5} onStepEnter={onStepEnter}>
                    {steps.map((step, index) => (
                        <Step data={step.data} key={index}>
                            <div
                                // initial={{ opacity: 0, y: 20 }}
                                // whileInView={{ opacity: 1, y: 0 }}
                                // transition={{ duration: 0.5 }}
                                className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg p-6 mb-[80vh] mx-4 max-w-xl ml-auto mr-8"
                            >
                                <h2 className="text-2xl font-bold mb-4">{step.title}</h2>
                                <p className="text-gray-700">{step.content}</p>
                            </div>
                        </Step>
                    ))}
                </Scrollama>
            </div>
        </div>
    );
} 