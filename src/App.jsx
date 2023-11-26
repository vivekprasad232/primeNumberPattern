import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'

function App() {

  const [isChanged, setIsChanged] = useState(13);
  const [primeArr, setPrimeArr] = useState(false);  
  useEffect(() => {
    const prime = [...(new Array(isChanged*isChanged))].fill(true);
    prime[0] = false;
    prime[1] = false;
    for (let p = 2; p * p <= isChanged * isChanged; p++) {
      // If prime[p] is not changed, then it is a 
      // prime 
      if (prime[p] == true) {
        // Update all multiples of p 
        for (let i = p * p; i <= isChanged * isChanged; i += p)
          prime[i] = false;
      }
    }
    let k = 1;
    const arr1 = []
    while (k*k < isChanged*isChanged) {
      const arr2 = [];
      arr2.push({ bgColor: "blue", num: k * k });
      let j = k*k+1,l=1;
      k++;
      while (l++ < isChanged) {
        arr2.push({ bgColor: prime[j] ? 'green' : "red", num: j });
        j++;
      }
      arr1.push(arr2);
    }
    setPrimeArr(arr1);
  }, [isChanged]);

  return (
    <div>
      <input type='number' value={isChanged} onChange={(e)=>setIsChanged(e.target.value)}/>
    <div style={{display:"grid",gridTemplateColumns:`repeat(${isChanged},40px)`,gridTemplateRows:`repeat(${isChanged},40px)`}}>
      {Array.isArray(primeArr) && primeArr.map((el, index) => {
        return (
          el.map((el,index2) => (
            <div key={`${index}gggnl${index2}`} style={{ height: "40px", width: "40px", backgroundColor: el.bgColor, border: "1px solid white" }}>{el.num}</div>
          ))
        )
      }
      )}
    </div>
    </div>
  )
}

export default App
