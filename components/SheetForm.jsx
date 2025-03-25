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
            <label className="block font-semibold text-black">Genero</label>
            <input className="w-full p-2 border rounded text-black" />
          </div>

          <div>
            <label className="block font-semibold text-black">
              Descripcion (Opcional)
            </label>
            <input className="w-full p-2 border rounded text-black" />
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
