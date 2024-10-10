export default function Wallet() {
  return (
    <div className="flex gap-10 justify-center p-10 flex-wrap">
      <div
        id="entradas"
        className=" flex w-[350px] h-[150px] flex-col border-none bg-slate-500 rounded-[15px] p-5"
      >
        <p className="font-bold">Entradas</p>
        <span className="font-bold text-2xl">R$ 5.000,00</span>
        <p className="mt-5 text-sm">
          Última movimentação em 18/07/2020 ás 11h40
        </p>
      </div>

      <div
        id="saidas"
        className=" flex w-[350px] h-[150px] flex-col border-none bg-slate-500 rounded-[15px] p-5"
      >
        <p className="font-bold">Saídas</p>
        <span className="font-bold text-2xl">R$ 4.850,00</span>
        <p className="mt-5 text-sm">
          Última movimentação em 18/07/2020 ás 11h40
        </p>
      </div>

      <div
        id="saldo"
        className=" flex w-[350px] h-[150px] flex-col border-none bg-slate-500 rounded-[15px] p-5"
      >
        <p className="font-bold">Saldo</p>
        <span className="font-bold text-2xl">R$ 150,00</span>
        <p className="mt-5 text-sm">
          Valor atualizado com base nas entradas e saidas
        </p>
      </div>
    </div>
  );
}
