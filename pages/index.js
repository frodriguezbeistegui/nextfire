import Head from 'next/head'

import toast  from 'react-hot-toast'

export default function Home() {
  return (
   <div>
    <button onClick={()=>{ toast.success('hello toas!')}}>Toast Me</button>
   </div>
  )
}
