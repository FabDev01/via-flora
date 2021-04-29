import { html, render } from 'lit-html';
import photoOne from '../assets/img/about/1.jpg';
import photoTwo from '../assets/img/about/2.jpg'
import photoThree from '../assets/img/about/logo1.jpg'


const about = () =>
    html` 
<div class="container">
<div class="text-center">
    <h2 class="section-heading text-uppercase">Sobre<i class="fas fa-leaf" style="color: green;margin-left: 6px;"></i>
    </h2>
    <h3 class="section-subheading text-muted">Um pouco sobre a nossa história!.</h3>
</div>
<ul class="timeline">
    <li>
        <div class="timeline-image" style=" color: #e40000;"><img class="rounded-circle img-fluid" src="${photoOne}" alt=""/></div>
        <div class="timeline-panel">
            <div class="timeline-heading">
                <h4>2009</h4>
                <h4 class="subheading">inicio</h4>
            </div>
            <div class="timeline-body">
                <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Sunt ut voluptatum eius
                    sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea
                    quo dolore laudantium consectetur!</p>
            </div>
        </div>
    </li>
    <li class="timeline-inverted">
        <div class="timeline-image"><img class="rounded-circle img-fluid" src="${photoTwo}" alt="" /></div>
        <div class="timeline-panel">
            <div class="timeline-heading">
                <h4>2011</h4>
                <h4 class="subheading">meio</h4>
            </div>
            <div class="timeline-body">
                <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius
                    sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea
                    quo dolore laudantium consectetur!</p>
            </div>
        </div>
    </li>
    <li>
        <div class="timeline-image"><img class="rounded-circle img-fluid" src="${photoThree}" alt="" /></div>
        <div class="timeline-panel">
            <div class="timeline-heading">
                <h4>2020</h4>
                <h4 class="subheading">Hoje</h4>
            </div>
            <div class="timeline-body">
                <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius
                    sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea
                    quo dolore laudantium consectetur!</p>
            </div>
        </div>
    </li>
    <li class="timeline-inverted">
        <div class="timeline-image" 
        style="display: flex;
        justify-content: center;
        align-items: center;">

            <h4 style=" margin-bottom: 4px; margin: 8px; " class="responsive">
                você faz parte
                <br />
                da nossa
                <br />
                história!!
</h4>
        </div>
    </li>
</ul>
</div>
`
render(about(), document.getElementById('about'))