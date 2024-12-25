let teams =['CSK','MI','RCB','KKR','GT']
let images =[
    'https://wallpapercave.com/wp/wp2496940.jpg', 
    'https://wallpapers.com/images/hd/mumbai-indians-final-calling-poster-jf3oqo7pnzgmka3p.jpg',
    'https://w0.peakpx.com/wallpaper/287/432/HD-wallpaper-rcb-banglore-play-bold.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3C8wQQul1KxEF5h16kZh0tLqnriAJYnrfOA&s',
    'https://www.shutterstock.com/image-vector/gt-letter-linked-logo-business-260nw-1961437750.jpg'
]
let btn=document.querySelector("button")
let h5=document.querySelector("h5")

btn.addEventListener("click",function(){
   let num =Math.floor(Math.random()*teams.length)
   h5.innerHTML=teams[num]
   
})