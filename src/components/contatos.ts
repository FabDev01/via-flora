import { html, render } from 'lit-html';

const contatos = () =>
    html` 


<div class="container">
<div class="text-center">
                <h2 class="section-heading text-uppercase">Faça-nos uma visita!</h2>
                <h3 class="section-subheading text-muted" style="color: #ffffff !important">
                    Será um imenso prazer em recebê-los
                </h3>
            </div>
            <form id="contactForm" name="sentMessage" novalidate="novalidate">
                <div class="row align-items-stretch mb-5">
                    <div class="col-md-6">
                        
                        <iframe class="maps" style="margin-left: 50px; border-radius: 10px; display: flex"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14716.309890459217!2d-42.9014011!3d-22.762506!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf335db87ef5ecdcb!2sVia%20Flora!5e0!3m2!1spt-BR!2sbr!4v1606511167341!5m2!1spt-BR!2sbr"
                            width="1000" height="450" frameborder="0" style="border: 0" allowfullscreen=""
                            aria-hidden="false" tabindex="0"></iframe>
                    </div>

                    <div class="col-md-6"></div>
                </div>
                <div class="text-center">
                    <div id="success"></div>
                    <button class="btn btn-primary btn-xl text-uppercase" id="sendMessageButton" type="submit">
                    <a href="https://wa.me/message/BF43YIQ3BX4LB1"
                                    style="text-decoration: initial;color: white; font-size: 18px;">
                                    Enviar Menssagem
                                </a>
                    </button>
                </div>
            </form>
            </div>
`
            render(contatos(), document.getElementById('contatos'))