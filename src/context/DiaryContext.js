import { createContext, useEffect, useState } from 'react';

const DiaryContext = createContext(null)

export const DiaryProvider = ({children}) => {
  const [diary, setDiary] = useState(JSON.parse(localStorage.getItem('user-diary')));

  useEffect(()=>{

    if(diary) {
      localStorage.setItem('user-diary',JSON.stringify(diary));
    } else {
      localStorage.removeItem('user-diary');
    }
  },[diary]);

  return (
    <DiaryContext.Provider value={{diary , setDiary}}>
      {children}
    </DiaryContext.Provider>
  );
}

export default DiaryContext;