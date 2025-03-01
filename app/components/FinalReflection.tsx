import React from 'react';

const FinalReflection = () => {
  const reflectionPoints = [
    {
      title: "Technical Implementation",
      content: "The technical implementation of these visualizations revealed how deeply encoding choices impact perception. The spiral map required interpolating yearly data to create smooth outward growth, which subtly exaggerated the impression of continuous expansion. Adjusting radius scaling had a profound effect—small multipliers made progress seem steady, while larger ones made it appear exponential. The heatmap, in contrast, was more structured, relying on a simple pivot transformation and color mapping, but its effectiveness hinged on careful decisions about sorting, axis labeling, and missing data treatment. These differences underscored that even the most basic technical choices shape the story a visualization tells.",
      type: "straightforward"
    },
    {
      title: "Surprising Discoveries",
      content: "What surprised me most was how small adjustments in encoding completely altered interpretation. Aggregation at the regional level made it seem like most places had strong adoption, but breaking data down to individual countries quickly shattered that illusion. The lack of a visible axis in the spiral map allowed regions to appear more uniformly successful than they were, while sorting the heatmap by final-year usage made disparities stark and impossible to ignore. Even something as minor as choosing a linear vs. logarithmic color scale could shift the focus from overall growth to inequality and stagnation. This experience reinforced that data visualization is not just about presentation—it is a powerful tool for framing narratives.",
      type: "difficult"
    },
    {
      title: "Ethical Analysis & Visualization",
      content: "Through this process, I came to see ethical visualization as the practice of balancing persuasion with transparency. No visualization is ever neutral—every choice, from color scale to data grouping, influences how viewers interpret patterns. Ethical responsibility lies not in avoiding persuasion altogether but in ensuring that the audience has the necessary context to critically assess the data. This means including reference points, avoiding misleading scales, and disclosing how data has been processed. Ethical visualization should reveal complexity rather than obscure it, encouraging viewers to question assumptions rather than accept a single, polished narrative.",
      type: "analysis"
    },
    {
      title: "Boundaries of \"Acceptable\" vs. \"Misleading\"",
      content: "The line between acceptable persuasion and misleading representation is thin but crucial. Sorting, color choices, and annotation can emphasize trends without distorting them, while removing axes, aggregating incompatible data, or selectively omitting key details crosses into manipulation. This project demonstrated that while persuasive visualization is not inherently unethical, its justifications must be clear. The best visualizations do not simply tell a story—they invite the audience to engage with the data, to question, and to uncover insights on their own. ",
      type: "boundaries"
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Final Reflection</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Across our two contrasting visualizations—the spiral that suggested "widespread, skyrocketing access" 
            and this heatmap that reveals stark inequalities—we've encountered the tension between persuasion 
            and honest communication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reflectionPoints.map((point, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-lg shadow-lg ${
                point.type === 'straightforward' ? 'bg-green-50' :
                point.type === 'difficult' ? 'bg-yellow-50' :
                point.type === 'analysis' ? 'bg-blue-50' :
                'bg-purple-50'
              }`}
            >
              <h3 className="text-xl font-semibold mb-3">{point.title}</h3>
              <p className="text-gray-700">{point.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FinalReflection; 