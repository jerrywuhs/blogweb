interface AdSlotProps {
  label: string;
  ratio?: "6/1" | "4/3" | "16/9";
  className?: string;
}

const ratioClasses: Record<NonNullable<AdSlotProps["ratio"]>, string> = {
  "6/1": "aspect-[6/1]",
  "4/3": "aspect-[4/3]",
  "16/9": "aspect-[16/9]",
};

export default function AdSlot({ label, ratio = "4/3", className }: AdSlotProps) {
  return (
    <div className={className}>
      <p className="text-sm text-subtle">{label}</p>
      <div
        className={`mt-3 w-full rounded-2xl border border-dashed border-[color:var(--border-muted)] ${ratioClasses[ratio]}`}
      />
    </div>
  );
}
