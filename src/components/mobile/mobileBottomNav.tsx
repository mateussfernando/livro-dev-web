export function MobileBottomNav() {
  return (
    <nav className="block sm:hidden md:hidden h-20 fixed bottom-0 left-0 w-full bg-white shadow-md p-2 z-50">
      <ul className="flex justify-around">
        <li className="flex flex-col items-center text-gray-600">
          <button className="flex flex-col items-center">
            <div className="w-6 h-6 bg-gray-400"></div>
            <span className="text-xs">HOME</span>
          </button>
        </li>
        <li className="flex flex-col items-center text-gray-600">
          <button className="flex flex-col items-center">
            <div className="w-6 h-6 bg-gray-400"></div>
            <span className="text-xs">EXPLORAR</span>
          </button>
        </li>
        <li className="flex flex-col items-center text-gray-600">
          <button className="flex flex-col items-center">
            <div className="w-6 h-6 bg-gray-400"></div>
            <span className="text-xs">SALVOS</span>
          </button>
        </li>
        <li className="flex flex-col items-center text-gray-600">
          <button className="flex flex-col items-center">
            <div className="w-6 h-6 bg-gray-400"></div>
            <span className="text-xs">PERFIL</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}
