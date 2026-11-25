// Configurar abas
document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            if (!tabId) return;

            const painelAlvo = document.getElementById(tabId);
            if (!painelAlvo) return;

            tabs.forEach(t => {
                t.classList.remove('active');
                t.setAttribute('aria-selected', 'false');
            });

            document.querySelectorAll('.tab-pane').forEach(c => {
                c.classList.remove('active');
            });

            this.classList.add('active');
            this.setAttribute('aria-selected', 'true');
            painelAlvo.classList.add('active');
        });
    });

    // Configurar envio dos formulários (apenas se existirem na página)
    const formRouter = document.getElementById('formRouterPersonalizado');
    if (formRouter) {
        formRouter.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Solicitação para Router CNC enviada com sucesso! Entraremos em contato em breve.');
            this.reset();
        });
    }

    const formLaser = document.getElementById('formLaserPersonalizado');
    if (formLaser) {
        formLaser.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Solicitação para Laser CO2 enviada com sucesso! Entraremos em contato em breve.');
            this.reset();
        });
    }
});