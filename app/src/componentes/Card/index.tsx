import './styles.scss';
import Capa from './assets/capa.png';
import Chat from './assets/chat.svg';
import Code from './assets/code.svg';
import Share from './assets/share.svg';
import User from './assets/user.png';

export default function Card() {
    return (
        <article className="card">
            <div className='card__image'>
                <img src={Capa} alt="Imagem do post" />
            </div>
            <div className="card__conteudo">
                <div className="conteudo__texto">
                    <h3>Titulo</h3>
                    <p>resumo</p>
                </div>

                <div className="conteudo__rodape">
                    <ul>
                        <li>
                            <img src={Code} alt="codigos" />
                            100
                        </li>
                        <li>
                            <img src={Share} alt="Compartilhamentos" />
                            12
                        </li>
                        <li>
                            <img src={Chat} alt="Comentarios" />
                            10
                        </li>
                    </ul>
                    
                    <div className="rodape__usuario">
                        <img src={User} alt="imagem do usuraio" />
                        @bruno
                    </div>
                </div>
            </div>

        </article>
    )
}