import { useEffect, useState } from "react";
import Header from "./components/Header";
import HabitStats from "./components/HabitStats";
import HabitForm from "./components/HabitForm";
import HabitList from "./components/HabitList";

export default function App() {
  const app_name = "Habit Tracker";

  const [habits, setHabits] = useState(() => {
    const saved = localStorage.getItem("habits");
    if (saved) return JSON.parse(saved);

    return [
      {
        id: 1,
        name: "Drink Water",
        goal: 8,
        current: 0,
        icon: "fa-solid fa-glass-water",
      },
      {
        id: 2,
        name: "Read 20 Pages",
        goal: 20,
        current: 0,
        icon: "fa-solid fa-book",
      },
      {
        id: 3,
        name: "Walk 8000 Steps",
        goal: 8000,
        current: 0,
        icon: "fa-solid fa-shoe-prints",
      },
      {
        id: 4,
        name: "Meditate",
        goal: 1,
        current: 0,
        icon: "fa-solid fa-spa",
      },
    ];
  });

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  const onAddHabit = (name, goal, icon) => {
    const trimmedName = name.trim();
    const numericGoal = Number(goal);

    if (!trimmedName || !numericGoal || numericGoal < 1) return;

    const newHabit = {
      id: Date.now(),
      name: trimmedName,
      goal: numericGoal,
      current: 0,
      icon: icon,
    };

    setHabits((prev) => [...prev, newHabit]);
  };

  const onDeleteHabit = (id) => {
    setHabits((prev) => prev.filter((habit) => habit.id !== id));
  };

  const onIncrementHabit = (id) => {
    setHabits((prev) =>
      prev.map((habit) =>
        habit.id === id
          ? { ...habit, current: Math.min(habit.current + 1, habit.goal) }
          : habit,
      ),
    );
  };

  const onDecrementHabit = (id) => {
    setHabits((prev) =>
      prev.map((habit) =>
        habit.id === id
          ? { ...habit, current: Math.max(habit.current - 1, 0) }
          : habit,
      ),
    );
  };

  const onResetHabit = (id) => {
    setHabits((prev) =>
      prev.map((habit) => (habit.id === id ? { ...habit, current: 0 } : habit)),
    );
  };

  return (
    <div data-theme="light" className="min-h-screen bg-base-300">
      <div className="mx-auto max-w-6xl px-6 py-8 md:px-8">
        <Header app_name={app_name} />

        <div className="mt-8 space-y-8">
          <HabitStats habits={habits} />

          <HabitForm onAddHabit={onAddHabit} />

          <span className="divider" />
        </div>

        <div>
          <HabitList
            habits={habits}
            onDeleteHabit={onDeleteHabit}
            onIncrementHabit={onIncrementHabit}
            onDecrementHabit={onDecrementHabit}
            onResetHabit={onResetHabit}
          />
        </div>
      </div>
    </div>
  );
}
