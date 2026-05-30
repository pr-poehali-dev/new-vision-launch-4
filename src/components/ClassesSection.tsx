import Icon from "@/components/ui/icon"

const CLASSES = [
  {
    id: 1,
    title: "1 класс",
    color: "from-rose-500/20 to-rose-500/5",
    borderColor: "border-rose-500/30",
    badgeColor: "bg-rose-500/20 text-rose-300",
    directions: [
      {
        icon: "Pencil",
        title: "Направление 1",
        description: "Описание появится после добавления контента",
      },
      {
        icon: "Palette",
        title: "Направление 2",
        description: "Описание появится после добавления контента",
      },
      {
        icon: "Music",
        title: "Направление 3",
        description: "Описание появится после добавления контента",
      },
      {
        icon: "Star",
        title: "Направление 4",
        description: "Описание появится после добавления контента",
      },
    ],
  },
  {
    id: 2,
    title: "2 класс",
    color: "from-amber-500/20 to-amber-500/5",
    borderColor: "border-amber-500/30",
    badgeColor: "bg-amber-500/20 text-amber-300",
    directions: [
      {
        icon: "Pencil",
        title: "Направление 1",
        description: "Описание появится после добавления контента",
      },
      {
        icon: "Palette",
        title: "Направление 2",
        description: "Описание появится после добавления контента",
      },
      {
        icon: "Music",
        title: "Направление 3",
        description: "Описание появится после добавления контента",
      },
      {
        icon: "Star",
        title: "Направление 4",
        description: "Описание появится после добавления контента",
      },
    ],
  },
  {
    id: 3,
    title: "3 класс",
    color: "from-emerald-500/20 to-emerald-500/5",
    borderColor: "border-emerald-500/30",
    badgeColor: "bg-emerald-500/20 text-emerald-300",
    directions: [
      {
        icon: "Pencil",
        title: "Направление 1",
        description: "Описание появится после добавления контента",
      },
      {
        icon: "Palette",
        title: "Направление 2",
        description: "Описание появится после добавления контента",
      },
      {
        icon: "Music",
        title: "Направление 3",
        description: "Описание появится после добавления контента",
      },
      {
        icon: "Star",
        title: "Направление 4",
        description: "Описание появится после добавления контента",
      },
    ],
  },
  {
    id: 4,
    title: "4 класс",
    color: "from-violet-500/20 to-violet-500/5",
    borderColor: "border-violet-500/30",
    badgeColor: "bg-violet-500/20 text-violet-300",
    directions: [
      {
        icon: "Pencil",
        title: "Направление 1",
        description: "Описание появится после добавления контента",
      },
      {
        icon: "Palette",
        title: "Направление 2",
        description: "Описание появится после добавления контента",
      },
      {
        icon: "Music",
        title: "Направление 3",
        description: "Описание появится после добавления контента",
      },
      {
        icon: "Star",
        title: "Направление 4",
        description: "Описание появится после добавления контента",
      },
    ],
  },
]

export function ClassesSection() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-6 flex flex-col gap-16 md:gap-24">
        {CLASSES.map((cls) => (
          <div key={cls.id} id={`class-${cls.id}`} className="flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold ${cls.badgeColor}`}>
                <span className="text-xl font-extrabold">{cls.id}</span>
                <span>класс</span>
              </div>
              <div className="h-px flex-1 bg-border" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {cls.directions.map((dir, idx) => (
                <div
                  key={idx}
                  className={`relative flex flex-col gap-4 p-6 rounded-xl border ${cls.borderColor} bg-gradient-to-b ${cls.color} hover:shadow-lg transition-all`}
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-background/50 flex items-center justify-center border border-border/50">
                      <Icon name={dir.icon as "Pencil"} size={18} className="text-primary" />
                    </div>
                    <span className="text-xs font-semibold text-muted-foreground/60 bg-background/40 px-2 py-1 rounded-full">
                      №{idx + 1}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-foreground text-base">{dir.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{dir.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
