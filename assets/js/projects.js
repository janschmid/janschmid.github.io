$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/anomalyDetection.jpg',
            link: 'https://github.com/janschmid/AnomalyDetectionDNN',
            title: ' Anomaly Detection using Deep Neural Networks and Image Processing for Ports',
            demo: false,
            technologies: ['DNN', 'Python', 'Deepstream'],
            description: "Master thesis, aim is to extend the autonommous inspection of quays with drones.",
            categories: ['featured', 'robotics', "DNN"]
        },
        {
            link: 'https://github.com/janschmid/ParrotMinidroneCompetition',
            image: 'assets/images/LineFollowing.png',
            title: "Parrot Minidrone Competition",
            demo: "https://youtu.be/kNiId2MReso",
            technologies: ['Matlab', 'GNC', 'Computer Vision'],
            description: "Real-time image based fedforward controller on a quadcopter. <a href=\"https://youtu.be/elezoPG-3co\", style=\"color: blue\">Presentation</a>,",
            categories: ['featured', 'robotics'],
        },
        {
            link: 'https://github.com/janschmid/EIT',
            image: 'assets/images/EIT_Drone.jpeg',
            title: "Percision landing on Quick Connector system",
            demo: false,
            technologies: ['ROS', 'Python', 'Docker'],
            description: "A visual approach for the precise landing on the connector is used and all the computations are performed on board on a Raspberry Pi 3B+. <a href=\"https://www.youtube.com/watch?v=hyc7kXy4a8c\", style=\"color: blue\">Indoor Demo</a>, <a href=\"https://www.youtube.com/watch?v=xp5y24glsds\", style=\"color: blue\">Simulation Demo</a>",
            categories: ['featured', 'robotics'],
        },
        {
            image: 'assets/images/LUDO.png',
            link: 'https://github.com/janschmid/LudoPy',
            title: 'Reinforcement Learning in the Game of Ludo',
            demo: false,
            technologies: ['Q-Learning', 'Python'],
            description: "A Q-learning AI player for the board game LUDO.",
            categories: ['featured', 'RL']
        },
        {
            image: 'assets/images/output_vdeo_screenshot.png',
            link: 'https://github.com/janschmid/DNN_Audio_Identity_Recognition',
            title: "Which podcaster",
            demo: false,
            technologies: ['PyTorch'],
            description: "Neural Networks that can determine which host of a famous Danish podcast is speaking",
            categories: ['DNN'],
        },
        {
            image: 'assets/images/Nextcloud_Logo.png',
            link: 'https://github.com/janschmid/NextcloudSetupTutorial',
            title: 'Nextcloud setup tutorial for RockPi4',
            demo: false,
            technologies: ['Linux', 'OpenVPN', 'Microsoft Azure'],
            description: "Guide which describes how to setup a Nextcloud server from scratch on a SBC (Single board computer) with a reverse proxy and encrypted communication",
            categories: ['featured', 'smarthome']
        },
        {
            image: 'assets/images/Sokobot.jpeg',
            link: 'https://github.com/janschmid/Sokoban',
            title: 'Sokoban Robot and Solver',
            demo: "https://nextcloud.sdu.dk/index.php/s/bksip8BiFCMLmEm",
            technologies: ['Python', 'C#'],
            description: "A Sokoban puzzle robot and solver, using behaviour based design and informed search techniques.",
            categories: ['featured', 'robotics']
        },
        {
            image: 'assets/images/MPC Plot.png',
            link: 'https://github.com/NDurocher/MPC-Autonomous-Car',
            title: 'MPC Controller for an Autonomous Car',
            demo: 'https://youtu.be/Tbv2cbrF87Y',
            technologies: ['MPC', 'MATLAB'],
            description: "A time-horizon MPC controller for an autonomous car in MATLAB.",
            categories: ['robotics']
        },
        {
            image: 'assets/images/smart-home.jpg',
            link: 'https://github.com/janschmid/SmartHome',
            title: 'SmartHome - OpenHAB, Logitech Media Server, Zigbee',
            demo: false,
            technologies: ['Java', 'Linux'],
            description: "OpenHAB configuration for Max2Play using Raspbee, HifiBerryAMP2 which allows multi-room audio control",
            categories: ['smarthome']
        },
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}", style="color: blue">Demo</a>` : ''}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}
