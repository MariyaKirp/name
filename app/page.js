import Image from 'next/image'

export default function Home() {
  return (
    <div className= 'bg-black h-screen flex flex-col items-stretch'>
        <div className='bg-red-300 h-10 w-200 my-5 basis-1/2 flex flex-row'>
          <div className= 'md:bg-cyan-950 bg-yellow-200 my-2 basis-1/2 '></div>
          <div className= ' bg-yellow-400 md:bg-cyan-400 basis-1/2 mx-2 my-2'></div>
        </div>
        <div className= 'bg-orange-900 w-200 h-10 my-5 basis-1/4'></div>
        <div className= 'bg-red-900 w-200 h-10 my-5 basis-1/4'></div>
    </div>
  )
}
 