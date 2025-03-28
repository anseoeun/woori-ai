import { Button, Popup } from '@/entities'
import{ useState  } from 'react';


const _ = ({data, value, open, close, onChange}:any) => {

  const [selected, setSelected] = useState(value);
  const selectClass = (idx:any) =>{
    setSelected(idx);
    onChange(data[idx]);
  }

	return (
		<Popup open={open} close={close}>
        <div className='pop-header'>
        <b className='title align-l'>반을 선택해 주세요</b>
        </div>
        <div className='pop-body'>
          <div className='select-list'>
            <ul>
              {data.map((d:any, idx:any) => {
                return (
                  <li key={`selectClass`+idx}>
                    <button onClick={(e)=>{selectClass(idx)}} className={`link ${selected === idx ? 'on' : ''}`}>
                      <span className='class'><b>{d.name}</b><span className='person'>({d.total}명)</span></span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <div className='pop-footer'>
          <div className='btn-wrap'>
            <Button className='btn-type1 st1' onClick={close}><span>확인</span></Button>
          </div>
        </div>
    </Popup>
	)
}

export default _
