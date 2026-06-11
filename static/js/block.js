window.addEventListener('wheel', function(e) {
    if (e.ctrlKey) {
        e.preventDefault(); 
    }
}, { passive: false }); 

window.addEventListener('keydown', function(e) {
    if (e.ctrlKey && (
        e.key === '=' ||     
        e.key === '+' ||     
        e.key === '-' ||    
        e.key === '_' ||     
        e.key === '0'        
    )) {
        e.preventDefault(); 
    }
});

window.addEventListener('touchstart', function(e) {
    if (e.touches.length > 1) {
        e.preventDefault(); 
    }
}, { passive: false });

window.addEventListener('touchmove', function(e) {
    if (e.touches.length > 1) {
        e.preventDefault(); 
    }
}, { passive: false });