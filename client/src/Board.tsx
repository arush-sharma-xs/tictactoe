import React, { useEffect, useState } from 'react'


function Board() {
    const [myMark, setMyMark] = useState("O");

    useEffect(() => {
        let gridBox = document.querySelectorAll(".gridBox");
        gridBox.forEach(item => {
            item.addEventListener("click", mark);
        })
    }, [])

    const mark = (e: any) => {
        if (e.target.innerHTML === "")
            e.target.innerHTML = myMark;
    }

    return (
        <div className='flex flex-col w-[304px] h-[304px] '>
            <div className='w-[300px] flex '>
                <div id="A" className='gridBox flex items-center justify-center border-b-8 border-b-black border-r-8 border-r-black text-6xl font-semibold w-[100px] h-[100px] hover:bg-red-50 hover:cursor-pointer'></div>
                <div id="B" className='gridBox flex items-center justify-center border-b-8 border-b-black border-r-8 border-r-black text-6xl font-semibold w-[100px] h-[100px] hover:bg-red-50 hover:cursor-pointer'></div>
                <div id="C" className='gridBox flex items-center justify-center border-b-8 border-b-black border-b-8 border-b-black text-6xl font-semibold w-[100px] h-[100px] hover:bg-red-50 hover:cursor-pointer'></div>
            </div>
            <div className='w-[300px] flex '>
                <div id="H" className='gridBox flex items-center justify-center border-b-8 border-b-black border-r-8 border-r-black text-6xl font-semibold w-[100px] h-[100px] hover:bg-red-50 hover:cursor-pointer'></div>
                <div id="I" className='gridBox flex items-center justify-center border-b-8 border-b-black border-r-8 border-r-black text-6xl font-semibold w-[100px] h-[100px] hover:bg-red-50 hover:cursor-pointer'></div>
                <div id="D" className='gridBox flex items-center justify-center  border-b-8 border-b-black text-6xl font-semibold w-[100px] h-[100px] hover:bg-red-50 hover:cursor-pointer'></div>
            </div>
            <div className='w-[300px] flex '>
                <div id="G" className='gridBox flex items-center justify-center border-r-8 border-r-black text-6xl font-semibold w-[100px] h-[100px] hover:bg-red-50 hover:cursor-pointer'></div>
                <div id="F" className='gridBox flex items-center justify-center border-r-8 border-r-black text-6xl font-semibold w-[100px] h-[100px] hover:bg-red-50 hover:cursor-pointer'></div>
                <div id="E" className='gridBox flex items-center justify-center text-6xl font-semibold w-[100px] h-[100px] hover:bg-red-50 hover:cursor-pointer'></div>
            </div>

        </div>
    )
}

export default Board