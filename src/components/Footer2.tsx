import { Logo } from "./Logo"
import { Separator } from "@/components/ui/separator"

export function Footer2() {
  return (
    <footer className="bg-muted py-12 lg:py-16" role="contentinfo" aria-label="Подвал сайта">
      <div className="container px-6 mx-auto flex flex-col gap-8">
        <div className="flex flex-col lg:flex-row md:justify-between md:items-center gap-8">
          <a href="/" aria-label="На главную">
            <Logo />
          </a>
          <nav
            className="flex flex-col md:flex-row items-center gap-6 md:gap-8 text-center"
            aria-label="Навигация в подвале"
          >
            {[1, 2, 3, 4].map((cls) => (
              <a
                key={cls}
                href={`#class-${cls}`}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {cls} класс
              </a>
            ))}
          </nav>
        </div>

        <Separator role="presentation" />

        <p className="text-muted-foreground text-center text-sm">
          Сборник креативных упражнений для начальной школы
        </p>
      </div>
    </footer>
  )
}
