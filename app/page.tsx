const productos = [
  {
    nombre: "Pastas proteicas",
    descripcion:
      "Sorrentinos, ravioles y ñoquis amasados con harinas ricas en proteína. Misma textura italiana de siempre, con más nutrientes en cada porción.",
    detalle: "Hasta 22 g de proteína por plato",
  },
  {
    nombre: "Salsas de verdad",
    descripcion:
      "Salsas cocinadas a fuego lento, sin conservantes innecesarios. Tomate natural, albahaca fresca y un toque de la cocina del sur de Italia.",
    detalle: "Ingredientes que reconocés",
  },
  {
    nombre: "Listo en minutos",
    descripcion:
      "Del freezer a la mesa sin complicarte. Llevás directo del congelador a la olla y comés casero en menos de lo que tardás en pedir delivery.",
    detalle: "Del freezer al plato en 8 minutos",
  },
];

const pasos = [
  {
    titulo: "Elegí tu combo",
    texto: "Armás tu pedido con las pastas y salsas que más te gustan.",
  },
  {
    titulo: "Guardá en el freezer",
    texto: "Llegan congeladas y se conservan listas para cuando las necesites.",
  },
  {
    titulo: "Cociná y disfrutá",
    texto: "Hervís, calentás la salsa y tenés una comida sana en minutos.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-crema text-tinta">
      {/* Encabezado */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a href="#inicio" className="flex items-baseline gap-2">
          <span className="font-display text-2xl font-semibold tracking-tight text-albahaca">
            little
          </span>
          <span className="font-display text-2xl italic text-tomate">italy</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-tinta/70 sm:flex">
          <a href="#oferta" className="transition-colors hover:text-albahaca">
            Productos
          </a>
          <a href="#como" className="transition-colors hover:text-albahaca">
            Cómo funciona
          </a>
          <a
            href="#contacto"
            className="rounded-full bg-albahaca px-5 py-2 text-crema transition-colors hover:bg-albahaca-claro"
          >
            Pedir ahora
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section
        id="inicio"
        className="relative mx-auto max-w-6xl px-6 pb-20 pt-10 sm:pt-16"
      >
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-albahaca/25 bg-crema-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-albahaca">
          Pastas y salsas proteicas congeladas
        </p>
        <h1 className="max-w-3xl font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          Comida italiana de verdad,
          <span className="text-tomate"> simple y saludable.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-tinta/75">
          En <strong className="font-semibold text-albahaca">little italy</strong>{" "}
          cocinamos pastas y salsas proteicas, las congelamos en su punto justo y
          te las llevamos listas. Vos solo las herví: comida casera, sana y sin
          vueltas, cualquier día de la semana.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#contacto"
            className="rounded-full bg-tomate px-7 py-3 text-center font-semibold text-crema transition-colors hover:bg-tomate/90"
          >
            Hacé tu pedido
          </a>
          <a
            href="#oferta"
            className="rounded-full border border-tinta/15 px-7 py-3 text-center font-semibold text-tinta transition-colors hover:border-albahaca hover:text-albahaca"
          >
            Ver productos
          </a>
        </div>

        <dl className="mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t border-tinta/10 pt-8">
          <div>
            <dt className="font-display text-3xl font-semibold text-albahaca">8 min</dt>
            <dd className="mt-1 text-sm text-tinta/60">del freezer al plato</dd>
          </div>
          <div>
            <dt className="font-display text-3xl font-semibold text-albahaca">+ proteína</dt>
            <dd className="mt-1 text-sm text-tinta/60">en cada porción</dd>
          </div>
          <div>
            <dt className="font-display text-3xl font-semibold text-albahaca">0 vueltas</dt>
            <dd className="mt-1 text-sm text-tinta/60">cero complicaciones</dd>
          </div>
        </dl>
      </section>

      <div className="swirl-rule mx-auto max-w-6xl" />

      {/* Oferta / Servicios */}
      <section id="oferta" className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Lo que ponemos en tu mesa
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-tinta/70">
            Pensamos cada producto para que comas rico y cuides tu alimentación
            sin resignar sabor ni tiempo. Esto es lo que vas a encontrar:
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {productos.map((p) => (
            <article
              key={p.nombre}
              className="flex flex-col rounded-3xl border border-tinta/10 bg-crema-soft p-8 transition-transform hover:-translate-y-1"
            >
              <h3 className="font-display text-2xl font-semibold text-albahaca">
                {p.nombre}
              </h3>
              <p className="mt-3 flex-1 leading-relaxed text-tinta/75">
                {p.descripcion}
              </p>
              <p className="mt-6 inline-flex w-fit rounded-full bg-albahaca/10 px-4 py-1.5 text-sm font-semibold text-albahaca">
                {p.detalle}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Cómo funciona */}
      <section id="como" className="bg-albahaca text-crema">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Comer sano nunca fue tan fácil
          </h2>
          <div className="mt-12 grid gap-10 sm:grid-cols-3">
            {pasos.map((paso, i) => (
              <div key={paso.titulo}>
                <span className="font-display text-5xl font-semibold text-crema/40">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-display text-2xl font-semibold">
                  {paso.titulo}
                </h3>
                <p className="mt-2 leading-relaxed text-crema/80">{paso.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 rounded-3xl border border-tinta/10 bg-crema-soft p-8 sm:p-12 md:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Hacé tu pedido
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-tinta/70">
              Escribinos y armamos tu combo de pastas y salsas proteicas. Te
              contamos sabores disponibles, precios y zonas de entrega.
            </p>
            <div className="mt-8 space-y-4 text-tinta/80">
              <a
                href="https://wa.me/5491100000000"
                className="flex items-center gap-3 font-medium transition-colors hover:text-albahaca"
              >
                <span className="text-tomate">WhatsApp</span>
                +54 9 11 0000-0000
              </a>
              <a
                href="mailto:hola@littleitaly.com.ar"
                className="flex items-center gap-3 font-medium transition-colors hover:text-albahaca"
              >
                <span className="text-tomate">Email</span>
                hola@littleitaly.com.ar
              </a>
              <a
                href="https://instagram.com/littleitaly"
                className="flex items-center gap-3 font-medium transition-colors hover:text-albahaca"
              >
                <span className="text-tomate">Instagram</span>
                @littleitaly
              </a>
            </div>
          </div>

          <form className="space-y-4">
            <div>
              <label htmlFor="nombre" className="mb-1.5 block text-sm font-medium">
                Nombre
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                placeholder="Tu nombre"
                className="w-full rounded-xl border border-tinta/15 bg-crema px-4 py-3 outline-none focus:border-albahaca focus:ring-2 focus:ring-albahaca/30"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                Email o teléfono
              </label>
              <input
                id="email"
                name="email"
                type="text"
                placeholder="Para coordinar tu pedido"
                className="w-full rounded-xl border border-tinta/15 bg-crema px-4 py-3 outline-none focus:border-albahaca focus:ring-2 focus:ring-albahaca/30"
              />
            </div>
            <div>
              <label htmlFor="mensaje" className="mb-1.5 block text-sm font-medium">
                Tu pedido
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={4}
                placeholder="Contanos qué pastas y salsas querés probar"
                className="w-full rounded-xl border border-tinta/15 bg-crema px-4 py-3 outline-none focus:border-albahaca focus:ring-2 focus:ring-albahaca/30"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-tomate px-7 py-3 font-semibold text-crema transition-colors hover:bg-tomate/90"
            >
              Enviar pedido
            </button>
          </form>
        </div>
      </section>

      {/* Pie */}
      <footer className="border-t border-tinta/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-tinta/60 sm:flex-row">
          <p className="flex items-baseline gap-1.5">
            <span className="font-display text-base font-semibold text-albahaca">
              little
            </span>
            <span className="font-display text-base italic text-tomate">italy</span>
          </p>
          <p>Pastas y salsas proteicas congeladas · Comé simple, comé sano.</p>
          <p>© {new Date().getFullYear()} little italy</p>
        </div>
      </footer>
    </main>
  );
}
