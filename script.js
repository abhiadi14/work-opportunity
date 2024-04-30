document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('href').slice(1);
            const section = document.getElementById(sectionId);
            window.scrollTo({
                behavior: 'smooth',
                top: section.offsetTop
            });
        });
    });

//     // Function to initialize Google Maps
//     function initMap() {
//         const map = new google.maps.Map(document.getElementById('map'), {
//             center: { lat: 35.682839, lng: 139.759455 }, // Tokyo coordinates
//             zoom: 8 // Zoom level
//         });

//         // Add markers for job locations
//         const jobLocations = [
//             { lat: 35.6895, lng: 139.6917, title: 'Tokyo' },
//             { lat: 34.6937, lng: 135.5023, title: 'Osaka' },
//             { lat: 35.0116, lng: 135.7681, title: 'Kyoto' }
//             // Add more job locations as needed
//         ];

//         jobLocations.forEach(location => {
//             new google.maps.Marker({
//                 position: location,
//                 map: map,
//                 title: location.title
//             });
//         });
//     }

//     // Function to fetch job listings from GitHub Jobs API
//     async function fetchJobs() {
//         try {
//             const response = await fetch('https://jobs.github.com/positions.json?description=javascript&location=japan');
//             const jobs = await response.json();
//             displayJobs(jobs);
//         } catch (error) {
//             console.error('Error fetching job listings:', error);
//         }
//     }

//     // Function to display job listings on the webpage
//     function displayJobs(jobs) {
//         const jobListingsContainer = document.getElementById('job-listings');
//         jobListingsContainer.innerHTML = ''; // Clear previous listings
//         jobs.forEach(job => {
//             const listItem = document.createElement('li');
//             listItem.innerHTML = `
//                 <h3>${job.title}</h3>
//                 <p><strong>Company:</strong> ${job.company}</p>
//                 <p><strong>Type:</strong> ${job.type}</p>
//                 <p><strong>Location:</strong> ${job.location}</p>
//                 <p><strong>Description:</strong> ${job.description}</p>
//                 <a href="${job.url}" target="_blank">Apply Now</a>
//             `;
//             jobListingsContainer.appendChild(listItem);
//         });
//     }

//     // Fetch job listings and initialize Google Maps when the page loads
//     fetchJobs();
//     initMap();
 });
