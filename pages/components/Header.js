import Typewriter from "typewriter-effect";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import Navigation from "./Navigation";
import Particlesbg from "./Particlesbg";
export default function Header() {
  return (
    <div className="flex flex-col h-screen justify-center items-center text-center gap-2">
      <Particlesbg />
      <div className="absolute flex flex-row right-5 top-5 text-2xl font-bold text-gray-300 gap-5">
        <a className="hover:text-white" href="https://www.linkedin.com/in/anas-el-baghdadi-77494419b/">
          <BsLinkedin />
        </a>
        <a className="hover:text-white" href="https://github.com/ael-bagh">
          <BsGithub />
        </a>
      </div>
      <div className=" text-5xl font-bold">Hey, I am</div>
      <div className="text-4xl text-green-400">
        <Typewriter
          options={{
            strings: [
              "Anas El Baghdadi",
              "A proud 1337 student",
              "A web Development enthusiast",
            ],
            autoStart: true,
            loop: true,
            delay: 75,
          }}
        />
      </div>
      <Navigation />
    </div>
  );
}
