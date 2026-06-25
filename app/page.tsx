const productos = [
  {
    nombre: "Pastas proteicas",
    detalle:
      "Ravioles, sorrentinos y ñoquis amasados con masa enriquecida en proteína. Mismo sabor casero de siempre, con más nutrición en cada porción.",
    nota: "Ravioles · Sorrentinos · Ñoquis",
  },
  {
    nombre: "Salsas proteicas",
    detalle:
      "Salsas cocidas a fuego lento con tomate natural, vegetales y un extra de proteína. Listas para acompañar tus pastas o tu plato del día.",
    nota: "Bolognesa · Filetto · Cuatro vegetales",
  },
  {
    nombre: "Packs semanales",
    detalle:
      "Combiná pastas y salsas en un pack pensado para la semana. Resolvés tus comidas sin cocinar de cero y sin descuidar lo que comés.",
    nota: "Ideal para meal prep",
  },
];

const beneficios = [
  {
    titulo: "Listo en minutos",
    texto: "Del freezer a la mesa en pocos minutos. Sin recetas, sin vueltas.",
  },
  {
    titulo: "Más proteína",
    texto: "Cada porción suma proteína para que comas equilibrado todos los días.",
  },
  {
    titulo: "Ingredientes reales",
    texto: "Sin conservantes innecesarios. Comida de verdad, congelada en su punto.",
  },
];

const pasos = [
  { n: "01", t: "Elegís", d: "Pastas, salsas o un pack semanal completo." },
  { n: "02", t: "Pedís", d: "Nos escribís por WhatsApp y coordinamos la entrega." },
  { n: "03", t: "Guardás", d: "Al freezer. Tus comidas listas para toda la semana." },
];

function TomatoDot({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block h-2.5 w-2.5 rounded-full bg-tomato ${className}`}
    />
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-cream text-ink">
      {/* Header */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a href="#inicio" className="flex items-center gap-2">
          <TomatoDot />
          <span className="font-display text-xl font-semibold tracking-tight text-basil-deep">
            Little Italy
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-ink/70 sm:flex">
          <a href="#propuesta" className="transition-colors hover:text-tomato">
            Propuesta
          </a>
          <a href="#como" className="transition-colors hover:text-tomato">
            Cómo funciona
          </a>
          <a href="#contacto" className="transition-colors hover:text-tomato">
            Contacto
          </a>
        </nav>
        <a
          href="#contacto"
          className="rounded-full bg-basil px-4 py-2 text-sm font-semibold text-cream transition-colors hover:bg-basil-deep"
        >
          Hacé tu pedido
        </a>
      </header>

      {/* Hero */}
      <section
        id="inicio"
        className="relative overflow-hidden border-b border-ink/10"
      >
        <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pb-28 lg:pt-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-basil/30 bg-cream-deep px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-basil-deep">
              <TomatoDot />
              Pastas y salsas proteicas congeladas
            </span>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-basil-deep sm:text-6xl">
              Comé rico,
              <br />
              comé sano,
              <br />
              <span className="text-tomato">en minutos.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/75">
              En Little Italy cocinamos pastas y salsas proteicas y las
              congelamos en su punto justo. Las guardás en el freezer y resolvés
              una comida casera, equilibrada y deliciosa cuando quieras.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contacto"
                className="rounded-full bg-tomato px-7 py-3 text-base font-semibold text-cream shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-tomato-soft"
              >
                Hacé tu pedido
              </a>
              <a
                href="#propuesta"
                className="rounded-full border border-basil/40 px-7 py-3 text-base font-semibold text-basil-deep transition-colors hover:bg-cream-deep"
              >
                Ver la propuesta
              </a>
            </div>
            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-ink/10 pt-6">
              <div>
                <dt className="font-display text-3xl font-bold text-basil">
                  +Proteína
                </dt>
                <dd className="mt-1 text-sm text-ink/60">en cada porción</dd>
              </div>
              <div>
                <dt className="font-display text-3xl font-bold text-basil">
                  Minutos
                </dt>
                <dd className="mt-1 text-sm text-ink/60">del freezer al plato</dd>
              </div>
              <div>
                <dt className="font-display text-3xl font-bold text-basil">
                  Real
                </dt>
                <dd className="mt-1 text-sm text-ink/60">comida de verdad</dd>
              </div>
            </dl>
          </div>

          {/* Plato signature element */}
          <div className="relative mx-auto flex w-full max-w-md items-center justify-center">
            <div className="absolute inset-0 -z-10 rounded-[2.5rem] bg-cream-deep" />
            <div className="relative aspect-square w-full max-w-sm">
              <div className="absolute inset-4 rounded-full border-[10px] border-cream bg-basil-deep shadow-xl" />
              <div className="absolute inset-12 rounded-full border border-cream/20 bg-basil" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-cream">
                <span className="font-display text-2xl font-semibold">
                  Del freezer
                </span>
                <span className="my-2 inline-flex items-center gap-2 text-cream/80">
                  <span className="h-px w-8 bg-cream/40" />
                  <TomatoDot />
                  <span className="h-px w-8 bg-cream/40" />
                </span>
                <span className="font-display text-2xl font-semibold">
                  a tu mesa
                </span>
                <span className="mt-4 max-w-[12rem] text-sm text-cream/70">
                  Sin complicarte. Sin resignar sabor.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Propuesta / Servicios */}
      <section id="propuesta" className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-tomato">
            Nuestra propuesta
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-basil-deep sm:text-5xl">
            Simplicidad que se nota en lo que comés
          </h2>
          <p className="mt-4 text-lg text-ink/75">
            Hacemos lo difícil para que vos solo tengas que calentar y disfrutar.
            Elegí entre nuestras pastas, salsas o un pack pensado para toda la
            semana.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {productos.map((p) => (
            <article
              key={p.nombre}
              className="flex flex-col rounded-3xl border border-ink/10 bg-cream-deep/60 p-8 transition-colors hover:border-basil/40"
            >
              <TomatoDot />
              <h3 className="mt-5 font-display text-2xl font-semibold text-basil-deep">
                {p.nombre}
              </h3>
              <p className="mt-3 flex-1 text-ink/75">{p.detalle}</p>
              <p className="mt-6 text-sm font-medium uppercase tracking-wide text-tomato">
                {p.nota}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-6 rounded-3xl bg-basil-deep p-8 text-cream md:grid-cols-3 md:p-10">
          {beneficios.map((b) => (
            <div key={b.titulo}>
              <h3 className="font-display text-xl font-semibold text-cream">
                {b.titulo}
              </h3>
              <p className="mt-2 text-cream/75">{b.texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cómo funciona */}
      <section
        id="como"
        className="border-y border-ink/10 bg-cream-deep/50 py-20 lg:py-24"
      >
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display text-3xl font-bold tracking-tight text-basil-deep sm:text-4xl">
            Pedir es así de simple
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {pasos.map((paso) => (
              <div key={paso.n} className="flex gap-5">
                <span className="font-display text-3xl font-bold text-tomato/80">
                  {paso.n}
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-basil-deep">
                    {paso.t}
                  </h3>
                  <p className="mt-1 text-ink/75">{paso.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
        <div className="grid gap-12 rounded-3xl bg-basil-deep p-8 text-cream md:grid-cols-2 md:p-12">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-tomato-soft">
              Hacé tu pedido
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight">
              Tu próxima comida, lista en el freezer
            </h2>
            <p className="mt-4 max-w-md text-cream/80">
              Escribinos y armamos juntos tu pedido. Coordinamos la entrega y te
              contamos las opciones disponibles de la semana.
            </p>
            <p className="mt-8 text-sm uppercase tracking-[0.18em] text-cream/60">
              Entregas
            </p>
            <p className="mt-1 text-cream/90">
              Zona Norte y CABA · Jueves y viernes
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href="https://wa.me/5491100000000"
              className="flex items-center justify-between rounded-2xl bg-tomato px-6 py-4 font-semibold text-cream transition-colors hover:bg-tomato-soft"
            >
              <span>WhatsApp</span>
              <span className="text-cream/90">+54 9 11 0000-0000</span>
            </a>
            <a
              href="mailto:hola@littleitaly.com.ar"
              className="flex items-center justify-between rounded-2xl border border-cream/25 px-6 py-4 font-medium transition-colors hover:bg-cream/10"
            >
              <span>Email</span>
              <span className="text-cream/80">hola@littleitaly.com.ar</span>
            </a>
            <a
              href="https://instagram.com/littleitaly"
              className="flex items-center justify-between rounded-2xl border border-cream/25 px-6 py-4 font-medium transition-colors hover:bg-cream/10"
            >
              <span>Instagram</span>
              <span className="text-cream/80">@littleitaly</span>
            </a>
            <div className="flex items-center justify-between rounded-2xl border border-cream/25 px-6 py-4">
              <span className="font-medium">Horario de pedidos</span>
              <span className="text-cream/80">Lun a Sáb · 9 a 19 h</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-ink/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-ink/60 sm:flex-row">
          <div className="flex items-center gap-2">
            <TomatoDot />
            <span className="font-display font-semibold text-basil-deep">
              Little Italy
            </span>
          </div>
          <p>Pastas y salsas proteicas congeladas · Simple y saludable</p>
          <p>© {new Date().getFullYear()} Little Italy</p>
        </div>
      </footer>
    </main>
  );
}
