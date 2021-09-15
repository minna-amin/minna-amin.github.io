$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/tictac.png',
            link: 'https://github.com/minna-amin/tic-tac-toe',
            title: 'tic-tac-toe',
           // demo: 'https://mporter.co',
            technologies: ['React'],
            description: "Simple game of tic tac toe built using react",
            categories: ['webdev']
        },

        {
            image: 'assets/images/to-do.jpg',
            link: 'https://github.com/minna-amin/to-do',
            title: 'To-Do',
            technologies: ['React'],
            description: "A to do list app built with React",
            categories: ['webdev']
        },

        {
            image: 'assets/images/mycafe.jpg',
            link: '_includes/mycafe.html',
            title: 'My Cafe',
            technologies: ['UI/UX'],
            description: "a user  can view the  menu to their favourite cafe and order ahead",
            categories: ['ui']
        },
        {
            image: 'assets/images/stdy.png',
            link: 'https://github.com/minna-amin/to-do',
            title: 'stdy',
            technologies: ['UI/UX'],
            description: "a to do list",
            categories: ['ui']
        },
        {
            image: 'assets/images/habits.png',
            link: 'https://github.com/minna-amin/to-do',
            title: 'habit tracker',
            technologies: ['UI/UX'],
            description: "Log in your progress on your daily habits to stay consistent ",
            categories: ['ui']
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
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}">Demo</a>` : ''}</p>
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