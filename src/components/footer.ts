import { html, render } from 'lit-html';

const footer = () =>
    html` 
    <div class="row align-items-center">
                    <div class="col-lg-4 text-lg-left">Copyright ©Via Flora Garden  2020</div>
                    <div class="col-lg-4 my-3 my-lg-0">
                        <a class="btn btn-dark btn-social mx-2" href="https://wa.me/message/BF43YIQ3BX4LB1"><i class="fab fa-whatsapp" style="font-size: 25px;"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="https://instagram.com/viafloragarden?igshid=13fa1kowu1jc4"><i class="fab fa-facebook-f" style="font-size: 20px;"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="https://instagram.com/viafloragarden?igshid=13fa1kowu1jc4"><i  class="fab fa-instagram" style="font-size: 20px;"></i></a>
                    </div>
                    <div class="col-lg-4 text-lg-right">
                        <a class="mr-3">Tel: (21) 91212-1212</a>
                        
                    </div>
                </div>
    `
    render(footer(), document.getElementById('footer'))