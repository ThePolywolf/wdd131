stats = [
    {
        logo: "images/AF-badge.webp",
        title: "US Air Force",
        info: [
            {
                stat: "Number of active-duty personnel",
                description: "~325,000"
            },
            {
                stat: "Total aircraft in operation (fighter jets, bombers, drones)",
                description: "~5,200"
            },
            {
                stat: "Annual budget allocation for air superiority",
                description: "~$60-70 billion"
            },
            {
                stat: "Mission success rates",
                description: "98%"
            },
            {
                stat: "Annual flight hours",
            description: "1.2 million flight hours"
            }
        ]
    },
    {
        logo: "images/navy-badge.png",
        title: "US Navy",
        info: [
            {
                stat: "Total aircraft carriers equipped with air units",
                description: "11 active"
            },
            {
                stat: "Total naval aircraft (fighter jets, helicopters)",
                description: "~2,600"
            },
            {
                stat: "Number of naval aviators",
                description: "7,000 pilots"
            },
            {
                stat: "Missions supporting naval operations and maritime security",
                description: "~200,000+ annually"
            }
        ]
    },
    {
        logo: "images/marine-badge.png",
        title: "US Marine Corp",
        info: [
            {
                stat: "Marine Corp Aviation Specialty",
                description: "Vertical Takeoff/Landing"
            },
            {
                stat: "Number of squadrons",
                description: "~70 active squadrons"
            }
        ]
    },
    {
        logo: "images/army-badge.jpg",
        title: "US Army",
        info: [
            {
                stat: "Total helicopters (attack, transport, reconnaissance)",
                description: "~4,400"
            },
            {
                stat: "UAV deployment and capabilities",
                description: "~1,000"
            },
            {
                stat: "Support operations for ground troops",
                description: "~80%"
            }
        ]
    },
    {
        logo: "images/cg-badge.png",
        title: "US Coast Guard",
        info: [
            {
                stat: "Number of rescue and patrol aircraft",
                description: "250"
            },
            {
                stat: "Annual search-and-rescue missions completed",
                description: "~17,500 missions annually"
            },
            {
                stat: "Areas of operation (domestic waterways, international waters)",
                description: "Primarily U.S. domestic waterways"
            }
        ]
    }
]

function statsTemplate(info) {
    let html = ``;

    info.forEach(stat => {
        html += `<li class="stat">${stat.stat}: <span class="stat-answer">${stat.description}</span></li>`;
    });

    return html;
}

function branchTemplate(branch) {
    return `
    <section class="branch">
        <img src="${branch.logo}" alt="${branch.title} logo">
        <h2>${branch.title}</h2>
        <ul class="stat-list">
            ${statsTemplate(branch.info)}
        </ul>
    </section>
    `;
}

const branches = document.getElementById("branches");

let branchHtml = "";
stats.forEach(branch => {
    branchHtml += branchTemplate(branch);
});
branches.innerHTML = branchHtml;