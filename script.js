function setup() {
  const episodes = getAllEpisodes();
  makePageForEpisodes(episodes);
}

function makePageForEpisodes(episodeList) {
  const container = document.getElementById("container");

  const episodesCount = document.createElement("p");
  episodesCount.textContent = `Got ${episodeList.length} episode(s)`;
  container.appendChild(episodesCount);

  const episodesContainer = document.getElementById("episodes");
  container.appendChild(episodesContainer);

  episodeList.forEach((element) => {
    const episode = document.createElement("div");
    episode.className = "episode";

    const episodeSummary = document.createElement("div");
    episodeSummary.className = "summary";
    episodeSummary.innerHTML = element.summary;

    const episodeName = document.createElement("h3");
    episodeName.className = "episode-name";
    episodeName.innerText = element.name;

    const episodeImage = document.createElement("img");
    episodeImage.src = element.image.medium;
    episodeImage.setAttribute = "alt";
    episodeImage.alt = "episode image";
    episodeImage.className = "episode-image";

    const episodeCode = document.createElement("p");
    episodeCode.className = "episode-code";
    episodeCode.innerHTML = `${formatEpisodeCode(
      element.season,
      element.number
    )}`;

    episodesContainer.appendChild(episode);
    episode.appendChild(episodeCode);
    episode.appendChild(episodeName);
    episode.appendChild(episodeImage);
    episode.appendChild(episodeSummary);
  });
}

function padTheNumber(num) {
  return num.toString().padStart(2, "0");
}

function formatEpisodeCode(season, number) {
  return `S${padTheNumber(season)}E${padTheNumber(number)}`;
}

window.onload = setup;
