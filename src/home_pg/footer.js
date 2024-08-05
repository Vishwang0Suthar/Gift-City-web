import './footer.css';


function Footer() {
    return (
        <section class="footer" id="footer">



            <div className='footer-top'>
                <h3><span>Connect</span> with us to know more. </h3>
                <div className='address'>
                    <div className='inset'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" height={50} class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>

                        <p>Reg. Office: EPS - Building no. 49A, Block 49, Zone 04, Gyan Marg, GIFT City, Gandhinagar-382355.</p></div>
                    <div className='inset'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" height={32} class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                        <p>query@giftgujarat.in</p></div>
                </div>
            </div>
            <div className='footer-bottom'>
                <ul>
                    <li><h5><a href='#'>Home</a></h5></li>
                    <li><h5>About</h5></li>
                    <li><h5>Contact</h5></li>
                    <li><h5>FAQ</h5></li>
                </ul>
                <div class="credit">© created by <span><a href='https://github.com/Vishwang0Suthar'><p>Dr!py</p></a></span> | all rights reserved </div>

            </div>



        </section>
    )
}
export default Footer
