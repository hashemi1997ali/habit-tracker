export default function ProgressAction({
  habit,
  onIncrementHabit,
  onDecrementHabit,
}) {
  return (
    <div className="flex justify-center pt-1">
      <div className="join">
        <button
          className="btn btn-sm btn-soft join-item"
          onClick={() => onDecrementHabit(habit.id)}
        >
          -
        </button>

        <button className="btn btn-sm btn-soft join-item pointer-events-none min-w-16">
          {habit.current}
        </button>

        <button
          className="btn btn-sm btn-soft join-item"
          onClick={() => onIncrementHabit(habit.id)}
        >
          +
        </button>
      </div>
    </div>
  );
}
