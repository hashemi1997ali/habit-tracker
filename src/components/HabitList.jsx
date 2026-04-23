import { AnimatePresence, motion } from "framer-motion";
import HabitListItem from "./HabitListItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HabitList({
  habits,
  onDeleteHabit,
  onIncrementHabit,
  onDecrementHabit,
  onResetHabit,
}) {
  return (
    <section>
      <h2 className="mb-8 text-center text-xl font-semibold text-base-content md:text-2xl">
        Your Habits
      </h2>

      <AnimatePresence mode="wait">
        {habits.length === 0 ? (
          <motion.div
            key="empty-state"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="flex flex-col items-center gap-4 text-base-content/60">
              <div className="flex h-16 w-16 items-center justify-center rounded-field bg-primary shadowed">
                <FontAwesomeIcon
                  className="text-2xl text-primary-content"
                  icon={["fas", "clipboard-list"]}
                />
              </div>
              <p className="text-lg font-medium">No habits to display</p>
              <p className="text-base-content/60">
                Add a new habit to get started!
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="habit-list"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="grid grid-cols-1 gap-8 md:grid-cols-2"
          >
            <AnimatePresence>
              {habits.map((habit) => (
                <HabitListItem
                  key={habit.id}
                  habit={habit}
                  onDeleteHabit={onDeleteHabit}
                  onIncrementHabit={onIncrementHabit}
                  onDecrementHabit={onDecrementHabit}
                  onResetHabit={onResetHabit}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
