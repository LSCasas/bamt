import { useState, useEffect } from "react";
import { Menu } from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const categories = [
    "Violín",
    "Viola",
    "Violonchelo",
    "Contrabajo",
    "Arpa",

    "Flauta",
    "Piccolo",
    "Oboe",
    "Corno inglés",
    "Clarinete",
    "Clarinete bajo",
    "Fagot",
    "Contrafagot",

    "Trompeta",
    "Trompa",
    "Trombón",
    "Tuba",
    "Eufonio",

    "Saxofón soprano",
    "Saxofón alto",
    "Saxofón tenor",
    "Saxofón barítono",

    "Timbales",
    "Caja",
    "Bombo",
    "Platillos",
    "Xilófono",
    "Vibráfono",
    "Marimba",
    "Triángulo",
    "Campanas tubulares",
    "Gong",
    "Pandereta",
    "Claves",
    "Bongos",
    "Congas",

    "Piano",
    "Celesta",
    "Órgano",
    "Clavicémbalo",

    "Mandolina",
    "Banjo",
  ];

  const filteredCategories = categories.filter((category) =>
    category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      const handleClickOutside = (event) => {
        if (
          !event.target.closest("#mobile-menu") &&
          !event.target.closest("#menu-button")
        ) {
          setIsOpen(false);
        }
      };
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [isOpen]);

  return (
    <>
      <button
        id="menu-button"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 md:hidden text-white bg-[#B0005E] p-2 rounded-md z-50"
      >
        <Menu size={24} />
      </button>

      <div className="hidden md:flex md:w-64 h-screen bg-gradient-to-r from-[#B0005E] to-[#6C0036] p-4 absolute md:relative overflow-auto">
        <SidebarContent
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filteredCategories={filteredCategories}
        />
      </div>

      {isOpen && (
        <div className="fixed inset-0 md:hidden z-50 flex items-start">
          <div
            id="mobile-menu"
            className="w-64 h-full bg-gradient-to-r from-[#B0005E] to-[#6C0036] p-4"
          >
            <SidebarContent
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              filteredCategories={filteredCategories}
            />
          </div>
        </div>
      )}
    </>
  );
};

const SidebarContent = ({ searchTerm, setSearchTerm, filteredCategories }) => {
  return (
    <nav className="flex flex-col gap-4">
      <div>
        <h2 className="text-xl font-bold text-white mb-4">Categorías</h2>
        <input
          type="text"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 rounded-md bg-white text-black mb-4"
        />
        <ul>
          {filteredCategories.map((category, index) => (
            <li key={index} className="py-2 border-b text-white">
              {category}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
