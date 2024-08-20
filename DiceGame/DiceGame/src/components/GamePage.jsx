import React,{useState} from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import RoleDIce from './RoleDIce'

const GamePage = () => {
    const [current, setCurrent] = useState(1);
    const [selectedNumber, setSelectedNumber] = useState();
    const [score ,setScore]=useState(0);
    const [isRolling, setIsRolling] = useState(false);
    const [error, setError] = useState("");

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    if(!selectedNumber) {
        setError("please select a number");
        return;
    }else{
        setError('');
    }
    const randNum = generateRandomNumber(1, 7);
    setIsRolling(true);
    setTimeout(() => {
      setCurrent(randNum);
      setIsRolling(false);
    }, 600); // Duration of the animation
    setTimeout(() => {
        if(randNum === selectedNumber){
            setScore(perv=>perv+1);
        }else{
            setScore(perv=>perv-1);
        }
      }, 600); // Duration of the animation
      setSelectedNumber(undefined)
  };

  return (
    <main className=' max-w-[1280px] mx-auto '>
        <div className='sm:flex items-center justify-between relative top-[64px]'>
        {/* // left side div */}
            <TotalScore score={score}  />
            {/* // right side div */}
            <NumberSelector selectedNumber={selectedNumber}
            setSelectedNumber={setSelectedNumber}  error={error} />
        </div>

        <RoleDIce  isRolling={isRolling} current={current} rollDice={rollDice}
        setScore={setScore}
        />
    </main>
  )
}

export default GamePage
