import Link from "next/link";

interface FeatureCardProps {
  href: string;
  icon?: string;
  title: string;
  titleEs: string;
  description: string;
  color: "burgundy" | "blue";
}

export default function FeatureCard({ href, title, titleEs, description, color }: FeatureCardProps) {
  const border = color === "burgundy" ? "border-[#7D1A1A]" : "border-[#1E3A5F]";
  const titleColor = color === "burgundy" ? "text-[#7D1A1A]" : "text-[#1E3A5F]";
  const hoverBorder = color === "burgundy" ? "hover:border-[#7D1A1A] hover:shadow-[#7D1A1A]/10" : "hover:border-[#1E3A5F] hover:shadow-[#1E3A5F]/10";

  return (
    <Link href={href} className={`block bg-white border-2 ${border} rounded-xl p-6 shadow-sm hover:shadow-lg ${hoverBorder} transition-all group`}>
      <h3 className={`font-bold text-lg ${titleColor}`}>{titleEs}</h3>
      <p className="text-xs text-gray-400 font-medium mb-2">{title}</p>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      <div className={`mt-4 text-sm font-semibold ${titleColor} group-hover:underline`}>
        Abrir →
      </div>
    </Link>
  );
}
