import {ImHtmlFive, ImCss3} from 'react-icons/im'
import {FaReact, FaNodeJs, FaGitAlt} from 'react-icons/fa'
import {SiTailwindcss, SiNextdotjs,SiDocker, SiJavascript} from 'react-icons/si'

const stack = [
  {
    id: 1,
    img: ImHtmlFive,
    title: "HTML",
    color: "text-orange-500"
  },
  {
    id: 2,
    img: ImCss3,
    title: "CSS",
    color: "text-blue-500"
  },
  {
    id: 9,
    img: SiJavascript,
    title: "JavaScript",
    color: "text-yellow-500"
  },
  {
    id: 3,
    img: FaReact,
    title: "React",
    color: "text-blue-400"
  },
  {
    id: 4,
    img: FaNodeJs,
    title: "NodeJs",
    color: "text-green-500"
  },
  {
    id: 5,
    img: SiTailwindcss,
    title: "Tailwind",
    color: "text-blue-500"
  },
  {
    id: 6,
    img: SiNextdotjs,
    title: "NextJs",
    color: "text-white"
  },
  {
    id: 7,
    img: SiDocker,
    title: "Docker",
    color: "text-blue-500"
  },
  {
    id: 8,
    img: FaGitAlt,
    title: "Git",
    color: "text-red-500"
  }
];

function Stack() {
  return (
    <div className="flex flex-wrap overflow-y-auto">
        {
            stack.map(e => (
            <div className="flex flex-row p-10 justify-center items-center gap-2 text-left">
                <e.img className={"text-4xl "+ e.color} />
                <h3 className="text-2xl">{e.title}</h3>
            </div>))
        }
    </div>
  )
}

export default Stack;
