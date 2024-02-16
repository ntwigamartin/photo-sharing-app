import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center h-screen w-full">
      <div className=" flex flex-col justify-center mt-40">
        <h1 className="font-black pl-20">Your Favourite Photo Gallery</h1>
        <p className="font-normal">
          Welcome to the photo library where you can share your 
        </p>
        <span className="pl-10">photos and browse photos from various users</span>
      </div>
      <div className="mt-40 flex justify-around w-full overflow-y-auto overflow-x-hidden flex-wrap">
        <Image
          src={'/assets/images/blueocean.jpg'}
          alt=""
          width={400}
          height={400} 
        />
        <Image 
          src={'/assets/images/desert.jpg'}
          alt=""
          width={400}
          height={400}
        />
        <Image 
          src={'/assets/images/mountains.jpg'}
          alt=""
          width={400}
          height={400}
        />
      </div>
    </div>
  )
}
