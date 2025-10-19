import Button from "./components/Button"
import Courses from "./components/Courses"
import Navbar from "./components/Navbar"
import { blackCanvas, coursesGrid, firstGrid, idealGrid } from "./data/data"
import { BsFillLightningChargeFill } from "react-icons/bs"

function App() {

  return (
    <>
      <Navbar />
      <header className="w-full">
        <div className="background w-[calc(100vw-30px)] m-3 rounded-[10px] xl:px-[115px] sm:px-[65px] max-sm:px-[45px]">
          <div className="md:h-[580px] h-[650px]">
            <h1 className="xl:text-6xl md:text-5xl text-4xl text-white md:pt-[130px] pt-[150px] font-semibold">
              <span>Авторские курсы от</span>
              <br />
              <span>специалистов IT & Digital</span>
            </h1>

            <div className="grid grid-cols-6 sm:gap-[20px] max-sm:grid-cols-4 max-sm:gap-[15px] sm:grid-cols-4">
              {firstGrid.map((item) => (
                <div>
                  <h1 className="text-white xl:text-4xl sm:text-3xl max-sm:text-1xl font-semibold md:mt-6 mt-4">{item.number}</h1>
                  <p className="text-gray-300 xl:text-[15px] sm:text-[12px] max-sm:text-[10px]">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 xl:w-[75%] md:w-[600px] sm:w-[400px]">
              <Button
                title="Бесплатная консультация"
                background="bg-yellow-300 "
              />

              <Button
                title="Motion-дизайнер"
                background="bg-white"
                scrolled={true}
              />

              <Button
                title="Дизайнер соцсетей"
                background="bg-white"
              />

              <Button
                title="Frontend-разработчик"
                background="bg-white"
              />

              <Button
                title="iOS/Android-разработчик"
                background="bg-white"
              />

              <Button
                title="React-разработчик"
                background="bg-white"
              />

              <Button
                title="Мобилограф PRO"
                background="bg-white"
              />

              <Button
                title="Интерьер-дизайнер"
                background="bg-white"
              />

              <Button
                title="Графический дизайнер"
                background="bg-white"
              />

              <Button
                title="SMM-специалист"
                background="bg-white"
              />

              <Button
                title="Компьютерная грамотность"
                background="bg-white"
              />


            </div>

          </div>

        </div>


      </header>

      <main>
        <div className="xl:px-[115px] lg:px-[100px] sm:px-[10px] md:m-5 ">
          <div className="md:mt-20 mt-10 text-center">
            <div className="md:text-4xl sm:text-3xl max-sm:text-2xl font-semibold text-blue-950">
              <p>Обновленные авторские курсы с</p>
              <p>использованием <span className="md:text-4xl sm:text-3xl font-bold bg-gradient-to-r from-purple-500 via-purple-300 to-pink-200 bg-clip-text text-transparent animate-gradient">AI</span></p>
            </div>

            <div className="m-auto w-fit mt-5 rounded-full bg-gray-100 ">
              <button className="px-8 rounded-full bg-blue-600 py-2 text-white">Офлайн-курсы</button>
              <button className="px-8">Бесплатная консультация</button>
            </div>
          </div>

          <div className="grid flex-wrap xl:grid-cols-3 sm:grid-cols-2 mt-10 gap-5">
            {coursesGrid.map((item) => (
              <div key={item.title}>
                <Courses
                  type={item.type}
                  title={item.title}
                  time={item.time}
                  link={item.link}
                  color={item.color}
                  btntext={item.btntext}
                  textcolor={item.textcolor}
                  position={item.position}
                />

              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <div className="md:text-4xl sm:text-3xl max-sm:text-2xl font-semibold text-blue-950">
              <p>Идеальные условия для твоего</p>
              <p className="md:leading-[1.3] font-bold bg-gradient-to-r from-purple-500 via-purple-300 to-pink-200 bg-clip-text text-transparent animate-gradient">успешного образования</p>
            </div>
          </div>

          <div className="xl:w-[1250px] grid xl:grid-cols-2 grid-rows-[120px] xl:px-[140px] sm:px-[70px] mt-10 max-sm:mx-10">
            {idealGrid.map((item) => (
              <div className="flex justify-center items-center gap-3" key={item.text}>
                <div className="h-fit"><img className="xl:w-[115px] xl:h-[115px] sm:w-[100px] sm:h-[100px]" src={item.image} /></div>
                <div className="w-[430px]">
                  <h1 className="md:text-3xl sm:text-2xl font-semibold text-gray-900">{item.text}</h1>
                  <p className="md:w-[350px] text-gray-600">{item.desctiption}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

        <div className="w-full mt-20 bg-gray-950 h-fit text-center md:p-20 sm:p-10 md:px-[115px]" >
          <div className="md:text-4xl sm:text-3xl font-semibold text-blue-950">
            <p className="text-white">Теперь мы</p>
            <p className="leading-[1.3] font-bold bg-gradient-to-r from-purple-500 via-purple-300 to-pink-200 bg-clip-text text-transparent animate-gradient">школа нового поколения</p>
          </div>  

          <div className="flex justify-center items-center mt-8">
            <div>
              {blackCanvas.map((item) => (
                <div className="flex justify-center items-center text-start text-white gap-5 border-b-1 border-gray-600 xl:mr-40 mr-10 py-4">
                  <div><img src={item.image}/></div>
                  <div className="md:w-[200px] md:text-[16px]">
                    {item.text}
                  </div>

                </div>
                
              ))}
            </div>

            <div>
              <img src="https://wepro3.uz/public/images/new-1.webp"/>
            </div>
          </div>

          <div className="flex justify-center items-center mt-8">

            <div>
              <img src="https://wepro3.uz/public/images/new-2.webp"/>
            </div>

            <div className="md:w-[600px] text-start md:pl-20 sm:pl-10">
              <h1 className="text-white md:text-4xl sm:text-2xl font-bold mb-8">Попади в топ и забирай крутые призы</h1>
              <img src="https://wepro3.uz/public/images/new-prizes.webp"/>
              <button className="flex items-center justify-center gap-2 bg-white md:px-6 sm:px-4 md:py-3 sm:py-2 mt-5 rounded-[7px] hover:bg-black/50 hover:text-gray-400 transition-all duration-300">
                <BsFillLightningChargeFill
                  className="w-[25px] h-[25px] bg-gradient-to-r from-purple-500 via-purple-300 to-pink-200 rounded-full p-1"
                />
                <p>Оставить заявку</p>
              </button>
            </div>
          </div>


          <div className="flex justify-center items-center mt-8">

            <div className="md:w-[600px] text-start md:pr-20 sm:pr-10">
              <h1 className="text-white md:text-4xl sm:text-2xl font-bold mb-8">Обменивай монеты в центре призов</h1>
              <img src="https://wepro3.uz/public/images/new-3.webp"/>
              
            </div>
              
            <div>
              <img src="https://wepro3.uz/public/images/new-prizes-center.webp"/>
            </div>

          </div>
          
        </div>
      </main>
    </>
  )
}

export default App
