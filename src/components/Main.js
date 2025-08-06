import {React,useEffect,useId,useState} from 'react'

export default function Main() {
    const [turn,setTurn] = useState('X')
    
    //using useId to get unique id's for all the boxes
    const id1 = useId()
    const id2 = useId()
    const id3 = useId()
    const id4 = useId()
    const id5 = useId()
    const id6 = useId()
    const id7 = useId()
    const id8 = useId()
    const id9 = useId()

    
    
    const gameReset = () => {
      let ulFirstChild = document.getElementById('ul1')
      for(let i=0;i<9;i++){
        ulFirstChild.firstElementChild.innerText = ''
        ulFirstChild = ulFirstChild.nextElementSibling
      }
      document.getElementById('gameDetails').innerHTML = '<strong>New Game</strong>'
    }

    function playSound(){
      let audio = new Audio('./sound.wav');
      audio.loop = false
      audio.play()

    }

    const checkTie = () => {
      let ulFirstChild = document.getElementById('ul1')
      for(let i=0;i<9;i++){
        if(ulFirstChild.firstElementChild.innerText != ''){
          return
        }
        ulFirstChild = ulFirstChild.nextElementSibling
      }
      gameReset()
    }
    
    const arr = [
      [id1,id2,id3],
      [id4,id5,id6],
      [id7,id8,id9],
      [id1,id4,id7],
      [id2,id5,id8],
      [id3,id6,id9],
      [id1,id5,id9],
      [id3,id5,id7]
    ]
    
    useEffect(()=>{
      arr.forEach((ele) => {
        if(document.getElementById(ele[0]).innerText == 'X' && document.getElementById(ele[1]).innerText == 'X' && document.getElementById(ele[2]).innerText == 'X' || document.getElementById(ele[0]).innerText == 'O' && document.getElementById(ele[1]).innerText == 'O' && document.getElementById(ele[2]).innerText == 'O')
        {
          document.getElementById('gif1').src='https://media1.tenor.com/images/a0bba183e5d46487230757c6b81f68f7/tenor.gif?itemid=7374480'
          setTimeout(()=>{
            document.getElementById('gif1').src = ''
          },3000)
          gameReset()
      }})
    },[turn])

    const handleClick = (e) => {
      playSound()
       let parentItem = e.target
       if(parentItem.tagName === 'LI'){
          let itemChildId = parentItem.firstElementChild.id
          document.getElementById(itemChildId ).innerText = turn
       }
       else if(parentItem.tagName === 'SPAN'){
          document.getElementById( parentItem.id).innerText = turn
       }
       checkTie()
       
       turn==='X'?setTurn('O'):setTurn('X')
       
    }
  return (
    <>
    <div className="container">
    <ul className='gridContainer my-5'>
        <li  onClick={handleClick} id='ul1'><span className='gridContent' id={id1} onClick={handleClick}></span></li>
        <li onClick={handleClick} ><span className='gridContent' id={id2} onClick={handleClick}></span></li>
        <li onClick={handleClick}><span className='gridContent' id={id3} onClick={handleClick}></span></li>
        <li onClick={handleClick}><span className='gridContent' id={id4} onClick={handleClick}></span></li>
        <li onClick={handleClick}><span className='gridContent' id={id5} onClick={handleClick}></span></li>
        <li onClick={handleClick}><span className='gridContent' id={id6} onClick={handleClick}></span></li>
        <li onClick={handleClick}><span className='gridContent' id={id7} onClick={handleClick}></span></li>
        <li onClick={handleClick}><span className='gridContent' id={id8} onClick={handleClick}></span></li>
        <li onClick={handleClick}><span className='gridContent' id={id9} onClick={handleClick}></span></li>
        
    </ul>
    <div className="cont">
    <p id='gameDetails' className='my-5'>{turn} : its your turn</p>
    <img src="" alt="" height={200} id='gif1'/>
    </div>
    </div>
    </>
  )
}
