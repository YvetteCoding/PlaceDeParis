import NavBarHolder from "../../components/NavBarHolder"
import Link from "next/link"
import Footer from '../../components/Footer'

export default function () {
    
    return (
        <>
            
            <NavBarHolder />
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
        PHOTOS our work
            </div>
            <Footer/>
        </>
    )
}