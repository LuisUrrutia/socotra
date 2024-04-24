export const QuoteCard = ({ cost }: { cost: number }) => {
  return (
    <div className="w-full flex flex-col rounded-lg text-card-foreground px-4 py-5 gap-4 shadow-[0_8px_10px_1px_rgb(0,0,0,0.14)] bg-primary-darker">
      <h2 className="text-xl">Auto Quote</h2>
      <div className="flex flex-col">
        <strong className="text-3xl">${cost}</strong>
        <span className="text-slate-400">per month</span>
      </div>
    </div>
  );
};
