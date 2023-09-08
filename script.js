
// JavaScript to update the current day of the week and UTC time
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDate = new Date();
const currentDay = daysOfWeek[currentDate.getUTCDay()];
// const currentUTCTime = currentDate.toISOString().substr(11, 8);
const currentUTCTime = currentDate.getTime();



// Update the content of the elements with data-testid attributes
const userName = document.querySelector('[data-testid = "slackUserName"]');
const profilePicture = document.querySelector('[data-testid = "slackDisplayImage"]');
const track = document.querySelector('[data-testid = "myTrack"]');
const gitHubLink = document.querySelector('[data-testid = "githubURL"]');
const today = document.querySelector('[data-testid="currentDayOfTheWeek"]');
const currentTime = document.querySelector('[data-testid="currentUTCTime"]');



const myName = "Osemene Pascal";
const myTrack = "Frontend";
const myGitHubLink = "https://github.com/Pasky2/HNG-task-one.git";

//Updating HTML contents
userName.textContent = `Slack Name: ${myName}`;
profilePicture.setAttribute("src", "assets/pascal.jpg");
profilePicture.setAttribute("alt", myName);
track.textContent = `Track: ${myTrack}`;
gitHubLink.setAttribute("href", myGitHubLink);
today.textContent = `Current Day: ${currentDay}`;
currentTime.textContent = `Current UTC Time: ${currentUTCTime}`;

