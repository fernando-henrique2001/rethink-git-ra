const projects_tag = document.querySelector(".projects");

const userParams = new URLSearchParams(window.location.search).get("user");

const gitGetReposUser = async () => {

    const repos = await fetch(`http://api.github.com/users/${userParams}/repos`).then(
        (res) => res.json()
    );

    let template = "";

    repos.map(async (repo) => {

        let info = {
            name: repo.name,
            description: repo.description,
            image: repo.owner.avatar_url
        };

        template +=
            `
        <div class="project">

          <div class="titleCard">
            <img class="imageRepo" src="${info.image}" alt="">
            <h2>${info.name.length > 8 ? info.name.slice(0, 9) + '...' : info.name}</h2>
          </div>

          <div class="textCard">
            <p>${info.description?.length > 69 ? info.description.slice(0, 69) + '...' : info.description}</p>
          </div>

          <a href="/public/projectShow.html?user=${userParams}&id=${repo.id}">Saiba mais</a>

        </div>
        `

        projects_tag.innerHTML = template;
    });
}

window.addEventListener("DOMContentLoaded", () => gitGetReposUser());