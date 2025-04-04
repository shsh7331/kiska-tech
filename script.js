// // Page content definitions
// const pages = {
//   home: `
//     <h2>Welcome to Kiska Tech</h2>
//     <p>Ken Tech delivers innovative software solutions tailored to your business needs. From app development to cloud integration, we provide services that drive success.</p>
//     <p>Explore our expertise in web development, enterprise solutions, mobile applications, and IT consulting.</p>
//   `,
//   about: `
//     <h2>About Kiska Tech</h2>
//     <p>Founded with a passion for technology, Ken Tech is a team of experienced professionals committed to delivering top-notch software services.</p>
//     <p>Our mission is to empower businesses through scalable and innovative software solutions that solve real-world problems.</p>
//     <p>We believe in collaboration, agility, and delivering excellence on every project.</p>
//   `,
//   contact: `
//     <h2>Contact Us</h2>
//     <p>Have a question or need a custom software solution? Reach out to us!</p>
//     <form onsubmit="handleSubmit(event)">
//       <label for="name">Name:</label><br>
//       <input type="text" id="name" name="name" required><br><br>
//       <label for="email">Email:</label><br>
//       <input type="email" id="email" name="email" required><br><br>
//       <label for="message">Message:</label><br>
//       <textarea id="message" name="message" rows="5" required></textarea><br><br>
//       <input type="submit" value="Send Message">
//     </form>
//   `
// };
// // Load default page
// document.addEventListener("DOMContentLoaded", () => {
//   loadPage("home");
//   document.querySelectorAll("nav a").forEach(link => {
//     link.addEventListener("click", e => {
//       e.preventDefault();
//       const page = e.target.getAttribute("data-page");
//       loadPage(page);
//     });
//   });
// });
// // Load content dynamically
// function loadPage(page) {
//   document.getElementById("content").innerHTML = pages[page];
// }
// // Optional: Handle contact form submission
// function handleSubmit(event) {
//   event.preventDefault();
//   alert("Thank you for contacting Kiska Tech! We'll get back to you soon.");
// }
