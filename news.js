const newsItems = [
  {
    date: "Aug. '26",
    text: `
      Glad to be chosen as one of the recipients of the
      <a
        href="https://www.isa.org/news-press-releases/2026/august/isa-awards-scholarships-31-students-7-countries"
        target="_blank"
        rel="noopener noreferrer"
      >
        ISA Scholarships
      </a>
      for 2026!
    `
  },

  {
    date: "May. '26",
    text: `
      Our paper
      <a
        href="https://arxiv.org/abs/2606.00459"
        target="_blank"
        rel="noopener noreferrer"
      >
        Adaptive PD Gains for Energy-Conscious Control in
        Physical Human-Robot Interaction
      </a>
      received the <strong>Best Paper Award in Robotics</strong>
      at the 23rd Conference on Robots and Vision (CRV 2026)!
    `
  },

  {
    date: "Sep. '25",
    text: `
      I have begun my PhD in Systems and Controls at the
      University of British Columbia (UBC)!
    `
  },

  {
    date: "Jan. '25",
    text: `
      I have successfully defended my Master's Thesis at the
      University of Calgary!
    `
  },

  {
    date: "Sep. '24",
    text: `
      Our abstract submitted for the
      <a
        href="https://conference.albertarobotics.ca"
        target="_blank"
        rel="noopener noreferrer"
      >
        Alberta RISE Conference 2024
      </a>
      has been accepted for a Poster Presentation!
    `
  },

  {
    date: "Jun. '23",
    text: `
      Excited to have taken part in the
      <a
        href="https://mila.quebec/en/news/four-legged-robots-and-ai-mila-hosted-its-2023-robotics-summer-school"
        target="_blank"
        rel="noopener noreferrer"
      >
        Montreal Robotics Summer School 2023
      </a>
      program this summer!
    `
  }
];


function renderNews(containerId, limit = null) {
  const container = document.getElementById(containerId);

  if (!container) return;

  const items =
    limit === null
      ? newsItems
      : newsItems.slice(0, limit);

  container.innerHTML = items
    .map(
      (item) => `
        <div class="news-item">

          <div class="news-date">
            ${item.date}
          </div>

          <div class="news-text">
            ${item.text}
          </div>

        </div>
      `
    )
    .join("");
}