export function Logo() {
  return (
    <div className="flex items-center gap-2" aria-label="Логотип сборника" role="img">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="28" height="28" rx="8" fill="hsl(var(--primary))" fillOpacity="0.2"/>
        <text x="14" y="20" textAnchor="middle" fontSize="16" fill="hsl(var(--primary))">✏️</text>
      </svg>
      <span className="text-base font-bold text-foreground leading-tight">Сборник упражнений</span>
    </div>
  )
}