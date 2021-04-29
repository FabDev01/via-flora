import { html, render } from 'lit-html';


const sectionService = () =>
    html`
    <div class="row text-center">
        <div class="col-md-4">
            <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-truck fa-stack-1x fa-inverse"></i>
                
            </span>
            <h4 class="my-3">Envio a Domicílio</h4>
            <p class="text-muted">Realizamos o envio de nossos produtos para todo estado (RJ) e redondezas ou você poderá efetuar a retirada em nossa loja.</p>
        </div>


        <div class="col-md-4">
            <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-seedling fa-stack-1x fa-inverse"></i>
                
            </span>
            <h4 class="my-3">Plantas Raras e Exóticas</h4>
            <p class="text-muted">Possuimos diversas variedades de plantas raras e exóticas. Todas saudáveis e prontas para alegrar o seu jardim!.</p>
        </div>
        <div class="col-md-4">
            <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-spa fa-stack-1x fa-inverse"></i>
            </span>
            <h4 class="my-3">Urban Jungle</h4>
            <p class="text-muted">Possuimos plantas para compor o interior de seu ambiente trazendo elementos ligados à natureza concentrados em um só lugar. 
                Além de resgatar a brasilidade, o Urban Jungle ajuda na saúde física e mental.</p>
        </div>
    </div>
`
render(sectionService(), document.getElementById('sectionService'));