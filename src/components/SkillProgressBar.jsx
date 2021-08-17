import "../styles/skills-progress-bar.css";

export const SkillProgressBar = ({ img, percentage }) => {
  const strokeDashOffset = 440 - (440 * percentage) / 100;
  return (
    <div className="box">
      <div className="percent">
        <svg>
          <circle
            style={{ strokeDashoffset: `${strokeDashOffset}` }}
            cx="70"
            cy="70"
            r="70"
          ></circle>
          <circle
            style={{ strokeDashoffset: `${strokeDashOffset}` }}
            cx="70"
            cy="70"
            r="70"
          ></circle>
        </svg>
        <div
          className="symbol"
          style={{ backgroundImage: `url(/images/${img})` }}
        ></div>
      </div>
    </div>
  );
};
