import ProgressAction from "./ProgressAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

library.add(fas, far, fab);

export default function HabitListItem({
  habit,
  onDeleteHabit,
  onIncrementHabit,
  onDecrementHabit,
  onResetHabit,
}) {
  const isCompleted = habit.current >= habit.goal;
  const progressPercent = Math.min((habit.current / habit.goal) * 100, 100);
  const progressColorClass =
    progressPercent === 0
      ? "progress-neutral"
      : progressPercent < 50
        ? "progress-error"
        : progressPercent < 100
          ? "progress-warning"
          : "progress-success";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: -20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.96 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="card bg-base-200 shadowed"
    >
      <div className="card-body gap-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex min-w-0 flex-1 items-start gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-field bg-primary shadowed">
              <FontAwesomeIcon
                className="text-2xl text-primary-content"
                icon={habit.icon}
              />
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="card-title truncate text-base text-base-content md:text-lg">
                {habit.name}
              </h3>
              <p className="truncate text-xs text-base-content/60 md:text-sm">
                Daily Goal: {habit.goal} {habit.goal === 1 ? "time" : "times"}
              </p>
            </div>
          </div>

          <div className="flex shrink-0 gap-1">
            <button
              className="btn btn-ghost btn-sm btn-circle"
              onClick={() => onResetHabit(habit.id)}
              title="Reset"
            >
              <FontAwesomeIcon icon="fa-solid fa-rotate-left" />
            </button>

            <button
              className="btn btn-ghost btn-sm btn-circle text-error"
              onClick={() => onDeleteHabit(habit.id)}
              title="Delete"
            >
              <FontAwesomeIcon icon="fa-solid fa-trash" />
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-base-content text-sm font-medium">
            Progress: {habit.current} / {habit.goal}
          </p>

          <progress
            className={`progress h-2 w-full transition-all duration-500 ease-out ${progressColorClass}`}
            value={progressPercent}
            max="100"
          />
        </div>

        <div className="mt-auto min-h-10 flex items-center justify-center">
          {isCompleted ? (
            <span className="badge badge-success shadowed">Completed!</span>
          ) : (
            <ProgressAction
              habit={habit}
              onIncrementHabit={onIncrementHabit}
              onDecrementHabit={onDecrementHabit}
            />
          )}
        </div>
      </div>
    </motion.div>
  );
}
