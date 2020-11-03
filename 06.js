// UNderstand and work with events
const post = document.querySelector('.post');
post.addEventListener('');

//
post.addEventListener('click', (event) => {
	console.log(event);
});

//
post.addEventListener('click', (event) => {
	//   console.log(event.target);
	console.log('Do you want to edit this post?');
});

//
const posts = document.querySelectorAll('.post');
posts.forEach((post) =>
	posts.addEventListener('click', (event) => {
		//   console.log(event.target);
		console.log('Do you want to edit this post?');
	}),
);

document.body.addEventListener('keypress', event => {
  //   if (!event.target.closest('.post')) return;
    
    console.log('Do you want to edit this post?')  
  })