export default function Footer() {

    return (


        // <!-- Remove the container if you want to extend the Footer to full width. -->
        <div className="container-fluid pt-5 px-0 mt-auto">

            <footer className=" text-center text-lg-start ms-auto">

                <div className="container py-4">

                    <div className="row mt-4">

                        <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                            <h5 className="text-uppercase mb-4">About company</h5>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam possimus quia fugit minima.
                            </p>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam possimus quia fugit minima.
                            </p>


                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase mb-4 pb-1">Contacts</h5>

                            {/* <!--Contacts-> */}

                            <ul className="fa-ul">
                                <li className="mb-3">
                                    <span className="fa-li"><i class="fas fa-home"></i></span><span className="ms-2">Place de Paris, Luxembourg</span>
                                </li>
                                <li class="mb-3">
                                    <span class="fa-li"><i className="fas fa-envelope"></i></span><span className="ms-2">info@example.com</span>
                                </li>
                                <li className="mb-3">
                                    <span className="fa-li"><i className="fas fa-phone"></i></span><span class="ms-2">+ 352 000 000 00</span>
                                </li>
                                <li className="mb-3">
                                    <span className="fa-li"><i className="fas fa-print"></i></span><span className="ms-2">+ 352 000 000 00</span>
                                </li>
                            </ul>
                        </div>


                        {/* <!--Opening hours--> */}
                        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase mb-4">Opening hours</h5>

                            <table className="table text-center text-white">
                                <tbody>
                                    <tr>
                                        <td>Mon - Fri:</td>
                                        <td>9am - 6pm</td>
                                    </tr>
                                    <tr>
                                        <td>Saturday:</td>
                                        <td>9am - 4am</td>
                                    </tr>
                                    <tr>
                                        <td>Sunday:</td>
                                        <td>holiday</td>
                                    </tr>
                                </tbody>
                            </table>
                            {/* <!-- social media --> */}
                            <div className="mt-4 text-center">
                                <a type="button" className="btn btn-floating  btn-lg"><i className="fab fa-facebook-f"></i></a>
                                <a type="button" className="btn btn-floating  btn-lg"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>

                    </div>


                    {/* <!-- Copyright --> */}
                    <div className="text-start copyright pt-3">
                        © 2022 Copyright:
                        <a className="text-decoration" href="https://placedeparis.lu/"> placedeparis.lu</a>
                    </div>
                </div>




            </footer>

        </div>

    )
}