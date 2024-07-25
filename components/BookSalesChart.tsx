"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

interface BookSale {
  genre: string;
  title: string;
  author: string;
  price: number;
  totalQuantity: string;
}

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
    borderColor: string[];
    borderWidth: number;
  }[];
}

const BookSalesChart = () => {
  const [data, setData] = useState<ChartData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<BookSale[]>('http://localhost:3000/api/analytics/topbooks');
        
        if (Array.isArray(response.data)) {
          const genres = response.data.map(item => item.genre);
          const quantities = response.data.map(item => parseInt(item.totalQuantity, 10)); // Convert to number

          setData({
            labels: genres,
            datasets: [
              {
                label: 'Total Quantity',
                data: quantities,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
              },
            ],
          });
        } else {
          setError('Unexpected response format');
        }
      } catch (error) {
        setError('Failed to fetch book sales data');
      }
    };

    fetchData();
  }, []);

  return (
    <div className='flex items-center justify-center h-96 w-full'>
      {error ? <p className="text-red-500">{error}</p> : data ? <Bar data={data} /> : <p>Loading...</p>}
    </div>
  );
};

export default BookSalesChart;
