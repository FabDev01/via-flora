import { html, render } from 'lit-html';


const titleServices = (name?: string) =>
    html`
        <h2 class="section-heading text-uppercase">Serviços <i class="fas fa-leaf" style="color: green;margin-left: 6px;"></i></h2>
        <h3 class="section-subheading text-muted">Confira nossos serviços e Faça-nos uma visita!.</h3>
    `;

render(titleServices(), document.getElementById('titleServices'));