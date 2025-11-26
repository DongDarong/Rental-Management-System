import React, { useRef, useEffect } from 'react';
import { Chart, registerables } from './chartData.js';

// Register all Chart.js components (tree-shaking will remove unused ones in production)
Chart.register(...registerables);

/**
 * A reusable wrapper component to render a Chart.js chart.
 * @param {object} props
 * @param {string} props.title - The title to display on the card header.
 * @param {object} props.chartConfig - The configuration object (type, data, options) for Chart.js.
 * @param {string} [props.containerClassName] - Optional classes for the div wrapping the canvas.
 */
function ChartCard({ title, chartConfig, containerClassName = "w-full h-80" }) {
  // useRef to get a direct reference to the <canvas> element
  const canvasRef = useRef(null);

  useEffect(() => {
    // Ensure the canvas element is available and we have a config
    if (!canvasRef.current || !chartConfig) {
      return;
    }

    const ctx = canvasRef.current.getContext('2d');
    
    // Create a new chart instance
    const chartInstance = new Chart(ctx, chartConfig);

    // Cleanup function: This runs when the component unmounts
    // or when the chartConfig prop changes.
    return () => {
      chartInstance.destroy();
    };
  }, [chartConfig]); // Re-run this effect only if the chartConfig prop changes

  return (
    <div className="bg-white p-6 rounded-xl shadow-xl">
      <h3 className="text-lg font-semibold text-primary-dark mb-4 border-b pb-2">{title}</h3>
      {/* The div that controls the canvas size */}
      <div className={containerClassName}>
        {/* The canvas element that Chart.js will draw on */}
        <canvas ref={canvasRef}></canvas>
      </div>
    </div>
  );
}

export default ChartCard;