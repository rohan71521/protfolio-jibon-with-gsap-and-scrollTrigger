
gsap.from("#service ,#services h1",{
    y: 100,
    duration: 1,
    scrollTrigger: {
        trigger: "#service, #services h1",
        scroller: "body",
        start:"top 60%"
    }
})
gsap.from("#card1",{
    y: 100,
    x: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger:"#card1",
        scroller: "body",
        start:"top 90%",
    }
})
gsap.from("#card2",{
    y: 100,
    x: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger:"#card2",
        scroller: "body",
        start:"top 90%"
    }
})
gsap.from("#card3",{
    y: 100,
    x: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger:"#card3",
        scroller: "body",
        start:"top 90%"
    }
})
gsap.from("#left1 h3 ,#left1 h1 , #left1 p",{
    y: 100,
    duration: 1,
    scrollTrigger: {
        trigger: "#left1 h3 ,#left1 h1 , left1 p",
        scroller: "body",
        start:"top 60%"
    }
})
gsap.from("#right1 img",{
    scale: 0.6,
    opacity:0,
    duration: 1,
    scrollTrigger: {
        trigger: "#right1 img",
        scroller: "body",
        start:"top 90%"
    }
})

gsap.from("#portfolios h3 ,#portfolios h1",{
    y: 100,
    duration: 1,
    scrollTrigger: {
        trigger: "#portfolios h3 ,#portfolios h1",
        scroller: "body",
    }
})
gsap.from("#portfolio div",{
    y: 100,
    duration: 1,
    opacity:0,
    scrollTrigger: {
        trigger: "#portfolio div",
        scroller: "body",
        start:"top 70%"
    }
})
gsap.from("#price-h3 ,#price-h1",{
    y: 100,
    duration: 1,
    scrollTrigger: {
        trigger: "#price-h3 ,#price-h1",
        scroller: "body",
        start:"top 80%"
    }
})

gsap.from("#price-card-1",{
    y: 120,
    x: 120,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger:"#price-card-1",
        scroller: "body",
        start:"top 90%"
    }
})
gsap.from("#price-card-2",{
    y: 120,
    x: 120,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger:"#price-card-2",
        scroller: "body",
        start:"top 90%"
    }
})
gsap.from(".client",{
    y: 100,
    duration: 1,
    scrollTrigger: {
        trigger: ".client",
        scroller: "body",
        start:"top 90%"
    }
})
gsap.from(".client-happy",{
    y: 100,
    duration: 1,
    scrollTrigger: {
        trigger: ".client-happy",
        scroller: "body",
        start:"top 90%"
    }
})


const tml = gsap.timeline();

tml.from("header",{
    opacity: 0,
    delay:1
})
tml.from("#logo, #menu li , #appointment",{
   opacity: 0,
   y: -50,
   duration:1,
   stagger: 0.15
})
tml.from("#right img",{
    opacity: 0,
    scale: 0.5,
    duration: 0.3
})
tml.from("#left h2, #left h1",{
    opacity: 0,
    x:-50,
    duration:0.5,
    stagger:0.3,
    scrollTrigger:true
})






