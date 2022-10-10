import Button from "./Button";




export default function (props) {

    return (<>
          <div className="col-lg-3 col-md-6 g-5">
        <div className="card h-100">
            <div className="card-body d-flex flex-column ">
                <img src={props.image} alt="" className="img-fluid w-50 mb-3" />
                <h3 className="pb-3">{props.title}</h3>
                <h5>{props.slogan}</h5>
                <p>{props.description}</p>
                <div className="d-flex flex-row justify-content-center mt-auto">
                    <div className="p-4">
                        <Button
                            buttonConntent="discover"
                                backgroundColor="transparent"
                                color="#485449"
                        />
                    </div>

                </div>

            </div>
        </div>
</div>



    </>)
}