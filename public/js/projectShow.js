const container_tag = document.querySelector(".container");

const userParams = new URLSearchParams(window.location.search).get("user");
const idParams = new URLSearchParams(window.location.search).get("id");

const gitGetRepoUser = async () => {

    const repos = await fetch(`http://api.github.com/users/${userParams}/repos`).then(
        (res) => res.json()
    );
    console.log(repos);
    const repo = repos.find((repo) => {
        repo.id == idParams
    });

    let template =
        `
    <section class="titlePage">
        <h1>${repo.name}</h1>
        <button class="btnBack">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.3334 5.33334H3.22008L6.94675 1.60667L6.00008 0.666672L0.666748 6L6.00008 11.3333L6.94008 10.3933L3.22008 6.66667H11.3334V5.33334Z"
              fill="#A8B0B9" />
          </svg>

          Go back</button>
      </section>

      <section class="ProjectContents">
        <section class="projectContent">

          <section class="subTitlePage">
            <h2>OverView</h2>
            <button class="badge">Verified</button>
          </section>

          <p>React is a JavaScript library for building user interfaces.</p>

          <p>
            Declarative: React makes it painless to create interactive UIs. Design simple views for each state in your
            application, and React will efficiently update and render just the right components when your data changes.
            Declarative views make your code more predictable, simpler to understand, and easier to debug.
            Component-Based: Build encapsulated components that manage their state, then compose them to make complex
            UIs.
            Since component logic is written in JavaScript instead of templates, you can easily pass rich data through
            your app and keep the state out of the DOM.
            Learn Once, Write Anywhere: We don't make assumptions about the rest of your technology stack, so you can
            develop new features in React without rewriting existing code. React can also render on the server using
            Node
            and power mobile apps using React Native.
          </p>

        </section>

        <section class="cards">

          <section class="card">
            <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5.79982 7.9C3.52982 7.31 2.79982 6.7 2.79982 5.75C2.79982 4.66 3.80982 3.9 5.49982 3.9C7.27982 3.9 7.93982 4.75 7.99982 6H10.2098C10.1398 4.28 9.08982 2.7 6.99982 2.19V0H3.99982V2.16C2.05982 2.58 0.499824 3.84 0.499824 5.77C0.499824 8.08 2.40982 9.23 5.19982 9.9C7.69982 10.5 8.19982 11.38 8.19982 12.31C8.19982 13 7.70982 14.1 5.49982 14.1C3.43982 14.1 2.62982 13.18 2.51982 12H0.319824C0.439824 14.19 2.07982 15.42 3.99982 15.83V18H6.99982V15.85C8.94982 15.48 10.4998 14.35 10.4998 12.3C10.4998 9.46 8.06982 8.49 5.79982 7.9Z"
                fill="#A8B0B9" />
            </svg>

            <div class="infoCard">
              <p class="labelCard">Star</p>
              <p class="numberCard">187k</p>
            </div>

          </section>

          <section class="card">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 9H14C14 6.24 11.76 4 9 4V6C10.66 6 12 7.34 12 9ZM16 9H18C18 4.03 13.97 0 9 0V2C12.87 2 16 5.13 16 9ZM17 12.5C15.75 12.5 14.55 12.3 13.43 11.93C13.33 11.9 13.22 11.88 13.12 11.88C12.86 11.88 12.61 11.98 12.41 12.17L10.21 14.37C7.38 12.93 5.06 10.62 3.62 7.78L5.82 5.57C6.1 5.31 6.18 4.92 6.07 4.57C5.7 3.45 5.5 2.25 5.5 1C5.5 0.45 5.05 0 4.5 0H1C0.45 0 0 0.45 0 1C0 10.39 7.61 18 17 18C17.55 18 18 17.55 18 17V13.5C18 12.95 17.55 12.5 17 12.5ZM2.03 2H3.53C3.6 2.88 3.75 3.75 3.98 4.58L2.78 5.79C2.38 4.58 2.12 3.32 2.03 2ZM16 15.97C14.68 15.88 13.4 15.62 12.2 15.21L13.4 14.01C14.25 14.25 15.12 14.4 16 14.46V15.97Z"
                fill="#A8B0B9" />
            </svg>


            <div class="infoCard">
              <p class="labelCard">Fork</p>
              <p class="numberCard">38.3k</p>
            </div>

          </section>

          <section class="card">
            <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 0L16.29 2.29L11.41 7.17L7.41 3.17L0 10.59L1.41 12L7.41 6L11.41 10L17.71 3.71L20 6V0H14Z"
                fill="#A8B0B9" />
            </svg>


            <div class="infoCard">
              <p class="labelCard">Watch</p>
              <p class="numberCard">6.6k</p>
            </div>

          </section>

          <section class="card">
            <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 0L16.29 2.29L11.41 7.17L7.41 3.17L0 10.59L1.41 12L7.41 6L11.41 10L17.71 3.71L20 6V0H14Z"
                fill="#A8B0B9" />
            </svg>


            <div class="infoCard">
              <p class="labelCard">Contributors</p>
              <p class="numberCard">1.555</p>
            </div>

          </section>

        </section>

      </section>
    `;

    container_tag.innerHTML = template;

}

window.addEventListener("DOMContentLoaded", () => gitGetRepoUser());