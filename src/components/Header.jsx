import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);

export default function Header({ app_name }) {
  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="card bg-base-200 shadowed">
      <div className="card-body flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex flex-row flex-1 items-center gap-3 ">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-field bg-primary shadowed">
            <FontAwesomeIcon
              icon="fa-solid fa-check"
              className="text-2xl text-primary-content"
            />
          </div>

          <div>
            <h1 className="card-title text-xl md:text-2xl text-base-content">
              {app_name}
            </h1>
            <p className="text-sm text-base-content/60 md:text-base">
              Track your daily goals
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-base font-semibold md:text-lg text-base-content">
          <FontAwesomeIcon icon="fa-regular fa-calendar" />
          <span>{today}</span>
        </div>
      </div>
    </header>
  );
}
