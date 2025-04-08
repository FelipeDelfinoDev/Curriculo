// Função para verificar se os elementos estão visíveis no viewport
function checkScroll() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;

        // Verifica se a seção está visível no viewport
        if (sectionTop < window.innerHeight && sectionBottom >= 0) {
            section.classList.add('in-view');
        } else {
            section.classList.remove('in-view');
        }
    });
}

// Aciona a função sempre que o usuário rolar a página
window.addEventListener('scroll', checkScroll);
checkScroll();  // Verifica as seções imediatamente ao carregar a página
