import React from "react";

const SheetFormForm = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
      <div className="h-[70vh] overflow-y-auto p-2">
        <form className="space-y-4">
          <div>
            <label className="block font-semibold text-black">Nombre</label>
            <input className="w-full p-2 border rounded text-black" />
          </div>

          <div>
            <label className="block font-semibold text-black">Autor</label>
            <input className="w-full p-2 border rounded text-black" />
          </div>

          <div>
            <label className="block font-semibold text-black">Género</label>
            <select className="w-full p-2 border rounded text-black">
              {[
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
              ].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-semibold text-black">Imagen</label>
            <input className="w-full p-2 border rounded text-black" />
          </div>

          <button className="w-full sm:w-auto py-2 px-4 bg-gradient-to-r bg-[#B0005E] text-white rounded-md hover:bg-[#6C0036]">
            Crear Paritura
          </button>
        </form>
      </div>
    </div>
  );
};

export default SheetFormForm;
