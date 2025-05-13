document.addEventListener('DOMContentLoaded', function() {
    // Tab switching functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            
            // Update active tab button
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Show corresponding tab content
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === tabId) {
                    content.classList.add('active');
                }
            });
        });
    });

    // Generate game cards for the home page
    const generateGameCards = () => {
        const gamesGrid = document.getElementById('games-grid');
        
        if (!gamesGrid) return;
        
        gameData.forEach(game => {
            const card = document.createElement('div');
            card.className = 'game-card';
            card.dataset.gameId = game.id;
            
            // Create tag elements if game has tags
            const tagElements = game.tags ? 
                `<div class="game-tag">${game.tags[0]}</div>` : '';
            
            card.innerHTML = `
                <img src="${game.image}" alt="${game.title}">
                <div class="game-info">
                    <div>
                        <h3>${game.title}</h3>
                        <p>${game.description}</p>
                    </div>
                    ${tagElements}
                </div>
            `;
            
            gamesGrid.appendChild(card);
            
            // Add click event to navigate to scripts tab and show relevant script
            card.addEventListener('click', () => {
                // Switch to scripts tab
                document.querySelector('.tab-btn[data-tab="scripts"]').click();
                
                // Scroll to that game's script
                setTimeout(() => {
                    const scriptElement = document.querySelector(`.script-box[data-game-id="${game.id}"]`);
                    if (scriptElement) {
                        scriptElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        highlightElement(scriptElement);
                    }
                }, 300);
            });
        });
    };

    // Generate script boxes for scripts page
    const generateScriptBoxes = () => {
        const scriptsContainer = document.getElementById('scripts-container');
        
        if (!scriptsContainer) return;
        
        gameData.forEach(game => {
            const scriptBox = document.createElement('div');
            scriptBox.className = 'script-box';
            scriptBox.dataset.gameId = game.id;
            
            scriptBox.innerHTML = `
                <div class="script-header">
                    <h3 class="script-title">${game.title} Script</h3>
                    <button class="copy-btn" data-script="${game.id}">
                        <i class="fas fa-copy"></i> Copy
                    </button>
                </div>
                <p class="script-description">${game.scriptDescription}</p>
                <div class="script-content" id="script-${game.id}">
                    ${game.script}
                </div>
            `;
            
            scriptsContainer.appendChild(scriptBox);
        });
    };

    // Copy script functionality
    const setupCopyButtons = () => {
        document.querySelectorAll('.copy-btn').forEach(button => {
            button.addEventListener('click', () => {
                const scriptId = button.getAttribute('data-script');
                const scriptContent = document.getElementById(`script-${scriptId}`);
                
                if (!scriptContent) return;
                
                // Create a temporary text area to copy from
                const textArea = document.createElement('textarea');
                textArea.value = scriptContent.textContent;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                
                // Show toast notification
                showToast('Script copied to clipboard!');
                
                // Visual feedback on button
                button.innerHTML = '<i class="fas fa-check"></i> Copied';
                setTimeout(() => {
                    button.innerHTML = '<i class="fas fa-copy"></i> Copy';
                }, 2000);
            });
        });
    };

    // Toast notification function
    const showToast = (message) => {
        const toast = document.getElementById('toast');
        if (!toast) return;
        
        // Update message if needed
        const messageElement = toast.querySelector('.toast-message');
        if (messageElement) {
            messageElement.textContent = message;
        }
        
        // Show toast
        toast.classList.add('show');
        
        // Hide toast after 3 seconds
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    };

    // Highlight an element briefly to draw attention
    const highlightElement = (element) => {
        element.classList.add('pulse');
        setTimeout(() => {
            element.classList.remove('pulse');
        }, 2000);
    };

    // Setup quick links in footer
    const setupFooterLinks = () => {
        document.querySelectorAll('.footer-section ul li a').forEach(link => {
            link.addEventListener('click', (e) => {
                const target = link.getAttribute('href').substring(1);
                
                if (target && document.getElementById(target)) {
                    e.preventDefault();
                    document.querySelector(`.tab-btn[data-tab="${target}"]`).click();
                }
            });
        });
        
        // Terms of service link
        const termsLink = document.getElementById('terms-link');
        if (termsLink) {
            termsLink.addEventListener('click', (e) => {
                e.preventDefault();
                showToast('Terms of Service will be available soon!');
            });
        }
    };

    // Add tilt effect to game cards
    const setupCardTiltEffect = () => {
        document.querySelectorAll('.game-card').forEach(card => {
            // For desktop
            card.addEventListener('mousemove', (e) => {
                if (window.innerWidth <= 768) return; // Disable on mobile
                
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const angleX = (y - centerY) / 20;
                const angleY = (centerX - x) / 20;
                
                card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateY(-10px) scale(1.02)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });
        });
    };

    // Initialize all components
    const init = () => {
        generateGameCards();
        generateScriptBoxes();
        setupCopyButtons();
        setupFooterLinks();
        setTimeout(setupCardTiltEffect, 500); // Add delay to ensure cards are rendered
    };

    // Run initialization
    init();
});