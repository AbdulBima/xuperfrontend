"use client"

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

interface SalesTrend {
  month: string;
  totalSales: number;
}

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
    fill: boolean;
  }[];
}

const MonthlySalesChart = () => {
  const [data, setData] = useState<ChartData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<SalesTrend[]>('http://localhost:3000/api/analytics/salestrends');
        const months = response.data.map(item => item.month);
        const sales = response.data.map(item => item.totalSales);

        setData({
          labels: months,
          datasets: [
            {
              label: 'Total Sales',
              data: sales,
              backgroundColor: 'rgba(153, 102, 255, 0.2)',
              borderColor: 'rgba(153, 102, 255, 1)',
              borderWidth: 1,
              fill: true,
            },
          ],
        });
      } catch (error) {
        setError('Failed to fetch monthly sales data');
      }
    };

    fetchData();
  }, []);

  return (
    <div className='flex items-center justify-center h-96 w-full'>
      {error ? <p className="text-red-500">{error}</p> : data && <Line data={data} />}
    </div>
  );
};

export default MonthlySalesChart;
