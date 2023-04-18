import Header from '../Header/Header';

import './Preview.css';


const Preview = ({text,previewClass,handlePreviewClass}) =>{

    return(
        <div className='previewWrap'>
            <Header handle={handlePreviewClass}
                    state={previewClass}
                    title={'Previewer'}
            />
            <div className={previewClass && 'maximum'}
                 id='preview' 
                 dangerouslySetInnerHTML={{__html: text}}
            />
        </div>
  )
}

export default Preview;
