const friendsArry = [
    {
        name: "Taylor Swift",
        photo: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjcic2Rl5DkAhWMg-AKHcOjDE8QjRx6BAgBEAQ&url=https%3A%2F%2Fwww.billboard.com%2Farticles%2Fcolumns%2Fpop%2F8031203%2Ftaylor-swift-dress-reputation-best-song&psig=AOvVaw2v23ppe5QrcjY6IR9dHAy-&ust=1566346915806829",
        score: [1, 5, 4, 1, 2, 2, 5, 3, 4, 1]
    }, {
        name: "Keira Knightley",
        photo: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwi-yLjAl5DkAhWPmeAKHb4PDswQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.indiewire.com%2F2018%2F01%2Fkeira-knightley-modern-films-female-characters-1201917656%2F&psig=AOvVaw0GsifGWXd4BLM6lMxWz3UC&ust=1566346952268465",
        score: [5, 4, 3, 1, 3, 4, 5, 2, 5, 2]
    }, {
        name: "Diane Guerrero",
        photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fe0%2Ffb%2F13%2Fe0fb132a175131bf8cc0a961962d8ad5.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F347903139947417547%2F&docid=CLK0Fu_h8rOg9M&tbnid=KfQB6MoraBCLJM%3A&vet=10ahUKEwjPyarRl5DkAhXrUd8KHW4ECJ0QMwhsKAQwBA..i&w=594&h=594&bih=694&biw=1517&q=orange%20is%20the%20new%20black%20maritza&ved=0ahUKEwjPyarRl5DkAhXrUd8KHW4ECJ0QMwhsKAQwBA&iact=mrc&uact=8",
        score: [1, 3, 5, 5, 3, 4, 2, 3, 3, 3]
    }, {
        name: "Megan Fox",
        photo: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwim-_mqmJDkAhWGg-AKHbyDAZoQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.news.com.au%2Fentertainment%2Fmovies%2Fwhy-we-never-see-megan-fox-on-the-big-screen-anymore%2Fnews-story%2Fbbf9273b97461f0f78ba066db15bcfd4&psig=AOvVaw1YHquq9uV3VJWS6-zF4mB_&ust=1566347238256001",
        score: [4, 2, 1, 1, 5, 3, 2, 4, 5, 4]
    }, {
        name: "Mila Kunis",
        photo: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwj5z8__o5DkAhWRm-AKHUckD30QjRx6BAgBEAQ&url=https%3A%2F%2Fwww.womenshealthmag.com%2Fweight-loss%2Fa19924375%2Fcelebrity-interview-mila-kunis%2F&psig=AOvVaw1SmpRxhPG3qoS0H2-yZHkV&ust=1566350353672460",
        score: [2, 4, 4, 5, 1, 5, 4, 3, 2, 5]
    }, {
        name: "Angelina Jolie",
        photo: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwi6qImkpJDkAhVoTd8KHe03BpwQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.nytimes.com%2F2017%2F09%2F13%2Fmovies%2Fangelina-jolie-brad-pitt-first-they-killed-my-father.html&psig=AOvVaw0BUtar5xPDOrSKNP_DSYmZ&ust=1566350433324676",
        score: [2, 2, 4, 3, 2, 4, 4, 2, 1, 3]
    }, {
        name: "Meghan Ory",
        photo: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjAu6GapZDkAhWjhOAKHYoGB20QjRx6BAgBEAQ&url=https%3A%2F%2Fwww.ign.com%2Farticles%2F2012%2F06%2F16%2Fmeghan-ory-bumped-up-to-series-regular-for-once-upon-a-time&psig=AOvVaw3rM_sHoytM-C4OXVlQ9Q7T&ust=1566350637577729",
        score: [1, 2, 3, 5, 3, 5, 1, 2, 2, 5]
    }, {
        name: "Ariana Grande",
        photo: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiqgrPIpZDkAhWEc98KHdI5B9AQjRx6BAgBEAQ&url=http%3A%2F%2Fwww.mjtrends.com%2Fblog%2F2016%2F10%2Fariana-grande-black-latex-bunny%2Fariana-grande-black-vinyl-bunny-outfit%2F&psig=AOvVaw3tWKoOJe57iwcymY9mRhY6&ust=1566350761410920",
        score: [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
    }, {
        name: "Rachel McAdams",
        photo: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiD49DvppDkAhXPwVkKHf5dCqEQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.latimes.com%2Fentertainment%2Fmovies%2Fla-et-mn-rachel-mcadams-southpaw-true-detective-20150724-story.html&psig=AOvVaw1YZ3HTAkFApyt5-Lp1dWB3&ust=1566351124628403",
        score: [2, 2, 1, 4, 2, 3, 5, 3, 3, 4]
    }, {
        name: "Rick Astley",
        photo: "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiG2Mb9pZDkAhXjzVkKHRD3DToQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D-Cv68B-F5B0&psig=AOvVaw2Wliup9VHD_6plREYQJ9Cb&ust=1566350903340230",
        score: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
    },
]

module.exports = friendsArry;