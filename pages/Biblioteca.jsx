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

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-6 py-6">
          <h1 className="md:text-2xl text-xl font-bold text-center mb-6 text-[#6C0036]">
            Biblioteca Digital de Partituras
          </h1>
          <input
            type="text"
            placeholder="Buscar una pieza..."
            className="p-2 border rounded w-full mb-4 text-black"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
