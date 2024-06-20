import "./entry.style.css";
const Entery = () => {
  return (
    <div style={{ padding: 10, maxWidth: "650px" }}>
      <div style={{ marginTop: "100px" }}>
        <svg id="logo">
          <text x="50%" y="50%" fill="transparent" textAnchor="middle">
            SPACE
          </text>
        </svg>
        <blockquote style={{ bottom: 60, marginLeft: "20px" }}>
          " The most important thing we can do is inspire young minds and to
          advance the kind of science, math and technology education that will
          help youngsters take us to the next phase of space travel. "
        </blockquote>
        <cite style={{ bottom: 30 }}>John Glenn</cite>
      </div>
    </div>
  );
};

export default Entery;
