import Wallet from '../components/wallet';

export default function Dashboard() {
  return (
    <div className="w-full">
      <h1 className="font-bold text-pretty text-3xl border-b-orange-500 p-10">
        Dashboard
      </h1>
      <Wallet />
    </div>
  );
}
