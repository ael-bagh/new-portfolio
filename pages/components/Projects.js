const projects = [
  {
    id: 4,
    title: "Transcendance",
    type: "school project",
    description:
      "A web app allowing users to play the famous pong game with their friends.The app includes a chat interface with all the necessary features and rooms management.",
    stack: {
      React: "bg-blue-500",
      NodeJs: "bg-green-500",
      Socketio: "bg-yellow-500",
    },
    img: "https://i.ibb.co/0nZ3Z3V/pong.png",
    git: "https://github.com/ael-bagh/trancecendance",
  },
  {
    id: 1,
    title: "CUB3d",
    type: "school project",
    img: "https://www.commanderx16.com/forum/uploads/monthly_2021_03/raycasting_demo_1.3_0a.gif.a0ab69046e03f435043ae0a3862862da.gif",
    description: "A raycasting implementation in C using the miniLibX library.",
    stack: { C: "bg-blue-500", miniLibX: "bg-green-500" },
    git: "https://github.com/ael-bagh/cub3d",
  },
  {
    id: 2,
    title: "zen-TV - An IPTV Ecommerce platform",
    type: "Freelance project",
    img: "https://zen-tv.net/assets2/img/main.png",
    description:
      "A full-stack Ecommerce platform for IPTV services. That included a payment gateway, a dashboard for the admin and a user dashboard.",
    stack: { Laravel: "bg-red-500" },
    git: "private",
    link: "https://zen-tv.net/",
  },
  {
    id: 3,
    title: "WebServ",
    type: "school project",
    img: "https://www.nginx.com/wp-content/uploads/2017/09/NGINX-Plus-product-page_Load-Balancer@2x.png",
    description: "A web server implementation in C++.",
    stack: { "C++": "bg-blue-500" },
    git: "https://github.com/ael-bagh/webserv",
  },
  {
    id: 5,
    title: "inception",
    type: "school project",
    img: "https://www.docker.com/wp-content/uploads/2022/05/Docker_Temporary_Image_Google_Blue_1080x1080_v1.png",
    description:
      " Setting up an infrastructure composed of 3 containers : Nginx, MariaDB and wordpress+php-fpm services using docker-compose. and writing a Dockerfile for each service without using the official images.",
    stack: { Docker: "bg-blue-500" },
    git: "https://github.com/ael-bagh/inception",
  },
];

function Projects() {
  return (
    <div
      className="flex flex-col h-screen gap-3 max-w-[1200px]"
      id="projects"
    >
      <div className="text-3xl font-bold mb-3 p-10 justify-center gap-3">
        Projects
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 w-full p-10 gap-8">
        {projects.map((e) => (
          <div className="flex justify-center hover:scale-105 delay-150 duration-700">
            <div className="flex flex-col w-full bg-white bg-opacity-60 shadow-lg">
              <img
                className=" w-full h-96 object-cover bg-white"
                src={e.img}
                alt=""
              />
              <div className="text-gray400 text-xs m-2">
                {Object.entries(e.stack).map(([key, value]) => (
                  <span className={value+ " text-sm font-medium m-2 px-2.5 py-0.5"}>
                    {key!=0 && key}
                  </span>
                ))}
              </div>
              <div className="p-6 flex flex-col justify-start">
                <h5 className="text-xl text-green-400 font-medium mb-2">
                  {e.title}
                </h5>
                <p className="text-gray-200 text-base mb-4">{e.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
