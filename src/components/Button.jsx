/**
 * A reusable CTA button component.
 * When clicked, it scrolls smoothly to the section with ID "counter",
 * with a small offset from the top for better visual placement.
 */

const Button = ({ text, className, id, onClick }) => {
  return (
    <a
        onClick={(e) => {
            // 2. Add this check:
            // If the parent passed a specific onClick function (like opening the resume),
            // run that function and stop.
            if (onClick) {
                e.preventDefault();
                onClick(e);
                return;
            }

            // --- OLD LOGIC (Runs only if no onClick is provided) ---
            e.preventDefault();

            const target = document.getElementById("counter");

            if (target && id) {
                const offset = window.innerHeight * 0.15;
                const top =
                    target.getBoundingClientRect().top + window.pageYOffset - offset;

                window.scrollTo({ top, behavior: "smooth" });
            }
        }}
        className={`${className ?? ""} cta-wrapper`}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;
