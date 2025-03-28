import { Popup, Img } from '@/entities'
import { useState, useRef, useEffect } from 'react';

const _ = ({data, open, close, trigger}:any) => {

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [text, setText] = useState('');

  useEffect(() => {
    setTimeout(()=>{
      if(trigger && textareaRef.current) textareaRef.current.focus();
    }, 200)
  }, [trigger]);

  const onChange = (e:any) => {
    setText(e.currentTarget.value);
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = '0px';
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + 'px';
    }
  };

	return (
		<Popup open={open} close={close} className='type-reple'>
        <div className='pop-body'>
        <div className='input-reple'>
            <div className='user'>
              <div className='thumb'><Img src={'/images/temp/temp-profile.png'} alt='' /></div>
              <span className='name'>홍길동</span>
            </div>
            <div className='input-area'>
              <span className='to'>@소율맘</span>
              <div className='reple-input'>
                <div className='textarea'><textarea
                  ref={textareaRef}
                  value={text}
                  onChange={onChange}
                  placeholder='내용을 입력하세요.'
                /></div>
                <button className='btn-complete' onClick={close}>완료</button>
              </div>
            </div>
          </div>
        </div>
    </Popup>
	)
}

export default _
