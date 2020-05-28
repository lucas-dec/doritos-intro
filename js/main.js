const tl = gsap.timeline();
tl.to(".canvas", { delay: 0.5, duration: 1.5, y: "-100%", ease: "power4.inOut", stagger: 0.25,})
  .from(".logo", { duration: 1, y: -100,},"-=0.5")
  .from(".links", { duration: 1, y: -100 }, "-=0.5")
  .from(".btnSearch", { duration: 1, y: -100 }, "-=0.5")
  .from(".title, .yellowBg", { duration: 1, opacity: 0, y: "100%" }, "-=0.8")
  .from(".productName", { duration: 1, opacity: 0, y: "100%" })
  .from(".imgDoritos", { duration: 1, opacity: 0, x: "100%" }, "-=1")
  .from(".imgDoritosPack", { duration: 1, opacity: 0, y: "-100%" }, "-=0.5")
  .from(".description", { duration: 1, opacity: 0, y: "100%" }, "-=1.5")
  .from("h4, .price, .imgSauce", { duration: 1, opacity: 0, y: "100%" }, "-=0.5")
  .from(".btnAddCart", { duration: 1, opacity: 0, y: "-100%" }, "-=1")
  .from(".imgSpices", { duration: 1, opacity: 0, y: "100%" }, "-=0.5");
