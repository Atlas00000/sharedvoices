import type { Stat } from "@/lib/types"

interface StatsCardProps {
  stat: Stat
}

const StatsCard = ({ stat }: StatsCardProps) => {
  return (
    <div className="stat-card flex flex-col items-center justify-center text-center">
      <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
        {stat.icon}
      </div>
      <h3 className="text-3xl font-bold text-primary">{stat.value}</h3>
      <p className="text-muted-foreground">{stat.label}</p>
    </div>
  )
}

export default StatsCard
