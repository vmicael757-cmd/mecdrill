activedocument.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Sistema de abas e tamanhos inicializado');

    // 1. LÓGICA DAS ABAS PRINCIPAIS (Especificações x Serviços Feitos)
    const mainTabs = document.querySelectorAll('.tab');
    mainTabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-tab');

            // Desativa todas as abas principais
            mainTabs.forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => {
                c.classList.remove('active');
                c.style.display = 'none';
            });

            // Ativa a aba clicada
            this.classList.add('active');
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.classList.add('active');
                targetContent.style.display = 'block';
            }
        });
    });

    // 2. LÓGICA DAS SUB-ABAS DE TAMANHO (1520, 3020, 5020 / 1330, 9010, 2025)
    const subTabs = document.querySelectorAll('.sub-tab');
    subTabs.forEach(subTab => {
        subTab.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSizeId = this.getAttribute('data-sub-tab');

            // Desativa todos os botões de tamanho
            subTabs.forEach(st => st.classList.remove('active'));
            document.querySelectorAll('.sub-tab-content').forEach(sc => {
                sc.classList.remove('active');
                sc.style.display = 'none';
            });

            // Ativa o botão de tamanho clicado
            this.classList.add('active');
            const targetSizeContent = document.getElementById(targetSizeId);
            if (targetSizeContent) {
                targetSizeContent.classList.add('active');
                targetSizeContent.style.display = 'block';
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const comparisonSection = document.querySelector('.comparison-section');
    if (comparisonSection && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        observer.observe(comparisonSection);
    }
});