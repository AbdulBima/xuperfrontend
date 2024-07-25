"use client"

import {  useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface User {
  username: string;
}

interface UserPattern {
  userId: string;
  totalPurchases: number;
  User: User;
}

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
  }[];
}

const UserPurchasesChart = () => {
  const [data, setData] = useState<ChartData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<UserPattern[]>('http://localhost:3000/api/analytics/userpatterns');
        const users = response.data.map(item => item.User.username);
        const purchases = response.data.map(item => item.totalPurchases);

        setData({
          labels: users,
          datasets: [
            {
              label: 'Total Purchases',
              data: purchases,
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        });
      } catch (error) {
        setError('Failed to fetch user purchase data');
      }
    };

    fetchData();
  }, []);

  return (
    <div className='flex items-center justify-center h-96 w-full'>
      {error ? <p className="text-red-500">{error}</p> : data && <Bar data={data} />}
    </div>
  );
};

export default UserPurchasesChart;
