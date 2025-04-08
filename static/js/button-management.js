// Add this to your JavaScript code
function loadButtonNames() {
    fetch('/load_button_names')
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                data.buttonNames.forEach(button => {
                    const buttonElement = document.getElementById(button.button_id);
                    if (buttonElement) {
                        buttonElement.textContent = button.name;
                    }
                });
            } else {
                console.error('Failed to load button names:', data.message);
            }
        })
        .catch(error => console.error('Error loading button names:', error));
}
// Add this to your JavaScript code
function setupRenameButtons() {
    setupRenameHandler('Rename', 'franchiseTerritoriesBtn');
    setupRenameHandler('Renameradial', 'RadialAnalysisBtn');
    setupRenameHandler('Renamerecruitment', 'recruitmentTerritoriesBtn');
}

function setupRenameHandler(renameButtonId, targetButtonId) {
    const renameButton = document.getElementById(renameButtonId);
    if (renameButton) {
        renameButton.addEventListener('click', function() {
            const targetButton = document.getElementById(targetButtonId);
            const currentName = targetButton.textContent.trim();
            const newName = prompt('Enter new name:', currentName);
            
            if (newName && newName !== currentName) {
                // Update the button text immediately
                targetButton.textContent = newName;
                
                // Save to database
                fetch('/update_button_name', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        buttonId: targetButtonId,
                        newName: newName
                    })
                })
                .then(response => response.json())
                .then(data => {
                    if (data.status !== 'success') {
                        console.error('Failed to update button name:', data.message);
                        // Revert the button text if save failed
                        targetButton.textContent = currentName;
                    }
                })
                .catch(error => {
                    console.error('Error updating button name:', error);
                    // Revert the button text if save failed
                    targetButton.textContent = currentName;
                });
            }
        });
    }
}

// Call this function when the page loads
document.addEventListener('DOMContentLoaded', function() {
    loadButtonNames();
    setupRenameButtons();
});