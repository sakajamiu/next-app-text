interface Props {
  title: string;
  subtitle: string;
}

const Column = ({ title, subtitle }: Props) => {
  return (
    <div className="space-y-2 mt-[1rem] text-sm leading-[1.25rem]">
      <p className="text-[#63829e] ">{title}</p>
      <p className="text-white font-[500] capitalize">{subtitle}</p>
    </div>
  );
};

export default Column;
