// Add JavaScript to dynamically create cards in the 'My Plot' section
// Replace this section with actual data from your backend if available

// Sample data for the cards
const plotData = [
    { name: "Plot 1", size: "100 ha", type: "Type A", dataComplete: "50%" },
    { name: "Plot 2", size: "75 ha", type: "Type B", dataComplete: "80%" },
    { name: "Plot 3", size: "50 ha", type: "Type C", dataComplete: "100%" },
    // Add more data as needed
  ];
  
  const myPlotSection = document.querySelector(".my-plot");
  
  function createCard(data) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="path/to/${data.name}.jpg" alt="${data.name}">
      <h3>Name: ${data.name}</h3>
      <p>Size: ${data.size}</p>
      <p>Type: <img src="path/to/${data.type}.png" alt="${data.type}"></p>
      <p>Data Complete: ${data.dataComplete}</p>
      <button class="info-btn">Info</button>
    `;
    myPlotSection.appendChild(card);
  }
  
  plotData.forEach((data) => {
    createCard(data);
  });
  
  // Add event listeners or additional functionality as needed
  // For example, handling the '+Add Plot' button or showing additional icons on hover
  