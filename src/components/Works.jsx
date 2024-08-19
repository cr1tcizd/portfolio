import { works } from "../assets/assets.js";
import WorksItem from "./WorksItem.jsx";
import Modal from "./Modal.jsx";
import { useEffect, useState } from "react";

const Works = () => {
  const [modal, setModal] = useState(false);
  const [currentItem, setCurrentItem] = useState([]);

  return (
    <section className="py-20 bg-white">
      <div className="container flex flex-col">
        <h2 className="text-2xl mx-auto mb-[80px]">Мои работы</h2>
        <div className="flex justify-center items-center flex-wrap gap-24">
          {works.map((work, index) => (
            <WorksItem
              key={index}
              work={work}
              setModal={setModal}
              setCurrentItem={setCurrentItem}
            />
          ))}
        </div>
      </div>
      <Modal modal={modal} setModal={setModal} currentItem={currentItem} />
    </section>
  );
};

export default Works;
