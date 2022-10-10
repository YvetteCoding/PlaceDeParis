import Typewriter from "typewriter-effect"
import Button from "./Button";

export default function () {
  return (

    <>
      <div class="jumbotron jumbotron-fluid ">
        <div class="container ">

          <h1 class="display-4 pb-5"><Typewriter
            onInit={(typewriter) => {
              typewriter.typeString('Welcom to world of Beauty!')
                .callFunction(() => {
                  console.log('String typed out!');
                })
                .pauseFor(1500)
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
          {/* <p class="lead pb-5">Hair Expirience Like No Other!</p> */}
          <Button
            buttonConntent="BOOK NOW"
            backgroundColor="#485449"
            color="#c0c8bd;"
          />
        </div>

      </div>


    </>

  )
}