import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { assets } from "../assets/assets.js";
import { useOnClickOutside } from "usehooks-ts";
import { useRef, useState } from "react";

const Modal = ({ modal, setModal, currentItem }) => {
  const ref = useRef(null);
  const refImg = useRef(null);
  const [currentPhoto, setCurrentPhoto] = useState(
    currentItem.photo ? currentItem.photo[0] : null,
  );
  const handleClickOutside = () => {
    setModal(false);
  };
  useOnClickOutside(ref, handleClickOutside);

  return (
    <div
      className={`transition duration-1000 ${modal ? "visible bg-black bg-opacity-15" : " hidden bg-none"} fixed flex justify-center items-center top-0 left-0 right-0 bottom-0`}
    >
      <div
        ref={ref}
        className={`fixed bg-white px-10 pt-12 pb-[12px] rounded-[12px] flex flex-col gap-[16px] items-center w-[800px] transition duration-1000 ${modal ? "visible translate-y-0 opacity-100" : "hidden translate-y-2.5 opacity-0"}`}
      >
        <img
          ref={refImg}
          className="p-1 rounded-[6px] bg-blue-300 w-[100%] mb-[20px]"
          src={currentItem.photo ? currentItem.photo[0] : null}
          alt=""
        />
        <div className="flex gap-4">
          {currentItem.photo?.length > 1 &&
            currentItem.photo.map((photo, index) => (
              <div
                className="bg-blue-300 h-[35px] w-[35px] flex justify-center items-center p-4 rounded-full transition hover:bg-opacity-50 cursor-pointer"
                onClick={() => (refImg.current.src = currentItem.photo[index])}
              >
                <p>{index + 1}</p>
              </div>
            ))}
        </div>

        <div className="flex justify-center items-center self-start gap-[6px]">
          <h2 className="font-semibold">{currentItem.name}</h2>
          <a href={currentItem.href} target="_blank">
            <assets.linkSvg className="w-[18px] hover:fill-blue-300" />
          </a>
        </div>
        <p className="text-[#212121] font-normal leading-6 self-start text-[15px]">
          {currentItem.descr}
        </p>
        <div className="flex gap-1 ">
          {currentItem.skills &&
            currentItem.skills.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-[10px] w-[65px] rounded-[4px]"
              >
                <item.photo className="w-[25px] h-[25px] mb-1" />
                <div className="text-[12px]">{item.name}</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
