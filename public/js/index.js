const users_tag = document.querySelector(".users");

let users = ["arthur-vargas",
  "MilagreRethink",
  "loubackrethink",
  "filiperethink",
  "gabrielrethink",
  "vidallarissa",
  "marcosrezrethink",
  "mateushfmrethink",
  "AnaClara-rethink",
  "amandadclsRethink",
  "luisrethink",
  "lucaspaula6",
  "carolinavaleriano",
  "fabianakamo",
  "FelipeReggiane",
  "fernando-henrique2001",
  "gabsrethink",
  "Luisrethink",
  "sthephanytezza-dev"
];

const gitGetUsers = async (users) => {
  let template = "";

  users.map(async (user) => {
    user = await fetch(`http://api.github.com/users/${user}`).then(
      (res) => res.json()
    );
    let info = {
      image: user.avatar_url,
      name: user.name,
      company: user.company,
      repos: user.public_repos,
      following: user.following,
      followers: user.followers,
      repos_url: user.repos_url,
    }

    template +=
      `
        <div class="user">
          <img src="${info.image}" alt="" class="imgUser">

          <div class="identificationUser">
            <p class="name">${user.name ? user.name : user.login}</p>
            <p class="office">${info.company}</p>
          </div>

          <div class="preview">
            <div class="projectsPreview">
              <p class="labelPreview">Projects</p>
              <p class="numberPreview">${info.repos}</p>
            </div>

            <div class="splitPreview"></div>

            <div class="starsPreview">
              <p class="labelPreview">Following</p>
              <p class="numberPreview">${info.following}</p>
            </div>

            <div class="splitPreview"></div>

            <div class="followersPreview">
              <p class="labelPreview">Followers</p>
              <p class="numberPreview">${info.followers}</p>
            </div>
          </div>

          <button onclick="getButtonViewProfile('${user.login}')" type="click" class="viewProfile">View Profile</button>
          </div>
          `;

    users_tag.innerHTML = template;
  });
};

const viewProfile_tag = document.querySelector(".viewProfile");

const getButtonViewProfile = (user) => {
  window.location.href = `/public/projects.html?user=${user}`;
}

window.addEventListener("DOMContentLoaded", () => gitGetUsers(users));