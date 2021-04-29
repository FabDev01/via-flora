import { html, render } from 'lit-html';

const product = () =>
    html`
    <div class="text-center">
        <h2 class="section-heading text-uppercase">Produtos<i class="fas fa-leaf" style="color: green;margin-left: 6px;"></i></h2>
        <h3 class="section-subheading text-muted">Uma pequena amostra de nossos produtos!.</h3>
    </div>
`
render(product(), document.getElementById('products'))
