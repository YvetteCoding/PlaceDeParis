export default function (props) {

    return (

        <>
            <a>{props.buttonConntent}</a>

            <style jsx>{`
            a {
                padding: 14px 22px;
                background-color: ${props.backgroundColor};
                border: solid 0.5px #ecede8;
                color: ${props.color};
                border-radius: 28px;
                font-size: 18px;
                font-weight: 100;           
                transition: all 0.2s ease-in-out;
                cursor: pointer;
                display: inline-block;
                text-decoration: none;
              }
              a:hover {
                // filter: brightness(80%);
                transform: translateY(4px);
               
               
              }
            
            `}
            </style>



        </>
    )
}