import { html, render } from 'lit-html';
import photoOne from '../assets/img/portfolio/planta1.jpeg';
import photoTwo from '../assets/img/portfolio/planta2.jpeg';
import photoThree from '../assets/img/portfolio/planta3.jpeg';
import photoFour from '../assets/img/portfolio/planta4.jpeg';
import photoSix from '../assets/img/portfolio/planta6.jpeg';
import photoSeven from '../assets/img/portfolio/planta7.jpeg';
import photoEigth from '../assets/img/portfolio/planta8.jpeg';
import photoNine from '../assets/img/portfolio/planta9.jpeg';
import photoTen from '../assets/img/portfolio/planta10.jpeg';



const modal = () =>
    html`
   
<div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="close-modal" data-dismiss="modal"><i class="far fa-times-circle"
                    style="font-size: xxx-large;"></i></div>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="modal-body">
                            <!-- Project Details Go Here-->
                            <h2 class="text-uppercase">Calathea Ornata</h2>
                            <p class="item-intro text-muted">Maranta-riscada</p>
                            <img class="img-fluid d-block mx-auto" src="${photoOne}" alt="" />
                            <p>É a espécie de Calathea de maior porte em cultivo. Na juventude apresenta linhas
                                paralelas rosa-avermelhadas, aos pares, as quais desaparecem na fase adulta. A parte de
                                baixo de cada uma das folhas é roxa
                                Ótima planta!! Adequada para vasos, principalmente na fase juvenil, para bordaduras ou
                                conjuntos, em canteiros a meia-sombra, mantidos sempre úmidos. Sua multiplicação é
                                através de touceiras.</p>
                            <button type="button" class="btn btn-warning" style=" height: 53px;border-radius: 10px;
                                        background-color: #e40000!important;
                                        border-color: #e40000!important;">
                                <a href="https://instagram.com/viafloragarden?igshid=13fa1kowu1jc4"
                                    style="text-decoration: initial; color: white;font-size: 18px;">
                                    Saiba Mais
                                </a>


                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Modal 2-->
<div class="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="close-modal" data-dismiss="modal"><i class="far fa-times-circle"
                    style="font-size: xxx-large;"></i>
            </div>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="modal-body">
                            <!-- Project Details Go Here-->
                            <h2 class="text-uppercase">Calathea Orbifolia</h2>
                            <p class="item-intro text-muted">Prayer Plant</p>
                            <img class="img-fluid d-block mx-auto" src="${photoTwo}" alt="" />
                            <p>uma das plantas preferidas dos colecionadores! Perfeita para a decoração de interiores de
                                qualquer casa.A Calathea Orbifolia não é uma planta grande, portanto, no seu habitat
                                natural, vive sob outras espécies maiores. Prefere luz filtrada uma vez que as suas
                                folhas não estão preparadas para receber luz solar direta. A luz solar direta poderá
                                fazer com que desbote e as suas folhas fiquem queimadas.Cultivada com terra rica em
                                matéria orgânica (substrato), de boa drenagem e deve ser mantida sempre úmida (nunca
                                encharcada).</p>
                            <button type="button" class="btn btn-warning" style=" height: 53px;border-radius: 10px;
                                        background-color: #e40000!important;
                                        border-color: #e40000!important;">
                                <a href="https://instagram.com/viafloragarden?igshid=13fa1kowu1jc4"
                                    style="text-decoration: initial; color: white;font-size: 18px;">
                                    Saiba Mais
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Modal 3-->
<div class="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="close-modal" data-dismiss="modal"><i class="far fa-times-circle"
                    style="font-size: xxx-large;"></i>
            </div>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="modal-body">
                            <!-- Project Details Go Here-->
                            <h2 class="text-uppercase">Alocasia Amazonica</h2>
                            <p class="item-intro text-muted">Alocásia Polly</p>
                            <img class="img-fluid d-block mx-auto" src="${photoThree}" alt="" alt="" />
                            <p>Folhas em forma de seta, grandes nervuras em branco e prata sobre o verde metálico
                                intenso e brilhante. Estas características pertencem a, pelo menos, duas alocásias, a
                                polly e a amazônica, da família das Aráceas. Ambas – dentre as mais de 70 variações
                                existentes – são bem parecidas, exceto por um detalhe: o tamanho. A polly tem folhas
                                menores. Apesar de seus nomes científicos sugerirem a origem na Amazônia, elas são
                                híbridas, ou seja, são fruto do cruzamento de duas ou mais espécies, e têm ascendência
                                asiática. Mas, seja no calor da Ásia ou do Brasil, o seu habitat pode nos dar pistas das
                                condições ideais para o cultivo dentro de casa.</p>
                            <button type="button" class="btn btn-warning" style=" height: 53px;border-radius: 10px;
                                        background-color: #e40000!important;
                                        border-color: #e40000!important;">
                                <a href="https://instagram.com/viafloragarden?igshid=13fa1kowu1jc4"
                                    style="text-decoration: initial; color: white;font-size: 18px;">
                                    Saiba Mais
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Modal 4-->
<div class="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="close-modal" data-dismiss="modal"><i class="far fa-times-circle"
                    style="font-size: xxx-large;"></i>
            </div>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="modal-body">
                            <!-- Project Details Go Here-->
                            <h2 class="text-uppercase">Peperomia Golden Cais</h2>
                            <p class="item-intro text-muted">Peperomia Limão</p>
                            <img class="img-fluid d-block mx-auto" src="${photoSeven}" alt="" />
                            <p>Peperômias são populares durante muitos anos como pequena planta dentro de casa. Existem
                                em torno de 1.000 espécies, aproximadamente 100 variedades são cultivadas e cerca de 10
                                variedades significam a maioridade na produção comercial. Muitas cultivares são
                                variedades da espécie P. obtusifolia. O nome Peperômia se refere a folhagem com certa
                                semelhança com a Pimenta, enquanto obtusifolia se refere a forma oval da folha. Muitas
                                Peperômias crescem, em seu habitat natural, como epífitas o que normalmente são os
                                trópicos do hemisfério oeste. P. obtusifolia , por exemplo é nativa da América Tropical
                                e do Sul da Flórida. Por causa do seu habitat e a sua tendência epifítica as peperômias
                                gostam de umidade, baixo nível de água no solo, e altos níveis de luz. Como outros
                                epífitas, peperômias são fáceis de enraizar.</p>
                            <button type="button" class="btn btn-warning" style=" height: 53px;border-radius: 10px;
                                        background-color: #e40000!important;
                                        border-color: #e40000!important;">
                                <a href="https://instagram.com/viafloragarden?igshid=13fa1kowu1jc4"
                                    style="text-decoration: initial; color: white;font-size: 18px;">
                                    Saiba Mais
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Modal 5-->
<div class="portfolio-modal modal fade" id="portfolioModal5" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="close-modal" data-dismiss="modal"><i class="far fa-times-circle"
                    style="font-size: xxx-large;"></i>
            </div>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="modal-body">
                            <!-- Project Details Go Here-->
                            <h2 class="text-uppercase">Sansevieria Moonshine</h2>
                            <p class="item-intro text-muted">Espada Prata</p>
                            <img class="img-fluid d-block mx-auto" src="${photoTen}" alt="" />
                            <p>Sanseveria trifasciata 'moonshine' é uma planta suculenta caracterizada por suas folhas
                                em forma de espada verticais e sua
                                cor verde-cinzenta. Esta é uma ótima planta de purificação de ar e para iniciantes por
                                ser fácil de cuidar. Pode ser usada tanto no interior como no exterior, não sendo muito
                                exigente quando à quantidade de luz que apanha.</p>
                            <button type="button" class="btn btn-warning" style=" height: 53px;border-radius: 10px;
                                        background-color: #e40000!important;
                                        border-color: #e40000!important;">
                                <a href="https://instagram.com/viafloragarden?igshid=13fa1kowu1jc4"
                                    style="text-decoration: initial; color: white;font-size: 18px;">
                                    Saiba Mais
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Modal 6-->
<div class="portfolio-modal modal fade" id="portfolioModal6" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="close-modal" data-dismiss="modal"><i class="far fa-times-circle"
                    style="font-size: xxx-large;"></i>
            </div>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="modal-body">
                            <!-- Project Details Go Here-->
                            <h2 class="text-uppercase">Espironema</h2>
                            <p class="item-intro text-muted">Callisia Warszewicziana</p>
                            <img class="img-fluid d-block mx-auto" src="${photoSix}" alt="" />
                            <p>A espironema é uma planta herbácea, perenifólia, suculenta, de folhagem e florescimento
                                ornamentais. Seu caule é curto e emite ramificações que podem originar novas plantas.
                                Apresenta folhas dispostas em roseta, de aspecto triangular, textura suculenta e cerosa,
                                de cor verde clara e com margens destacadas, bem claras. As folhas mais velhas adquirem
                                tons avermelhados. Floresce o ano todo, despontando longas hastes florais, com cerca de
                                60 cm de altura, carregadas de florzinhas roxas. As flores são atrativas para
                                beija-flores.</p>
                            <button type="button" class="btn btn-warning" style=" height: 53px;border-radius: 10px;
                                        background-color: #e40000!important;
                                        border-color: #e40000!important;">
                                <a href="https://instagram.com/viafloragarden?igshid=13fa1kowu1jc4"
                                    style="text-decoration: initial; color: white;font-size: 18px;">
                                    Saiba Mais
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="portfolio-modal modal fade" id="portfolioModal7" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="close-modal" data-dismiss="modal"><i class="far fa-times-circle"
                    style="font-size: xxx-large;"></i>
            </div>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="modal-body">
                            <!-- Project Details Go Here-->
                            <h2 class="text-uppercase">Violeta</h2>
                            <p class="item-intro text-muted">Violeta-africana</p>
                            <img class="img-fluid d-block mx-auto" src="${photoFour}" alt="" />
                            <p>Apenas 20 espécies fazem parte desse gênero, descoberto no final do século XIX pelo barão
                                Von Saint Paul, governador do distrito de Usambara, que descobriu as pequeninas flores
                                em um passeio com a mulher pelas florestas úmidas da Tanzânia. Em termos históricos,
                                portanto, trata-se de uma descoberta relativamente recente - o que não impediu a violeta
                                de rapidamente se popularizar pelo mundo. Durante toda a primeira metade do século XX, a
                                violeta reinou absoluta na Europa como flor tropical queridinha dos endinheirados. Foi
                                tão consagrada que produtores passaram a se especializar em cruzamentos, inundando o
                                mercado com cores e texturas novas a cada ano - hoje, há mais de mil variedades, tanto
                                de pétalas simples quanto dobradas, em versões normais ou miniatura, com folhas redondas
                                ou em forma de coração, mais ou menos peludas, com uma ou várias cores</p>
                            <button type="button" class="btn btn-warning" style=" height: 53px;border-radius: 10px;
                                        background-color: #e40000!important;
                                        border-color: #e40000!important;">
                                <a href="https://instagram.com/viafloragarden?igshid=13fa1kowu1jc4"
                                    style="text-decoration: initial; color: white;font-size: 18px;">
                                    Saiba Mais
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="portfolio-modal modal fade" id="portfolioModal8" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="close-modal" data-dismiss="modal"><i class="far fa-times-circle"
                    style="font-size: xxx-large;"></i>
            </div>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="modal-body">
                            <!-- Project Details Go Here-->
                            <h2 class="text-uppercase">Dipladenia</h2>
                            <p class="item-intro text-muted">Mandevilla Sanderi</p>
                            <img class="img-fluid d-block mx-auto" src="${photoEigth}" alt="" />
                            <p>Mandevilla sanderi, o jasmim brasileiro, é uma videira pertencente ao gênero Mandevilla.
                                Cultivada como planta ornamental, a espécie é endêmica do estado do Rio de Janeiro no
                                Brasil. É uma planta perene de crescimento rápido, rastejante e de poda de 60 cm por
                                ano.</p>
                            <button type="button" class="btn btn-warning" style=" height: 53px;border-radius: 10px;
                                        background-color: #e40000!important;
                                        border-color: #e40000!important;">
                                <a href="https://instagram.com/viafloragarden?igshid=13fa1kowu1jc4"
                                    style="text-decoration: initial; color: white;font-size: 18px;">
                                    Saiba Mais
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="portfolio-modal modal fade" id="portfolioModal9" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="close-modal" data-dismiss="modal"><i class="far fa-times-circle"
                    style="font-size: xxx-large;"></i>
            </div>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="modal-body">
                            <!-- Project Details Go Here-->
                            <h2 class="text-uppercase">Antúrio Verde Vermelho</h2>
                            <p class="item-intro text-muted">Anthurium Andraeanum</p>
                            <img class="img-fluid d-block mx-auto" src="${photoEigth}" alt="" />
                            <p>Planta herbácea de altura em torno de 1,0 m, não ramificada, com caule tortuoso e curto
                                de onde partem raízes fortes e carnosas mesmo fora do solo.
                                As folhas são grandes, cerca de 0,40 m, em forma de coração, cor verde-clara,
                                brilhantes, inseridas no caule em espiral com longo pecíolo.
                                As flores são em forma de espádice, isto é, com uma coluna carnosa ereta ou retorcida de
                                flores masculinas e femininas separadas por uma faixa de flores estéreis, que é
                                protegida por uma bráctea aberta colorida..</p>
                            <button type="button" class="btn btn-warning" style=" height: 53px;border-radius: 10px;
                                        background-color: #e40000!important;
                                        border-color: #e40000!important;">
                                <a href="https://instagram.com/viafloragarden?igshid=13fa1kowu1jc4"
                                    style="text-decoration: initial; color: white;font-size: 18px;">
                                    Saiba Mais
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    `
render(modal(), document.getElementById('modal'))