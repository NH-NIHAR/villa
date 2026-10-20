


function locoMotiv() {
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
function loDer() {
  const lod = document.querySelector("#fixd");
  setTimeout(() => {
    lod.style.marginTop = "-100vh"
  }, 3000);
}

function menueActiv () {
  const nav = document.querySelector("#nav");
  const three = document.querySelector("#three");
  let count = 0
  three.addEventListener("click", function() {
    if (count == 0) {
      nav.style.marginTop = "0vh",
      count = "1"
    }else{
      nav.style.marginTop = "-100vh",
      count = "0"
    }
    
  })
}
function navMenu () {
  const menu = document.querySelectorAll(".h3");

menu.forEach(item =>{
  item.addEventListener("click", function() {
    menu.forEach(e =>{
      e.classList.remove("activ");
    })
    item.classList.add("activ")
  })
})
}
function swiper () {
     var swiper = new Swiper('.mySwiper', {
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
}
function heroAnimation(){
      gsap.registerPlugin(SplitText);

    const split = new SplitText("#herotop h1", {
      type: "chars, words, lines"
    });

    gsap.from(split.chars, {
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.04,
      ease: "power4.out",
      delay: 3
    });


    gsap.registerPlugin(SplitText);
    const splita = new SplitText("#herotop h4", {
      type: "chars, words, lines"
    });
    gsap.from(splita.chars,{
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.04,
      ease: "power4.out",
      delay: 3
    });
    gsap.registerPlugin(SplitText);
    const splitb = new SplitText("#herotop p", {
      type: "chars, words, lines"
    });
    gsap.from(splitb.chars,{
      y: 100,
      opacity: 0,
      duration: 0.5,
      stagger: 0.04,
      ease: "power4.out",
      delay: 3
    });



    gsap.from("#logo", {
      x: "180",
      y: 180,
      rotation: 180,
      duration:1,
      delay:2.7
    });
    // gsap.from("#nav", {
    //   y: "180",
    //   // rotation: 60,
    //   duration:1,
    //   delay:2.7
    // });
    gsap.from("#start", {
      x: "-180",
       y: 180,
      rotation: 60,
      duration:1,
      delay:2.7
    });
    gsap.from("#heroleft", {
      x: "-180",
      rotation: -60,
      duration:1,
     delay:2.7
    });
    gsap.from("#butnss button", {
      x: "-180",
      rotation: -60,
      duration:1,
      delay:2.7
    });
    
    gsap.from("#herobox1", {
      y: "-180",
      x: 180,
      rotation: -60,
      duration:1,
      delay:2.7
    });
    gsap.from("#herobox2", {
      y: "-180",
      // rotation: -60,
      duration:1,
      delay:2.7
    });
    gsap.from("#herobox3", {
      y: "-180",
      x: -180,
      rotation: -60,
      duration:1,
      delay:2.7
    });



}
function page2(){
  gsap.registerPlugin(SplitText, ScrollTrigger);

const split = new SplitText("#page2top h1", {
  type: "chars, words, lines"
});

gsap.from(split.words, {
  y: 100,
  opacity: 0,
  duration: 0.8,
  stagger: 0.04,
  ease: "power4.out",

  scrollTrigger: {
    trigger: "#page2",
    scroller: "#main",
    start: "top 50%",
    end: "bottom 70%",
    toggleActions: "play none none reverse"
  }
  });
}
function page3() {
    gsap.registerPlugin(SplitText, ScrollTrigger);

      const split = new SplitText("#page3top h1", {
        type: "chars, words, lines"
      });

      gsap.from(split.chars, {
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.04,
        ease: "power4.out",

        scrollTrigger: {
          trigger: "#page3",
          scroller: "#main",
          start: "top 50%",
          end: "bottom 50%",
          toggleActions: "play none none reverse"
        }
        });



        gsap.registerPlugin(SplitText, ScrollTrigger);

      const splita = new SplitText("#page3top p", {
        type: "chars, words, lines"
      });

      gsap.from(splita.lines, {
        y: 100,
        opacity: 0,
        duration: 0.9,
        stagger: 0.04,
        ease: "power4.out",

        scrollTrigger: {
          trigger: "#page3",
          scroller: "#main",
          start: "top 50%",
          end: "bottom 70%",
          toggleActions: "play none none reverse"
        }
        });
       



          gsap.registerPlugin(SplitText, ScrollTrigger);

document.fonts.ready.then(() => {
  const splitb = new SplitText("#page3bottom h1", {
    type: "lines"
  });

  gsap.from(splitb.lines, {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power4.out",

    scrollTrigger: {
      trigger: "#page3bottom",
      scroller: "#main",
      start: "top 50%",
      toggleActions: "play none none reverse",
    }
  });

  ScrollTrigger.refresh();
  });




    gsap.registerPlugin(SplitText, ScrollTrigger);

document.fonts.ready.then(() => {
  const splitb = new SplitText("#page3bottom p", {
    type: "lines"
  });

  gsap.from(splitb.lines, {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    ease: "power4.out",

    scrollTrigger: {
      trigger: "#page3bottom",
      scroller: "#main",
      start: "top 40%",
      toggleActions: "play none none reverse",
      // markers: true
    }
  });

  ScrollTrigger.refresh();
  });
        



}
function page4() {
   gsap.registerPlugin(SplitText, ScrollTrigger);

      const split = new SplitText("#page4top h1", {
        type: "chars, words, lines"
      });
      gsap.from(split.lines, {
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.04,
        ease: "power4.out",

        scrollTrigger: {
          trigger: "#page4",
          scroller: "#main",
          start: "top 50%",
          end: "bottom 50%",
          toggleActions: "play none none reverse"
        }
        });

        gsap.registerPlugin(SplitText, ScrollTrigger);

      const splita = new SplitText("#pg4content p", {
        type: "chars, words, lines"
      });
      gsap.from(splita.lines, {
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.04,
        ease: "power4.out",

        scrollTrigger: {
          trigger: "#page4",
          scroller: "#main",
          start: "top 50%",
          end: "bottom 50%",
          toggleActions: "play none none reverse"
        }
        });
}











locoMotiv();
loDer();
menueActiv ();
 navMenu ();
 swiper ();
 heroAnimation();
 page2();
 page3();
 page4();