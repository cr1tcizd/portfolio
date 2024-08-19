const Navbar = () => {
  return (
    <header className="relative container">
      <div className="absolute flex left-[50%] -translate-x-1/2 py-[32px] px-[50px] bg-gray-950 rounded-b-full">
        <nav className="flex gap-[12px] mx-auto text-white">
          <a href="#skills" className="scroll-auto">
            Главная
          </a>
          <a href=""></a>
          <a href="">Портфолио</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
