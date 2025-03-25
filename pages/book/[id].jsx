import { useRouter } from "next/router";

const libros = [
  {
    id: 1,
    titulo: "Sinfonía No. 5",
    autor: "Ludwig van Beethoven",
    categoria: "Cuerdas",
    descripcion:
      "Una de las composiciones más conocidas de Beethoven, famosa por su tema de apertura que simboliza la lucha y la victoria.",
    imagen:
      "https://drive.google.com/file/d/1pLChlONE2ocFO-VG1GtwuqvCodl3El-e/view?usp=sharing",
  },
  {
    id: 2,
    titulo: "Las Cuatro Estaciones",
    autor: "Antonio Vivaldi",
    categoria: "Cuerdas",
    descripcion:
      "Un conjunto de conciertos para violín que describen el paso de las estaciones a través de la música.",
    imagen: "/partituras/2.jpg",
  },
  {
    id: 3,
    titulo: "Eine kleine Nachtmusik",
    autor: "Wolfgang Amadeus Mozart",
    categoria: "Vientos",
    descripcion:
      "Una serenata alegre y animada, una de las piezas más populares de Mozart.",
    imagen: "/partituras/3.png",
  },
  {
    id: 4,
    titulo: "Oda a la Alegría",
    autor: "Ludwig van Beethoven",
    categoria: "Metales",
    descripcion:
      "El último movimiento de la Novena Sinfonía, un himno a la fraternidad y la alegría humana.",
    imagen: "/partituras/4.jpg",
  },
  {
    id: 5,
    titulo: "El Cascanueces",
    autor: "Pyotr Ilyich Tchaikovsky",
    categoria: "Percusión",
    descripcion:
      "Un ballet clásico basado en el cuento de E.T.A. Hoffmann, famoso por su música festiva y encantadora.",
    imagen: "/partituras/5.png",
  },
  {
    id: 6,
    titulo: "Rapsodia en Azul",
    autor: "George Gershwin",
    categoria: "Ensamble de Jazz",
    descripcion:
      "Una obra que fusiona jazz y música clásica, destacando por su ritmo y energía vibrante.",
    imagen: "/partituras/6.png",
    archivo: "/partituras/6/partitura.pdf",
  },
];

export default function DetallePartitura() {
  const router = useRouter();
  const { id } = router.query;

  const libro = libros.find((libro) => libro.id === parseInt(id));

  if (!libro)
    return (
      <div className="text-center mt-10 text-xl">Partitura no encontrada</div>
    );

  return (
    <div className="min-h-screen bg-gray-50 p-2 flex flex-col items-center justify-center">
      <div className="max-w-2xl w-full bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
        <div className="w-full flex justify-center mb-6">
          <a href={libro.imagen} className="w-full max-w-md">
            <img
              src={libro.imagen}
              alt={libro.titulo}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </a>
        </div>

        <h1 className="text-3xl font-bold text-gray-800 text-center">
          {libro.titulo}
        </h1>
        <p className="text-xl text-gray-600 text-center mt-2">{libro.autor}</p>
        <p className="text-lg text-gray-500 text-center mt-1">
          {libro.categoria}
        </p>

        <div className="mt-6 text-gray-700 text-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Descripción</h2>
          <p>{libro.descripcion}</p>
        </div>

        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={() => router.back()}
            className="px-6 py-2 bg-[#B0005E] text-white rounded-lg hover:bg-[#6C0036] transition"
          >
            Volver a la biblioteca
          </button>
          <a
            href={libro.imagen}
            download
            className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          >
            Descargar Partitura
          </a>
        </div>
      </div>
    </div>
  );
}
