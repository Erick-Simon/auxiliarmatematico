import React, { useEffect, useRef } from 'react';

// Chart.js is loaded from a CDN script in index.html, so we declare it here to satisfy TypeScript
declare const Chart: any;

interface InteractiveChartProps {
  data: {
    labels: (string | number)[];
    data: number[];
    xLabel: string;
    yLabel: string;
  };
}

const InteractiveChart: React.FC<InteractiveChartProps> = ({ data }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<any | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      if (ctx) {
        // Destroy previous chart instance if it exists
        if (chartRef.current) {
          chartRef.current.destroy();
        }

        chartRef.current = new Chart(ctx, {
          type: 'line',
          data: {
            labels: data.labels,
            datasets: [
              {
                label: `${data.yLabel} vs ${data.xLabel}`,
                data: data.data,
                borderColor: 'rgb(34, 211, 238)', // cyan-400
                backgroundColor: 'rgba(34, 211, 238, 0.2)',
                tension: 0.1,
                borderWidth: 2,
                pointBackgroundColor: 'rgb(203, 213, 225)', // slate-300
                pointRadius: 5,
                pointHoverRadius: 7,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                backgroundColor: 'rgba(15, 23, 42, 0.8)', // slate-900
                titleColor: 'rgb(203, 213, 225)', // slate-300
                bodyColor: 'rgb(148, 163, 184)', // slate-400
                borderColor: 'rgb(51, 65, 85)', // slate-700
                borderWidth: 1,
              },
            },
            scales: {
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: data.yLabel,
                  color: 'rgb(148, 163, 184)', // slate-400
                },
                grid: {
                  color: 'rgba(51, 65, 85, 0.5)', // slate-700
                },
                ticks: {
                    color: 'rgb(148, 163, 184)', // slate-400
                }
              },
              x: {
                title: {
                  display: true,
                  text: data.xLabel,
                  color: 'rgb(148, 163, 184)', // slate-400
                },
                grid: {
                  color: 'rgba(51, 65, 85, 0.5)', // slate-700
                },
                ticks: {
                    color: 'rgb(148, 163, 184)', // slate-400
                }
              },
            },
          },
        });
      }
    }

    // Cleanup function to destroy the chart on component unmount
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [data]);

  return (
    <div className="relative h-64 w-full my-4 bg-slate-900/70 p-2 rounded-md">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default InteractiveChart;
