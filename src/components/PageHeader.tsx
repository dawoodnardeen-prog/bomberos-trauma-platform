interface PageHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  color?: "burgundy" | "blue";
}

export default function PageHeader({ title, subtitle, badge, color = "burgundy" }: PageHeaderProps) {
  const bg = color === "blue" ? "bg-[#1E3A5F]" : "bg-[#7D1A1A]";
  return (
    <div className={`${bg} text-white py-8 px-4`}>
      <div className="max-w-6xl mx-auto">
        {badge && (
          <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
            {badge}
          </span>
        )}
        <h1 className="text-2xl sm:text-3xl font-bold">{title}</h1>
        {subtitle && <p className="mt-2 text-white/80 text-sm sm:text-base max-w-2xl">{subtitle}</p>}
      </div>
    </div>
  );
}
