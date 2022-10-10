import MyButton from "./MyButton";




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
            h1{
                font-size: 36px;
                font-weight: 100;
              
            }
            h3{
                font-size: 24px;
                font-weight: 100;
            
            }
            
            p{
                font-weight: 100; 
            }
            img{
                margin-top: -70px;
                align-self: center;
            }
            
          .card{
                border-radius:0px;
                box-shadow: 5px 5px 15px #485449;
                transition: all 0.3s ease-in;
                -webkit-transition: all 0.3s ease-in;
                -moz-transition: all 0.3s ease-in;
                background-color: #c0c8bd;
                
            }
            
        .card:hover{
                background-color: #e3e5d8;
                color: #485449;
                border-radius: 5px;
                border: none;
                box-shadow: 5px 5px 15px #485449;
            }
        
            `}
        </style>
    </>
    )
}