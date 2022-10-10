import Nav from "../../components/Nav"
import Link from "next/link"
import Footer from '../../components/Footer'
import ServiceCard from "../../components/ServiceCard"



export default function () {

  const ourServices = [{
    image: "https://cdn2.iconfinder.com/data/icons/barber-services-in-glyph-style/32/woman-haircut-1024.png",
    slogan: "STEP IN. SIT. RELAX",
    description: "bla bla bla",
    title: "gorgeous",
  },
  {
    image: "https://cdn2.iconfinder.com/data/icons/barber-services-in-glyph-style/32/man-haircut-1024.png",
    slogan: "KEEP IT FRESH",
    description: "olala",
    title: "stunning",
  },
  {
    image: "https://cdn2.iconfinder.com/data/icons/barber-services-in-glyph-style/32/boy-teenager-haircut-1024.png",
    slogan: "B.COOL B.WILD",
    description: "tru lulu",
    title: "pretty",
  },
  ]



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




      <section>
        <div className="container pt-5 text-center">
          <div className="row justify-content-center g-5 pt-5">

            {ourServices.map(function (card) {
              return (
                <ServiceCard
                  image={card.image}
                  description={card.description}
                  title={card.title}
                  slogan={card.slogan}
                />
              );
            })}
          </div>
        </div>
      </section>
      <Footer />

    </>
  )
}