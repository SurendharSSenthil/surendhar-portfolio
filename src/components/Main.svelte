<script>
    import { fade } from 'svelte/transition';
    import Step from "./Step.svelte";

    let steps = [
        {
            name: "Add to cart",
            icon: "fa-solid fa-cart-shopping",
            description:
                "The Add to Cart app leverages Firebase Realtime Database to provide real-time product management. Built with React and Firebase, the app delivers an engaging and responsive user interface.",
            href: "https://add-to-cart-suren.netlify.app/"
        },
        {
            name: "Weather App using API",
            icon: "fa-solid fa-bolt",
            description:
                "The Weather App provides users with real-time weather updates. Built with React, it fetches weather data from a reliable API and displays current conditions. Hosted on Netlify, this app offers a responsive design and easy-to-use features for accurate weather information.",
                href: "https://surendhar-react-weather-app.netlify.app/"
        },
        {
            name: "Feedback app",
            icon: "fa-regular fa-comment",
            description:
                "The feedback app",
                href:"https://github.com/SurendharSSenthil/course-survey"
        },
        {
            name: "Attendance Management System",
            icon: "fa-solid fa-clipboard-user",
            description:
                "The Attendance Management System is a comprehensive tool for tracking and managing student attendance. Built with the MERN stack, it features real-time data handling, a user-friendly interface, and dynamic reporting capabilities. The system allows for efficient attendance recording, viewing, and analysis, making it ideal for educational institutions to streamline attendance processes.",
                href:"https://github.com/SurendharSSenthil/attendance-manager"
        },
    ];

    let benefits = [
    {
        metric: "Versatile",
        name: "a passionate full-stack developer",
        description:
            "With a deep understanding of both frontend and backend technologies, I excel in building robust and scalable web applications. My journey includes mastering JavaScript frameworks, diving into deep learning, and integrating modern tools like Firebase and Docker, ensuring that I can tackle diverse technical challenges.",
    },
    {
        metric: "Innovative",
        name: "a problem-solving enthusiast",
        description:
            "I thrive on finding creative solutions to complex problems. Whether it's optimizing code for performance or designing intuitive user interfaces, I am dedicated to leveraging the latest technologies and methodologies to craft elegant and effective solutions.",
    },
    {
        metric: "Detail-oriented",
        name: "a meticulous coder",
        description:
            "Attention to detail is at the core of my development process. From ensuring precise alignment in UI designs to writing clean, maintainable code, I focus on delivering high-quality work that meets and exceeds project requirements.",
    },
];

 const skills = [
        { name: 'C', icon: 'fas fa-laptop-code', color: '#2C3E50' },
        { name: 'Java', icon: 'fab fa-java', color: '#F89820' },
        { name: 'JavaScript', icon: 'fab fa-js', color: '#F7E04C' },
        { name: 'React', icon: 'fab fa-react', color: '#61DAFB' },
        { name: 'Angular', icon: 'fab fa-angular', color: '#DD0031' },
        { name: 'Svelte', icon: 'fab fa-svelte', color: '#FF3E00' },
        { name: 'MySQL', icon: 'fas fa-database', color: '#00758F' },
        { name: 'MongoDB', icon: 'fas fa-database', color: '#4DB33D' },
        { name: 'Tailwind CSS', icon: 'fab fa-css3-alt', color: '#06B6D4' },
        { name: 'Ant Design', icon: 'fas fa-paint-brush', color: '#0170FE' },
        { name: 'Python', icon: 'fab fa-python', color: '#306998' },
        { name: 'Node.js', icon: 'fab fa-node', color: '#8CC84B' },
        { name: 'Express', icon: 'fas fa-server', color: '#000000' }
    ];
        

</script>

<main class="flex flex-col flex-1 p-4">
    <section
        id="introPage"
        class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-2 sm:py-10"
    >
        <div
            class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"
        >
            <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
                Hi! I'm <span class="poppins text-violet-400">Surendhar</span> S
                <br />Full Stack
                <span class="poppins text-violet-400">Developer</span>
            </h2>
            <p class="text-base sm:text-lg md:text-xl">
                My <span class="text-violet-400"> favorite tech</span> includes JavaScript (React, Angular, Svelte) ,
                TailwindCSS, Node.js + Express.js & MongoDB!
            </p>
            <!-- <button
                class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950"
            >
                <div
                    class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
                />
                <h4 class="relative z-9">Get in touch &rarr;</h4>
            </button> -->
        </div>
       <!-- <div class="relative shadow-2xl grid place-items-center">
    <img
        src="../static/profile.png"  
        alt="Profile Image"
        class="object-cover z-[2] max-h-[70vh]"
    />
</div> -->

        <div  class="flex p-0.5 relative max-w-[700px] w-full mx-auto">
            <div
                class="absolute inset-0 overflow-hidden rounded-md flex items-center justify-center"
            >
                <div
                    class="hover:bg-gradient-to-r absolute inset-[-20px]  from-violet-800 to-indigo-800 specialSpin"
                />
            </div>

            <img
                src={"../profile.png"}
                alt="Profile"
                class="w-full h-full object-cover z-[2]"
                width="50px"
                height="50px"
            />
        </div>
         <!-- <img
                src={"/profile.png"}
                alt="Profile"
            /> -->
    </section>
    <section class="py-20 lg:py-32 flex flex-col gap-24" id="projects">
        <div class="flex flex-col gap-2 text-center">
            <h6 class="text-large sm:text-xl md:text-2xl">
                A few of my creative endeavors.
            </h6>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
            <Step step={steps[0]}>
    <p>
        The Weather App is an application developed with <strong
            class="text-violet-400"
            >React</strong
        >. It provides real-time weather updates by fetching data from a reliable API. The app features a responsive design for an engaging user experience, ensuring accurate weather information at your fingertips.
    </p>
</Step>

            <Step step={steps[1]}>
    <p>
        The Add to Cart app is a seamless shopping experience created with <strong
            class="text-violet-400"
            >React and Firebase Realtime Database</strong
        >. It allows users to manage their shopping cart in real-time and a smooth checkout process. The app's integration with Firebase ensures real-time synchronization and a responsive user interface.
    </p>
</Step>
            <Step step={steps[2]}>
    <p>
        The Feedback App is an efficient feedback collection and management tool built with <strong
            class="text-violet-400"
            >React, Node.js, and MongoDB (MERN)</strong
        >. It allows users to submit feedback and view real-time updates, while administrators can easily manage and analyze responses. The app's architecture ensures seamless data handling and a user-friendly interface.
    </p>
</Step>


            <Step step={steps[3]}>
    <p>
        The Attendance Management System is a powerful tool built with <strong
            class="text-violet-400"
            >MERN Stack (MongoDB, Express.js, React, Node.js)</strong
        >. It facilitates real-time attendance tracking, dynamic reporting, and an intuitive user interface to streamline attendance management for educational institutions.
    </p>
</Step>

        </div>
    </section>
    <section
        id="about"
        class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
    >
        <!-- <div class="z-[-1] bg-violet-950 w-screen left-1/2 -translate-x-1/2 top-0 h-full absolute"> </div> -->
        <div
            class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4"
        >
            <h6 class="text-large sm:text-xl md:text-2xl">
                Want to know more?
            </h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                A bit <span class="poppins text-violet-400">about</span> me.
            </h3>
        </div>
        <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">
            I am . . .
        </p>
        <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
            {#each benefits as benefit, index}
                <div class="flex gap-6 sm:gap-8">
                    <p
                        class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold"
                    >
                        0{index + 1}
                    </p>
                    <div class="flex flex-col gap-6 sm:gap-8">
                        <h3 class="text-2xl sm:text-3xl md:text-5xl">
                            {benefit.name}
                        </h3>
                        <p>{benefit.description}</p>
                    </div>
                </div>
            {/each}
        </div>
        <section
        id="github-contributions"
        class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-8 sm:gap-20 md:gap-10 relative"
    >
        <div
            class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4"
        >
            <h6 class="text-large sm:text-xl md:text-2xl">
                Want to see my GitHub activity?
            </h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                My GitHub <span class="poppins text-violet-400">Contributions</span>
            </h3>
        </div>

        <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">
            Here's a visual representation of my contributions on GitHub.
        </p>

        <div class="flex flex-col gap-10 w-full mx-auto max-w-[800px]">
            <!-- GitHub Contributions Graph -->
            <div class="flex justify-center">
                <img
                    src="https://github-readme-streak-stats.herokuapp.com/?user=SurendharSSenthil&theme=dark"
                    alt="GitHub Contributions"
                    class="mx-auto"
                />
            </div>
        </div>

        <p class="mx-auto">
            Explore more of my repositories and contributions on <a href="https://github.com/SurendharSSenthil" class="text-violet-400">GitHub</a>.
        </p>
    </section>
    <section
        id="skills"
        class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"
    >
        <div
            class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4"
        >
            <h6 class="text-large sm:text-xl md:text-2xl">
                Skills & Technologies
            </h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                My <span class="poppins text-violet-400">Skills</span>
            </h3>
        </div>
        <div class="flex flex-wrap justify-center gap-6" in:fade={{ duration: 500 }}>
            {#each skills as skill}
                <div class="flex items-center gap-2 bg-transparent border-violet-950 border-1 rounded-full py-2 px-4">
                    <i class={skill.icon + " text-2xl"} style="color: {skill.color};"></i>
                    <span class="text-lg">{skill.name}</span>
                </div>
            {/each}
        </div>
    </section>
    
  </section>
</main>
