import './cont03.css';
import Carousel from './carousel';
import BS from '../assets/BSP.png'

function Cont03() {
    const images = [

        "https://agcdn-1d97e.kxcdn.com/wp-content/uploads/2022/05/alphagamma-Cool-IT-tech-events-happening-in-Europe-in-2022-opportunities-1-1021x580.jpeg",
        "https://img.etimg.com/thumb/width-640,height-480,imgsize-8348,resizemode-75,msid-104831464/news/international/us/apples-scary-fast-event-tech-giant-likely-to-release-new-macbook-pro-models.jpg",

        "https://images.unsplash.com/photo-1502137914655-3ab2fb4dc4cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2Fybml2YWx8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1700539690091-fb8d1678f101?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FyYmF8ZW58MHx8MHx8fDA%3D", "https://images.unsplash.com/photo-1595560515563-59ced0491b40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmlzYXJqYW58ZW58MHx8MHx8fDA%3D",

        "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D",
        // Add more image paths as needed
    ];



    return (
        <section className="cont03" id="events">

            <div className="title">
                <p>Events</p>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height={48} width={48} stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z" />
                </svg>


            </div>
            <div className="Navi">
                {/* <img className="bgimg-1" draggable="false" src={iconR}  alt="bgimg" />
        <img className="bgimg-2" draggable="false" src={iconR}  alt="bgimg" /> */}
            </div>
            <Carousel images={images} />
            {/* <div className='bg-bs-img'> */}
            <img className='bg-bs-img' src={BS} />
            {/* </div> */}

        </section>
    )
}

export default Cont03