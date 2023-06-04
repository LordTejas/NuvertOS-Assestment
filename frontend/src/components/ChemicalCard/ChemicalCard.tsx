interface ChemicalCardProps {
  name: string;
  image: string;
  description: string;
}

const ChemicalCard = (props: ChemicalCardProps) => {
  return (
    <section className="w-full h-full flex flex-col items-center cursor-pointer border-[1px] border-neutral-200 rounded-xl shadow-md overflow-hidden bg-white ease-in duration-300">
  {/* Card Image Component */}
  <div className="w-full h-2/5 lg:h-1/2 border-b-[1px] border-neutral-400">
    <img
      src={props.image}
      alt="chemical"
      className="w-full h-full object-fill"
    />
  </div>

  {/* Card Detail Component */}
  <div className="w-full h-3/5 lg:h-1/2 box-border flex flex-col justify-start gap-2 p-2 bg-white text-black">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-normal">
        {props.name}
      </h1>
      <p className="max-h-[6em] md:text-md text-gray-500 overflow-hidden text-ellipsis">{props.description}</p>
  </div>
</section>
  );
};

export default ChemicalCard;
