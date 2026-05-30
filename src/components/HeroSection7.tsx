export function HeroSection7() {
  return (
    <section className="bg-muted pattern-1 py-16 lg:py-24" aria-labelledby="hero-heading">
      <div className="container px-6 flex flex-col items-center gap-8 lg:gap-12 mx-auto text-center">
        <div className="flex flex-col gap-4 max-w-3xl">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Начальная школа · 1–4 классы</span>
          <h1 id="hero-heading" className="text-foreground text-3xl lg:text-5xl font-bold">
            Сборник креативных упражнений для начальной школы
          </h1>
          <p className="text-muted-foreground text-base lg:text-lg max-w-2xl mx-auto">
            Коллекция творческих заданий по 4 направлениям для каждого класса. Развиваем воображение, мышление и навыки учеников через игру и творчество.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-2xl">
          {[1, 2, 3, 4].map((cls) => (
            <a
              key={cls}
              href={`#class-${cls}`}
              className="flex flex-col items-center gap-2 p-4 rounded-xl bg-background border border-border hover:border-primary hover:shadow-md transition-all cursor-pointer"
            >
              <span className="text-3xl font-bold text-primary">{cls}</span>
              <span className="text-sm text-muted-foreground font-medium">класс</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
