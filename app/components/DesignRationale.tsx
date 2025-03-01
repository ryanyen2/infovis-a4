import React from 'react';
import Image from 'next/image';

const DesignRationale = () => {
  const designChoices = [
    {
      title: "Sorting Countries by Final‐Year Usage (Lowest at the Top)",
      score: "+1.5 (moderately earnest)",
      rationale: "Placing the countries with the lowest final‐year usage at the top immediately reveals how many remain below the 50% (or any chosen) threshold. This makes it easy to see that, while some countries reach high adoption levels, a large portion do not.",
      effectiveness: "It emphasizes the inequality rather than obscuring it in alphabetical or random order.",
      challenges: "",
      alternative: ""
    },
    {
      title: "Color Encoding From Light (0%) to Red (100%)",
      score: "+2 (fully earnest)",
      rationale: "Using a YlOrRd (yellow–orange–red) palette is intuitive: light = low coverage, deep red = high coverage. There are no abrupt color saturations or hidden bins; we see the full gradient from 0–100%.",
      effectiveness: "A viewer can quickly spot that large swaths of the heatmap remain in lighter tones.",
      earnest: "No artificial or truncated color scale. I am not saturating at 50% or 60%. I show the true 0–100% range."
    },
    {
      title: "Annotating How Many Countries Are Below 50% in the Final Year",
      score: "+1 (somewhat earnest)",
      rationale: "The text \"X / Y countries < 50% in {year}\" draws attention to a specific threshold, making the takeaway immediate.",
      effectiveness: "This annotation directly addresses the concern: \"Yes, the global average might be high, but look, nearly half the countries are still under 50%!\"",
      challenges: "Some might argue it focuses only on 50% usage rather than other relevant cutoffs (like 20% or 80%). But 50% is a common \"majority\" marker."
    },
    {
      title: "Income Group Coloring of Country Labels",
      score: "+1.5 (moderately earnest)",
      rationale: "By coloring text for \"High income,\" \"Upper middle,\" \"Lower middle,\" and \"Low income,\" I underscore the relationship between economic classification and internet penetration.",
      effectiveness: "This is a fairly honest approach; we're shining a light on the connection between wealth and internet adoption.",
      alternative: "I considered grouping or clustering by region or continent, but income grouping is more closely tied to the idea of why usage might be low."
    },
    // {
    //   title: "Dashed \"50% Threshold\" Line Across the Plot",
    //   score: "+1 (somewhat earnest)",
    //   rationale: "The horizontal dashed line around the 50% row visually separates countries above or below that midpoint. This again emphasizes the core message: \"Here is a dividing line for basic majority usage.\"",
    //   challenges: "The line conceptually lumps everyone below 50% into one group, even though 0% vs. 49% is a big difference. Nonetheless, it's a straightforward way to highlight a key milestone."
    // }
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className='text-4xl font-bold mb-4'> Counterfactual Visualization </h1>
          <p className="text-lg text-gray-600">Below is an illustrative writeup explaining how this heatmap helps convey that global internet access is still limited and unequally distributed. It includes bullet‐pointed design decisions with deceptive scores, followed by a short reflection on the overall design process.</p>
          {/* <h2 className="text-3xl font-bold mb-4">Design Rationale & Key Decisions</h2> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative">
            <Image
              src="/imgs/heatmap_reordered_by_final.svg"
              alt="Counter Visualization"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>

          <div className="space-y-4">
            {designChoices.map((choice, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-2">{choice.title}</h3>
                <div className="text-blue-600 font-medium mb-3">Score: {choice.score}</div>
                <div className="space-y-3">
                  <p><span className="font-medium"></span> {choice.rationale}</p>
                  <p><span className="font-medium"></span> {choice.effectiveness}</p>
                  {/* {choice.challenges && (
                    <p><span className="font-medium">What Didn't Work:</span> {choice.challenges}</p>
                  )}
                  {choice.alternative && (
                    <p><span className="font-medium">Alternative Considered:</span> {choice.alternative}</p>
                  )} */}
                  {/* {choice.earnest && (
                    <p><span className="font-medium">Why Earnest:</span> {choice.earnest}</p>
                  )} */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignRationale; 