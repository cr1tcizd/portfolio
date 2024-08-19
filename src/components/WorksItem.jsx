const WorksItem = ({ work, onClick, setModal, setCurrentItem }) => {
  const handleClickWorksItem = () => {
    setModal(true);
    setCurrentItem(work);
  };

  return (
    <div
      className="flex flex-col relative w-[400px] bg-blue-300 px-[15px] pt-[15px] rounded-[6px] transition hover:scale-[105%] hover:shadow-xl cursor-pointer"
      onClick={handleClickWorksItem}
    >
      <img className="rounded-[6px]" src={work.photo[0]} alt="" />
      <div className="text-neutral-800 place-self-center py-[10px] text-[18px] font-medium">
        {work.name}
      </div>
    </div>
  );
};

export default WorksItem;
