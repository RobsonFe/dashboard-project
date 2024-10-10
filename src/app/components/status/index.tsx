'use client';
import expenses from '@/repository/expenses';
import gains from '@/repository/gains';
import CountUp from 'react-countup';
import Donut from '../charts/donut';

export default function Status() {
  const TotalEntradas = gains.reduce((total, gain) => {
    return total + parseFloat(gain.amount);
  }, 0);

  const TotalSaidas = expenses.reduce((result, expense) => {
    return result + parseFloat(expense.amount);
  }, 0);

  return (
    <div className="w-full flex gap-10 flex-wrap justify-center p-10">
      <div className=" flex flex-col w-fit bg-slate-500 rounded-[8px] p-5">
        <span className="flex gap-2">Muito bem! 😃</span>
        <span>A sua carteira está positiva!</span>

        <p className="mt-20">Continue assim, considere investir o seu saldo</p>
      </div>
      <div className="flex flex-col w-fit bg-slate-500 rounded-[8px] gap-5 p-5">
        <span>Relação</span>
        <div className="flex">
          <div className="flex flex-col">
            <h5>
              <strong>R$ </strong>
              <CountUp
                end={TotalEntradas}
                separator="."
                decimal=","
                decimals={2}
              />
            </h5>
            <h5>
              <strong>R$ </strong>
              <CountUp
                end={TotalSaidas}
                separator="."
                decimal=","
                decimals={2}
              />
            </h5>
          </div>
          <Donut />
        </div>
      </div>
    </div>
  );
}
