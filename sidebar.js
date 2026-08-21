document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.getElementById("sidebar");

  if (!sidebar) return;

  sidebar.innerHTML = `
    <div class="sidebar-inner">

      <a class="sidebar-name" href="index.html">
        Danyal Saqib
      </a>

      <div class="sidebar-position">
        PhD Student<br />
        The University of British Columbia
      </div>

      <nav class="sidebar-nav">

        <a href="index.html" data-page="index.html">
          Home
        </a>

        <a href="news.html" data-page="news.html">
          News
        </a>

        <div class="nav-group">
          <div class="nav-group-title">Research</div>

          <a href="research.html" data-page="research.html">
            Research
          </a>

          <a href="publications.html" data-page="publications.html">
            Publications
          </a>
        </div>

        <div class="nav-group">
          <div class="nav-group-title">Teaching</div>

          <a href="teaching.html" data-page="teaching.html">
            Teaching
          </a>
        </div>

        <div class="nav-group">
          <div class="nav-group-title">Extra</div>

          <a href="community_advocacy.html" data-page="community_advocacy.html">
            Community and Advocacy
          </a>
        </div>

      </nav>

      <div class="sidebar-external">

  <a
    href="data/danyal_saqib_cv.pdf"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i class="fa-solid fa-file-lines"></i>
    <span>CV</span>
  </a>

  <a
    href="https://scholar.google.com/citations?user=EUfInDIAAAAJ&hl=en"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i class="ai ai-google-scholar"></i>
    <span>Google Scholar</span>
  </a>

  <a
    href="https://github.com/danyalsaqib"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i class="fa-brands fa-github"></i>
    <span>GitHub</span>
  </a>

  <a
    href="https://www.linkedin.com/in/danyal-saqib/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i class="fa-brands fa-linkedin"></i>
    <span>LinkedIn</span>
  </a>

  <a href="mailto:dsaqib@student.ubc.ca">
    <i class="fa-solid fa-envelope"></i>
    <span>Email</span>
  </a>

</div>

    </div>
  `;

  let currentPage = window.location.pathname.split("/").pop();

  if (!currentPage) {
    currentPage = "index.html";
  }

  const activeLink = document.querySelector(
    `.sidebar-nav a[data-page="${currentPage}"]`
  );

  if (activeLink) {
    activeLink.classList.add("active");
  }
});