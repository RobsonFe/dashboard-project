'use client';
import expenses from '@/repository/expenses';
import gains from '@/repository/gains';
import { ApexOptions } from 'apexcharts';
import { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

interface data {
  series: number[];
  labels: string[];
}

const Donut: React.FC = () => {
  const [state, setState] = useState<data>({
    series: [],
    labels: [],
  });

  useEffect(() => {
    const TotalSaidas = expenses.reduce((result, expense) => {
      return result + parseFloat(expense.amount);
    }, 0);

    const TotalEntradas = gains.reduce((total, gain) => {
      return total + parseFloat(gain.amount);
    }, 0);

    setState({
      series: [TotalEntradas, TotalSaidas],
      labels: ['Entrada', 'Saida'],
    });
  }, []);

  const options: ApexOptions = {
    chart: {
      fontFamily: 'Satoshi, sans-serif',
      type: 'donut',
    },
    colors: ['#3C50E0', '#6577F3'],
    labels: state.labels,
    legend: {
      show: false,
      position: 'bottom',
    },
    plotOptions: {
      pie: {
        donut: {
          size: '65%',
          background: 'transparent',
        },
      },
    },
    dataLabels: {
      enabled: true,
      formatter(val, opts) {
        return 'R$ ' + opts.w.config.series[opts.seriesIndex].toFixed(2); // Função para formatar o dados do gráfico.
      },
    },
    tooltip: {
      y: {
        formatter(val, opts) {
          return 'R$ ' + val.toFixed(2); // Função para formatar o dados do gráfico.
        },
      },
    },

    responsive: [
      {
        breakpoint: 2600,
        options: {
          chart: {
            width: 380,
          },
        },
      },
      {
        breakpoint: 640,
        options: {
          chart: {
            width: 200,
          },
        },
      },
    ],
  };
  return (
    <div className="col-span-12 rounded-sm border border-stroke  px-5 pb-5 pt-7.5 shadow-default sm:px-7.5 xl:col-span-5">
      <div className="mb-2">
        <div id="chartThree" className="mx-auto flex justify-center">
          <ReactApexChart
            options={options}
            series={state.series}
            type="donut"
          />
        </div>
      </div>
    </div>
  );
};

export default Donut;
