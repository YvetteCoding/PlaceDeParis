import Nav from "../../components/Nav"
import Link from "next/link"
import Footer from '../../components/Footer'

export default function () {

    return (
        <>

            <Nav />
            <div>
                <Link href="/">
                    <a>
                        <img className="img-fluid mx-auto d-block pb-5" alt="Responsive image"
                            src="Logo_placeDeParis.png"

                        />
                    </a>
                </Link>
            </div>
            <div className="text-center">
                MAKE APPOINTMENT
            </div>
            <Footer/>
        </>
    )
}