export default function HabitStats({ habits }) {
  const totalHabits = habits.length;
  const completedHabits = habits.filter(
    (habit) => habit.current >= habit.goal,
  ).length;

  const percent =
    totalHabits === 0 ? 0 : Math.round((completedHabits / totalHabits) * 100);

  return (
    <section className="card bg-base-200 shadowed">
      <div className="card-body">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="card-title text-lg md:text-xl text-base-content">
              Today&apos;s Progress
            </h2>
            <p className="mt-1 text-sm text-base-content/60 md:text-base">
              {completedHabits} of {totalHabits} habits completed
            </p>
          </div>

          <span className="badge badge-success badge-outline px-3 py-3">
            {percent}%
          </span>
        </div>

        <progress
          className="progress progress-success mt-3 h-3 w-full"
          value={percent}
          max="100"
        />

        <p className="mt-2 text-sm font-medium text-center text-base-content/60">
          {percent}% Complete
        </p>
      </div>
    </section>
  );
}
