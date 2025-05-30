function CategoriesGrid() {
  return (
    <section>
      <h3 className="text-xl font-bold pb-5">Категория:</h3>
      <div className="categories | grid grid-cols-4 gap-5">
        <div className="category | flex items-center flex-col | click:scale">
          <div className="img | bg-[#071f380d] flex items-center justify-center | aspect-square p-3 | rounded-[7px]">
            <img
              src="/images/c1.png"
              alt="category__image"
              className="h-full object-contain"
            />
          </div>
          <p className="font-bold mt-2 | text-center">Телефоны</p>
        </div>
        <div className="category | flex items-center flex-col | click:scale">
          <div className="img | bg-[#071f380d] flex items-center justify-center | aspect-square p-3 | rounded-[7px]">
            <img
              src="/images/c1.png"
              alt="category__image"
              className="h-full object-contain"
            />
          </div>
          <p className="font-bold mt-2 | text-center">Фотоаппараты</p>
        </div>{" "}
        <div className="category | flex items-center flex-col | click:scale">
          <div className="img | bg-[#071f380d] flex items-center justify-center | aspect-square p-3 | rounded-[7px]">
            <img
              src="/images/c1.png"
              alt="category__image"
              className="h-full object-contain"
            />
          </div>
          <p className="font-bold mt-2 | text-center">Ноутбуки</p>
        </div>
        <div className="category | flex items-center flex-col | click:scale">
          <div className="img | bg-[#071f380d] flex items-center justify-center | aspect-square p-3 | rounded-[7px]">
            <img
              src="/images/c1.png"
              alt="category__image"
              className="h-full object-contain"
            />
          </div>
          <p className="font-bold mt-2 | text-center">Видеокамеры</p>
        </div>
        <div className="category | flex items-center flex-col | click:scale">
          <div className="img | bg-[#071f380d] flex items-center justify-center | aspect-square p-3 | rounded-[7px]">
            <img
              src="/images/c1.png"
              alt="category__image"
              className="h-full object-contain"
            />
          </div>
          <p className="font-bold mt-2 | text-center">Портативная техника</p>
        </div>
        <div className="category | flex items-center flex-col | click:scale">
          <div className="img | bg-[#071f380d] flex items-center justify-center | aspect-square p-3 | rounded-[7px]">
            <img
              src="/images/c1.png"
              alt="category__image"
              className="h-full object-contain"
            />
          </div>
          <p className="font-bold mt-2 | text-center">Гарнитуры и наушники</p>
        </div>{" "}
        <div className="category | flex items-center flex-col | click:scale">
          <div className="img | bg-[#071f380d] flex items-center justify-center | aspect-square p-3 | rounded-[7px]">
            <img
              src="/images/c1.png"
              alt="category__image"
              className="h-full object-contain"
            />
          </div>
          <p className="font-bold mt-2 | text-center">Ноутбуки</p>
        </div>
        <div className="category | flex items-center flex-col | click:scale">
          <div className="img | bg-[#071f380d] flex items-center justify-center | aspect-square p-3 | rounded-[7px]">
            <img
              src="/images/c1.png"
              alt="category__image"
              className="h-full object-contain"
            />
          </div>
          <p className="font-bold mt-2 | text-center">GPS-навигация</p>
        </div>
      </div>
    </section>
  );
}

export default CategoriesGrid;
