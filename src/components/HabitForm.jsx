import { useState } from "react";

export default function HabitForm({ onAddHabit }) {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [icon, setIcon] = useState("fa-solid fa-bullseye");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddHabit(name, goal, icon);
    setName("");
    setGoal("");
    setIcon("fa-solid fa-bullseye");
  };

  return (
    <section className="card bg-base-200 shadowed">
      <div className="card-body">
        <h2 className="card-title text-lg md:text-xl text-base-content">
          Add New Habit
        </h2>

        <form
          onSubmit={handleSubmit}
          className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-[1.5fr_0.8fr_auto_auto]"
        >
          <label className="input w-full col-span-2 md:col-span-1 bg-base-100 shadowed">
            Habit Name:
            <input
              type="text"
              required
              placeholder="e.g. Drink Water"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label className="input w-full col-span-2 md:col-span-1 bg-base-100 shadowed">
            Daily Goal:
            <input
              type="number"
              required
              min="1"
              placeholder="e.g. 8"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
            />
          </label>

          <select
            className="select w-full bg-base-100 shadowed"
            required
            value={icon}
            onChange={(e) => setIcon(e.target.value)}
          >
            <option value="fa-solid fa-bullseye">🎯</option>
            <option value="fa-solid fa-glass-water">💧</option>
            <option value="fa-solid fa-book">📖</option>
            <option value="fa-solid fa-shoe-prints">👟</option>
            <option value="fa-solid fa-dumbbell">🏃</option>
            <option value="fa-solid fa-spa">🧘</option>
            <option value="fa-solid fa-laptop">💻</option>
            <option value="fa-solid fa-brain">🧠</option>
            <option value="fa-solid fa-calendar">📅</option>
            <option value="fa-solid fa-hourglass-half">⏳</option>
            <option value="fa-solid fa-circle-check">✅</option>
            <option value="fa-solid fa-broom">🧹</option>
            <option value="fa-solid fa-gamepad">🎮</option>
            <option value="fa-solid fa-music">🎵</option>
          </select>

          <button type="submit" className="btn btn-primary shadowed">
            Add Habit
          </button>
        </form>
      </div>
    </section>
  );
}
