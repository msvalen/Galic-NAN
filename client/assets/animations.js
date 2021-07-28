let tl = gsap.timeline({delay: 1});
tl.from('#logo', {duration: 0.5, ease: "power2. out", opacity:0, y:-30});
tl.from('#left', {duration: 0.5, ease: "power2. out", opacity:0, y:-30});
tl.from('#f7f9db30-d6a2-438b-afda-e094f80d6ed1', {duration: 0.6, ease: "power2. out", opacity:0});

//Up arrow
let tlb1 = gsap.timeline({repeat: 200});
tlb1.to('#a121d04e-e8d5-43c4-a528-475c9213b2e5', {
    duration: 3,
    y:7,
    ease: "power2. inout", 
    
} );
tlb1.to('#a121d04e-e8d5-43c4-a528-475c9213b2e5', {
    duration:3,
    y:0,
    ease: "power2. inout", 
} )
//down arrow
let tlb2 = gsap.timeline({repeat: 200});
tlb2.to('#ac4dd70a-b4f9-4e8f-a65f-93f13f36c725', {
    delay: 1.5,
    duration: 3,
    y:7,
    ease: "power2. inout", 
} );
tlb2.to('#ac4dd70a-b4f9-4e8f-a65f-93f13f36c725', {
    duration:3,
    y:0,
    ease: "power2. inout", 
} )

//chart-1
let tlb3 = gsap.timeline({repeat: 200});
tlb3.to('#b697f7d3-99ca-41d7-9978-4c10ebec2a8a', {
    delay: 1,
    duration: 3,
    y:7,
    ease: "power2. inout", 
} );
tlb3.to('#b697f7d3-99ca-41d7-9978-4c10ebec2a8a', {
    duration:3,
    y:0,
    ease: "power2. inout", 
} )
//chart-2
let tlb4 = gsap.timeline({repeat: 200});
tlb4.to('#a312a2e2-5c37-4e65-80fd-1a5416965867', {
    delay: 0.5,
    duration: 3,
    y:7,
    ease: "power2. inout", 
} );
tlb4.to('#a312a2e2-5c37-4e65-80fd-1a5416965867', {
    duration:3,
    y:0,
    ease: "power2. inout", 

} )

let tlb5 = gsap.timeline({repeat: 200});
tlb5.to('#f2a01d8c-3a5c-42d4-839e-1372c74b15cf', {
    transformOrigin:"50% 50%",
    rotation:"+=40",
    duration: 3,
    ease: "power2. inout",
} );
tlb5.to('#f2a01d8c-3a5c-42d4-839e-1372c74b15cf', {
    transformOrigin:"50% 50%",
    rotation:"-=40",
    duration: 3,
    ease: "power2. inout",
} )






