import errorImage from '../error-image.png';
import { useState } from 'react';
export function ListItem(props){
    const [ imgSrc, setSrc ] = useState(props.urlToImage);
    const [ errorFixed, setErrorFixed ] = useState(false);
    return(
        <div className='card' style={{width: '18rem',cursor:'pointer'}} onClick={()=>window.open(props.url)}>
            <img className="card-img-top" src={imgSrc} onError={()=>{ if(!errorFixed){ setSrc(errorImage);setErrorFixed(true); } else{setSrc(errorImage); setErrorFixed(false); } }}  />
            <div className="card-body">
                <h5 className="card-title" title={props.title}>{props.title.length > 75 ? props.title.substr(0,75) + '...' : props.title }</h5>
                <p className="card-text">{props.content ? props.content : props.description}</p>
            </div>
        </div>
    );
}



