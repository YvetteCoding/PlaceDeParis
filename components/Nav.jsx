

export default function Nav() {
    return (

        <nav class="navbar navbar-expand-lg p-3">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul class="navbar-nav ">

                        <li class="nav-item">
                            <a class="nav-link" href="/story">OUR STORY</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/showcase">SHOWCASE</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/pricelist">PRICELIST</a>
                        </li>


                        <li class="nav-item">
                            <a class="nav-link" href="/book">BOOK APPOINTMENT</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>


    )
}