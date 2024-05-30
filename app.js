const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
        else {
            entry.target.classList.remove("show");
        }
    });
});
const hiddenElement = document.querySelectorAll(".hidden");
hiddenElement.forEach((el) => 
    observer.observe(el)
);

window.addEventListener('scroll', function () {
    var navbar = document.getElementById('navbar');
    var scrollPosition = window.scrollY;
    var scrollThreshold = 100; // Adjust this value as needed

    if (scrollPosition > scrollThreshold) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show1");
        }
        else {
            entry.target.classList.remove("show1");
        }
    });
});
const hiddenElement1 = document.querySelectorAll(".slide");
hiddenElement1.forEach((el) => 
    observer1.observe(el)
);

var barChartData = {
    labels: ['Web Development', 'AI', 'Marlin Firmware', 'RepRap Firmware','C,Python,C++','Java,Rust'],
    datasets: [{
        label: 'Level of Knowledge',
        backgroundColor: '#ed2e2e', 
        borderColor: '#ed872e',    
        borderWidth: 1,
        data: [90, 50, 75, 50,85,25],
    }]
};

var ctx = document.getElementById('myBarChart').getContext('2d');

var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: barChartData,
    options: {
        responsive: true,
        scales: {
            x: {
                type: 'category', 
                position: 'bottom',
                ticks: {
                    font: {
                        size: 20,
                    },
                    color: 'white',
                },
            },
            y: {
                beginAtZero: true,
            },
        },
    },
});
