function Navigation() {
  return (
    <div className="flex flex-row mt-9 gap-10 font-light">
      <a
        href="#education"
        class="group transition duration-300 hover:text-green-400"
      >
        Education
        <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-green-400"></span>
      </a>
      <a
        href="#skills"
        class="group transition duration-300 hover:text-green-400"
      >
        Skills
        <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-green-400"></span>
      </a>
      <a
        href="#projects"
        class="group transition duration-300 hover:text-green-400"
      >
        Projects
        <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-green-400"></span>
      </a>
      <a
        href="#contact"
        class="group transition duration-300 hover:text-green-400"
      >
        contact me
        <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-green-400"></span>
      </a>
    </div>
  );
}

export default Navigation;
