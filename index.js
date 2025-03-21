const init = () => {};

document.addEventListener("DOMContentLoaded", init);

const inputForm = document.querySelector("form");

inputForm.addEventListener("submit", (event) => {});

const movieList = document.querySelector("#movie-list");

const movieTemplate = document.querySelector("#movie-template").content;

const addMovie = (title, summary) => {
    const clone = movieTemplate.cloneNode(true);
    const titleElement = clone.querySelector(".movie-title");
    const summaryElement = clone.querySelector(".movie-summary");

    titleElement.textContent = title;
    summaryElement.textContent = summary;

    movieList.appendChild(clone);
};

// Example usage
addMovie("The Brave Little Toaster", "A group of appliances set off on a journey");
addMovie("The Princess Bride", "A mix of swashbuckling, romance, and comedy");
addMovie("Spirited Away", "A young girl works to reunite with her parents while trapped in a supernatural realm");