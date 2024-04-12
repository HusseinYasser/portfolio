import MyImg from "../assets/Hussein.jpg";

const Header = () => {
  return (
    <div className="ml-20 flex space-x-5 items-center">
      <img src={MyImg} alt="Hussein" className="rounded-full w-48 h-auto" />
      <div className="flex-col space-y-3">
        <div className="font-pixelfy text-white text-4xl">
          Hussein Ebrahim
        </div>
        <div className="font-pixelfy text-white text-2xl">
          Software Engineer
        </div> 

      </div>
     
    </div>
  );
};

export default Header;