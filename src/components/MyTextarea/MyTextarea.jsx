import Header from '../Header/Header';

import  './MyTextarea.css';


const MyTextarea = ({value,handleTextArea,handleTextareaClass,textareaClass}) =>{
    return (
        <div className='editorWrap'>
            <Header handle={handleTextareaClass}
                    state={textareaClass}
                    title={'Editor'}
            />
            <textarea className={textareaClass && 'maximum' }       
                      id='editor' 
                      value={value}
                      onChange={handleTextArea}
            />
        </div>
  )
}

export default MyTextarea;
