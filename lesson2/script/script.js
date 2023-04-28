// Get date
let date = new Date();
// Get year from date
year = date.getFullYear();

// Set the span on the page to the year value.
document.getElementById('year').textContent = year;

// Get last Modified
let lastMod = document.lastModified;
document.getElementById('lastUpdate').textContent = lastMod;