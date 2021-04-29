import { html, render } from 'lit-html';
import photoOne from '../assets/img/portfolio/planta1.jpeg';
import photoTwo from '../assets/img/portfolio/planta2.jpeg';
import photoThree  from '../assets/img/portfolio/planta3.jpeg';
import photoFour from '../assets/img/portfolio/planta4.jpeg';
import photoSix from '../assets/img/portfolio/planta6.jpeg';
import photoSeven from '../assets/img/portfolio/planta7.jpeg';
import photoEigth from '../assets/img/portfolio/planta8.jpeg';
import photoNine from '../assets/img/portfolio/planta9.jpeg';
import photoTen from '../assets/img/portfolio/planta10.jpeg';


const productsGrid = () =>
    html`  
        <div class="row">
            <div class="col-lg-4 col-sm-6 mb-4">
                <div class="portfolio-item">
                    <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img class="img-fluid" src="${photoOne}" alt="" />
                    </a>
                    <div class="portfolio-caption">
                        <div class="portfolio-caption-heading">Calathea Ornata</div>
                        <div class="portfolio-caption-subheading text-muted">Maranta-riscada</div>
                        <button type="button" class="btn btn-danger" style="height: 53px;border-radius: 10px; margin-top: 10px; ">
                                <a href="https://wa.me/message/BF43YIQ3BX4LB1"
                                    style="text-decoration: initial;color: white; font-size: 18px;">
                                    Comprar
                                </a>
                            </button>
                    </div>
                </div>
            </div>


            <div class="col-lg-4 col-sm-6 mb-4">
                <div class="portfolio-item">
                    <a class="portfolio-link" data-toggle="modal" href="#portfolioModal2">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img class="img-fluid" src="${photoTwo}" alt="" />
                    </a>
                    <div class="portfolio-caption">
                        <div class="portfolio-caption-heading">Calathea Orbifolia</div>
                        <div class="portfolio-caption-subheading text-muted">Prayer Plant</div>
                        <button type="button" class="btn btn-danger" style="height: 53px;border-radius: 10px; margin-top: 10px; ">
                        <a href="https://wa.me/message/BF43YIQ3BX4LB1"
                                    style="text-decoration: initial;color: white; font-size: 18px;">
                                    Comprar
                                </a>
                            </button>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-sm-6 mb-4">
                <div class="portfolio-item">
                    <a class="portfolio-link" data-toggle="modal" href="#portfolioModal3">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img class="img-fluid" src="${photoThree}" alt=""  />
                    </a>
                    <div class="portfolio-caption">
                        <div class="portfolio-caption-heading">Alocasia Amazonica</div>
                        <div class="portfolio-caption-subheading text-muted">Alocásia Polly</div>
                        <button type="button" class="btn btn-danger" style="height: 53px;border-radius: 10px; margin-top: 10px; ">
                        <a href="https://wa.me/message/BF43YIQ3BX4LB1"
                                    style="text-decoration: initial;color: white; font-size: 18px;">
                                    Comprar
                                </a>
                            </button>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                <div class="portfolio-item">
                    <a class="portfolio-link" data-toggle="modal" href="#portfolioModal4">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img class="img-fluid" src="${photoSeven}" alt="" />
                    </a>
                    <div class="portfolio-caption">
                        <div class="portfolio-caption-heading">Peperomia Golden Cais</div>
                        <div class="portfolio-caption-subheading text-muted">Peperomia Limão</div>
                        <button type="button" class="btn btn-danger" style="height: 53px;border-radius: 10px; margin-top: 10px; ">
                        <a href="https://wa.me/message/BF43YIQ3BX4LB1"
                                    style="text-decoration: initial;color: white; font-size: 18px;">
                                    Comprar
                                </a>
                            </button>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-sm-6 mb-4 mb-sm-30" >
                <div class="portfolio-item">
                    <a class="portfolio-link" data-toggle="modal" href="#portfolioModal5">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img class="img-fluid" src="${photoTen}" alt=""  />
                    </a>
                    <div class="portfolio-caption">
                        <div class="portfolio-caption-heading">Sansevieria Moonshine</div>
                        <div class="portfolio-caption-subheading text-muted">Espada Prata</div>
                        <button type="button" class="btn btn-danger" style="height: 53px;border-radius: 10px; margin-top: 10px; ">
                        <a href="https://wa.me/message/BF43YIQ3BX4LB1"
                                    style="text-decoration: initial;color: white; font-size: 18px;">
                                    Comprar
                                </a>
                            </button>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-sm-6">
                <div class="portfolio-item">
                    <a class="portfolio-link" data-toggle="modal" href="#portfolioModal6">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img class="img-fluid" src="${photoSix}" alt=""  />
                    </a>
                    <div class="portfolio-caption">
                        <div class="portfolio-caption-heading">Espironema</div>
                        <div class="portfolio-caption-subheading text-muted">Callisia Warszewicziana</div>
                        <button type="button" class="btn btn-danger" style="height: 53px;border-radius: 10px; margin-top: 10px; ">
                        <a href="https://wa.me/message/BF43YIQ3BX4LB1"
                                    style="text-decoration: initial;color: white; font-size: 18px;">
                                    Comprar
                                </a>
                            </button>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-sm-6">
                <div class="portfolio-item">
                    <a class="portfolio-link" data-toggle="modal" href="#portfolioModal7">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img class="img-fluid" src="${photoFour}" alt=""  />
                    </a>
                    <div class="portfolio-caption">
                        <div class="portfolio-caption-heading">Violeta</div>
                        <div class="portfolio-caption-subheading text-muted">Violeta-africana</div>
                        <button type="button" class="btn btn-danger" style="height: 53px;border-radius: 10px; margin-top: 10px; ">
                        <a href="https://wa.me/message/BF43YIQ3BX4LB1"
                                    style="text-decoration: initial;color: white; font-size: 18px;">
                                    Comprar
                                </a>
                            </button>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-sm-6">
                <div class="portfolio-item">
                    <a class="portfolio-link" data-toggle="modal" href="#portfolioModal8">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img class="img-fluid" src="${photoEigth}" alt=""  />
                    </a>
                    <div class="portfolio-caption">
                        <div class="portfolio-caption-heading">Dipladenia</div>
                        <div class="portfolio-caption-subheading text-muted">Mandevilla Sanderi</div>
                        <button type="button" class="btn btn-danger" style="height: 53px;border-radius: 10px; margin-top: 10px; ">
                        <a href="https://wa.me/message/BF43YIQ3BX4LB1"
                                    style="text-decoration: initial;color: white; font-size: 18px;">
                                    Comprar
                                </a>
                            </button>
                    </div>
                </div>
            </div>

            <div class="col-lg-4 col-sm-6">
                <div class="portfolio-item">
                    <a class="portfolio-link" data-toggle="modal" href="#portfolioModal9">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img class="img-fluid" src="${photoNine}" alt=""  />
                    </a>
                    <div class="portfolio-caption">
                        <div class="portfolio-caption-heading">Antúrio Verde Vermelho</div>
                        <div class="portfolio-caption-subheading text-muted">Anthurium Andraeanum</div>
                        <button type="button" class="btn btn-danger" style="height: 53px;border-radius: 10px; margin-top: 10px; ">
                        <a href="https://wa.me/message/BF43YIQ3BX4LB1"
                                    style="text-decoration: initial;color: white; font-size: 18px;">
                                    Comprar
                                </a>
                            </button>
                    </div>
                </div>
            </div>
        </div>
`
render(productsGrid(), document.getElementById('productsItems'))

