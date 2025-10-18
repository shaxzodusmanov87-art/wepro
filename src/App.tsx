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
        <div className="background w-[calc(100vw-30px)] m-3 rounded-[10px] px-[115px]">
          <div className="h-[580px]">
            <h1 className="text-6xl text-white pt-[130px] font-semibold">
              <span>Авторские курсы от</span>
              <br />
              <span>специалистов IT & Digital</span>
            </h1>

            <div className="gridline">
              {firstGrid.map((item) => (
                <div>
                  <h1 className="text-white text-4xl font-semibold mt-6">{item.number}</h1>
                  <p className="text-gray-300 text-[15px]">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 w-[800px]">
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
        <div className="px-[115px] m-5">
          <div className="mt-20 text-center">
            <div className="text-4xl font-semibold text-blue-950">
              <p>Обновленные авторские курсы с</p>
              <p>использованием <span className="text-4xl font-bold bg-gradient-to-r from-purple-500 via-purple-300 to-pink-200 bg-clip-text text-transparent animate-gradient">AI</span></p>
            </div>

            <div className="m-auto w-fit mt-5 rounded-full bg-gray-100 ">
              <button className="px-8 rounded-full bg-blue-600 py-2 text-white">Офлайн-курсы</button>
              <button className="px-8">Бесплатная консультация</button>
            </div>
          </div>

          <div className="grid grid-cols-3 mt-10 gap-5">
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
            <div className="text-4xl font-semibold text-blue-950">
              <p>Идеальные условия для твоего</p>
              <p className="leading-[1.3] text-4xl font-bold bg-gradient-to-r from-purple-500 via-purple-300 to-pink-200 bg-clip-text text-transparent animate-gradient">успешного образования</p>
            </div>
          </div>

          <div className="grid grid-cols-2 grid-rows-[120px] px-[140px] mt-10 ">
            {idealGrid.map((item) => (
              <div className="flex justify-center items-center gap-3" key={item.text}>
                <div className="h-fit"><img className="w-[115px] h-[115px]" src={item.image} /></div>
                <div className="w-[430px]">
                  <h1 className="text-3xl font-semibold text-gray-900">{item.text}</h1>
                  <p className="w-[350px] text-gray-600">{item.desctiption}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

        <div className="w-full mt-20 bg-gray-950 h-fit text-center p-20 px-[115px]" >
          <div className="text-4xl font-semibold text-blue-950">
            <p className="text-white">Теперь мы</p>
            <p className="leading-[1.3] text-4xl font-bold bg-gradient-to-r from-purple-500 via-purple-300 to-pink-200 bg-clip-text text-transparent animate-gradient">школа нового поколения</p>
          </div>  

          <div className="flex justify-center items-center mt-8">
            <div>
              {blackCanvas.map((item) => (
                <div className="flex justify-center items-center text-start text-white gap-5 border-b-1 border-gray-600 mr-40 py-4">
                  <div><img src={item.image}/></div>
                  <div className="w-[200px] text-[16px]">
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

            <div className="w-[600px] text-start pl-20">
              <h1 className="text-white text-4xl font-bold mb-8">Попади в топ и забирай крутые призы</h1>
              <img src="https://wepro3.uz/public/images/new-prizes.webp"/>
              <button className="flex items-center justify-center gap-2 bg-white px-6 py-3 mt-5 rounded-[7px] hover:bg-black/50 hover:text-gray-400 transition-all duration-300">
                <BsFillLightningChargeFill
                  className="w-[25px] h-[25px] bg-gradient-to-r from-purple-500 via-purple-300 to-pink-200 rounded-full p-1"
                />
                <p>Оставить заявку</p>
              </button>
            </div>
          </div>


          <div className="flex justify-center items-center mt-8">

            <div className="w-[600px] text-start pr-20">
              <h1 className="text-white text-4xl font-bold mb-8">Обменивай монеты в центре призов</h1>
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
