// Get references to elements
const mapContainer = document.getElementById('mapContainer');
const rightPanelContainer = document.getElementById('rightPanelContainer');
const toggleButton = document.getElementById('toggleRightPanel');


toggleButton.addEventListener('click', function() {
    showRightPanel();
});

function showRightPanel() {
    rightPanelVisible = !rightPanelVisible;
  
  if (rightPanelVisible) {
    mapContainer.classList.remove('expanded');
    mapContainer.classList.add('normal');
    rightPanelContainer.classList.remove('collapsed');
    rightPanelContainer.classList.add('expanded');
    toggleButton.textContent = 'Hide Right Panel';
  } else {
    mapContainer.classList.remove('normal');
    mapContainer.classList.add('expanded');
    rightPanelContainer.classList.remove('expanded');
    rightPanelContainer.classList.add('collapsed');
    toggleButton.textContent = 'Show Right Panel';
  }
  setTimeout(function() {
    window.dispatchEvent(new Event('resize'));
  }, 300);
}