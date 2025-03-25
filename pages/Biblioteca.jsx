import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";

const libros = [
  {
    id: 1,
    titulo: "Sinfonía No. 5",
    autor: "Ludwig van Beethoven",
    categoria: "Cuerdas",
  },
  {
    id: 2,
    titulo: "Las Cuatro Estaciones",
    autor: "Antonio Vivaldi",
    categoria: "Cuerdas",
  },
  {
    id: 3,
    titulo: "Eine kleine Nachtmusik",
    autor: "Wolfgang Amadeus Mozart",
    categoria: "Vientos",
  },
  {
    id: 4,
    titulo: "Oda a la Alegría",
    autor: "Ludwig van Beethoven",
    categoria: "Metales",
  },
  {
    id: 5,
    titulo: "El Cascanueces",
    autor: "Pyotr Ilyich Tchaikovsky",
    categoria: "Percusión",
  },
  {
    id: 6,
    titulo: "Rapsodia en Azul",
    autor: "George Gershwin",
    categoria: "Ensamble de Jazz",
  },
];

export default function BibliotecaPage() {
  const [busqueda, setBusqueda] = useState("");

  const librosFiltrados = libros.filter((libro) =>
    libro.titulo.toLowerCase().includes(busqueda.toLowerCase())
  );

  const handleEliminar = (id) => {
    const confirmDelete = window.confirm(
      "¿Estás seguro de que quieres dar de baja esta partitura?"
    );
    if (confirmDelete) {
      console.log(`Partitura con id ${id} eliminada.`);
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-6 py-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="md:text-2xl text-xl font-bold text-[#6C0036]">
              Biblioteca Digital de Partituras
            </h1>
            <div className="space-x-4">
              <Link href="/formularioDePartitura">
                <button className="bg-green-600 text-white px-4 py-2 rounded">
                  Crear
                </button>
              </Link>
              <button className="bg-red-600 text-white px-4 py-2 rounded">
                Cerrar sesión
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 p-4 bg-gray-100 rounded-md text-black mt-5">
            <input
              type="text"
              placeholder="Buscar una pieza..."
              className="flex-1 min-w-[150px] p-2 border rounded"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
            <select className="p-2 border rounded">
              <option value="active">Activa</option>
              <option value="inactive">Baja</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {librosFiltrados.map((libro) => (
              <div key={libro.id} className="bg-white p-4 rounded-lg shadow">
                <h2 className="text-lg font-bold text-gray-700">
                  {libro.titulo}
                </h2>
                <p className="text-gray-600">{libro.autor}</p>
                <p className="text-sm text-gray-500">{libro.categoria}</p>
                <Link
                  href={`/book/${libro.id}`}
                  className="text-[#B0005E] mt-2 inline-block"
                >
                  Ver detalles
                </Link>
                <div className="mt-4 flex justify-between">
                  <Link href={`/formularioDePartitura?id=${libro.id}`}>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">
                      Editar
                    </button>
                  </Link>
                  <button
                    onClick={() => handleEliminar(libro.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
