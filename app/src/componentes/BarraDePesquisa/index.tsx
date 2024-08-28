import { useState } from 'react';
import './styles.scss';

export default function BarraDePesquisa() {
    const [termoPesquisa, setTermoPesquisa] = useState('');

    return (
        <input 
            value={termoPesquisa} 
            onChange={(e) => setTermoPesquisa(e.target.value)}
            className='barra-pesquisa' type="search" placeholder='Digite o que você procura' />
    )
}