function CategoryLink({ icon, title }: { icon: string; title: string }) {
  return (
    <div className="flex items-center justify-center flex-col |  cursor-pointer | group outline-0 focus:outline-0 active:scale-95 duration-150">
      <div
        className={`hover:shadow-blue | w-20 h-20 | mb-3 flex items-center justify-center | rounded-[10px] group-hover:border border border-gray-200 group-hover:border-[#30A8F7] group-hover:filter-(--active--icon)`}
      >
        <img src={icon} className="h-12 | filter " alt="#" />
      </div>

      <p className={`text-xs text-black text-center group-hover:text-[#30A8F7]`}>{title}</p>
    </div>
  );
}

export default CategoryLink;
