import landingImage from '../assets/mobileimg.png'
import playstoreImg from '../assets/playstore-removebg-preview.png'

const Homepage = () => {
  return (
    <div className='flex flex-col gap-12 ml-16 mr-16'>
      <div className='bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-20'>
        <h1 className="md:text-5xl text-3xl font-bold text-orange-600">Get your order today</h1>
        <span className="text-2xl tracking-tight font-dancing">Food is love and now your love is just a click away</span>
      </div>
      <div className="grid md:grid-cols-2 gap-5 bg-[hsl(19.37deg_100%_49.8%)]">
        <img src={landingImage} />
        <div className="flex flex-col justify-center items-center text-center space-y-2">
          <span className="text-lg font-medium">Order takeaway even faster</span>
          <span className="text-sm ">
            Download the FoodEats App for faster ordering and person
          </span>
          <img src={playstoreImg} />
        </div>


      </div>
    </div>
  )
}

export default Homepage