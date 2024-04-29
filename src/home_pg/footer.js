import './footer.css';


function Footer() {
    return (
        <section class="footer" id="footer">

            <div class="box-container">

                <div class="box">
                    <h3>quick links</h3>
                    <a href="#slide"> <i class="fas fa-chevron-right"></i> home </a>
                    <a href="#ufarmid"> <i class="fas fa-chevron-right"></i> about ufid</a>
                    <a href="#govt_schemes"> <i class="fas fa-chevron-right"></i> schemes </a>
                    <a href="userlogin.html"> <i class="fas fa-chevron-right"></i> user login</a>
                    <a href="adminH.html"> <i class="fas fa-chevron-right"></i> admin login</a>


                    <a href="#about"> <i class="fas fa-chevron-right"></i> about </a>

                </div>

                <div class="box">
                    <h3>govt sites</h3>
                    <a href="#footer"> <i class="fas fa-chevron-right"></i> GiftCity </a>
                    <a href="#footer"> <i class="fas fa-chevron-right"></i> mKisan</a>

                    <a href="#footer"> <i class="fas fa-chevron-right"></i> Jaivik kheti </a>
                    <a href="#footer"> <i class="fas fa-chevron-right"></i> ATMA </a>
                </div>

                <div class="box">
                    <h3>contact govt</h3>
                    <a href="#footer"> <i class="fas fa-envelope"></i> &nbsp;farmer.gov@gmail.com </a>
                    <a href="#footer"> <i class="fas fa-phone-alt"></i> &nbsp;1800 1036 110</a>
                    <a href="#footer"> <i class="fas fa-phone-alt"></i> &nbsp;079-23250802</a>

                    <a href="#footer"> <i class="fas fa-map-marker-alt"></i> Amreli, Gujarat, india</a>
                </div>


                <div class="box">
                    <h3>follow us</h3>
                    <a href="#footer"> <i class="fab fa-facebook-f"></i> Facebook </a>
                    <a href="https://twitter.com/agrigoi"> <i class="fab fa-twitter"></i> Twitter </a>
                    <a href="https://www.instagram.com/agrigoi/?hl=en"> <i class="fab fa-instagram"></i> Instagram </a>
                    <a href="#footer"> <i class="fab fa-linkedin"></i> Linkedin </a>

                </div>

            </div>

            <div class="credit"> created by <span>Dr!py</span> | all rights reserved </div>

        </section>
    )
}
export default Footer
