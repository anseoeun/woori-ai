import { atom, useRecoilValue, useSetRecoilState, useRecoilState } from 'recoil';

const globalState = atom({
  key: 'globalState', 
  default: {
    header:{
      type: 'none',
      title: '',
      back: false,
      menu: false,
      delete: false
    },
    footer:{
      fixed: false
    },
    reple:{
      fixed: false
    },
    gnb:{
      open:false
    },
    menubar:{
      fixed: false
    }
  },
});

export { 
  useRecoilValue, 
  useSetRecoilState, 
  useRecoilState, 
  globalState
}