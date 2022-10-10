import MyButton from "./MyButton";

export default function (props) {
    return (
        <>
            <div className="col-lg-3 col-md-6 g-5">
                <div class="card my-card h-100">
                    <img class="card-img-top w-100" src={props.image} alt="Card image" />
                    <div class="card-body d-flex flex-column ">
                        <h5 class="card-title">{props.title}</h5>
                        <p class="card-text">{props.description}</p>
                        <div className="d-flex flex-row justify-content-center mt-auto">
                            <div className="p-4">
                                <MyButton
                                    buttonConntent="discover"
                                    backgroundColor="transparent"
                                    color="#485449"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>

{`

`}
</style>
        </>
    )
}