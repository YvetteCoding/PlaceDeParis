import Typewriter from "typewriter-effect"
import Button from "./Button";

export default function () {
  return (

    <>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
       
          <h1 class="display-4"><Typewriter
            onInit={(typewriter) => {
              typewriter.typeString('Welcom to world of Beauty!')
                .callFunction(() => {
                  console.log('String typed out!');
                })
                .pauseFor(2000)
                .deleteChars(16)
                .callFunction(() => {
                  console.log('string were deleted');
                })
              typewriter.typeString('PLACE DE PARIS')
                .callFunction(() => {
                  console.log('String typed out!');
                })
                .start();

            }}
          /></h1>
          <p class="lead">Hair Expirience Like No Other!</p>
         <Button
            buttonConntent="BOOK NOW"
            backgroundColor="transparent"
            color="#ecede8"
          />
        </div>

      </div>


    </>

  )
}