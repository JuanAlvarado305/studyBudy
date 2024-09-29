document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const menuItems = document.getElementById('menu-items');
    const fileInput = document.getElementById('file-input');
    const fileCount = document.getElementById('file-count');
    const generateQuizBtn = document.getElementById('generate-quiz');
    const studyTip = document.getElementById('study-tip');
    const tipText = document.getElementById('tip-text');
    const closeTip = document.getElementById('close-tip');
    const createAcc = document.querySelector('.make-account');
    const studyTips = [
        "Break your study sessions into 25-minute focused intervals.",
        "Teach the material to someone else to reinforce your understanding.",
        "Use mnemonic devices to remember complex information.",
        "Create mind maps to visualize connections between concepts.",
        "Take regular breaks to improve concentration and retention."
    ];

    hamburgerMenu.addEventListener('click', function() {
        menuItems.classList.toggle('hidden');
    });

    fileInput.addEventListener('change', function() {
        const files = this.files;
        if (files.length > 0) {
            fileCount.textContent = `${files.length} file(s) selected`;
            fileCount.classList.remove('hidden');
            generateQuizBtn.disabled = false;
        } else {
            fileCount.classList.add('hidden');
            generateQuizBtn.disabled = true;
        }
    });

    generateQuizBtn.addEventListener('click', function() {
        // Here you would typically send the file to a server and get the generated quiz back
        // For this example, we'll just show an alert
        location.href = "./results.html";
        
        alert('Quiz generation would start here!');
    });

    function showRandomTip() {
        const randomTip = studyTips[Math.floor(Math.random() * studyTips.length)];
        tipText.textContent = randomTip;
        studyTip.classList.remove('hidden');
    }

    closeTip.addEventListener('click', function() {
        studyTip.classList.add('hidden');
    });


    const emailField = document.getElementById("email");
    const userNameField = document.getElementById("UName");
    const pwField = document.getElementById("pwd");
    
    // handle clicking of sign in button
    createAcc.addEventListener('click', function(){
        
    })

    // Show a random tip when the page loads
    showRandomTip();
});
