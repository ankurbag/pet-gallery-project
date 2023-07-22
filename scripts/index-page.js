let images = [
	{
		url: "./assets/images/Photo-gallery-1.jpg",
	},
	{
		url: "./assets/images/Photo-gallery-2.jpg",
	},
	{
		url: "./assets/images/Photo-gallery-3.jpg",
	},
	{
		url: "./assets/images/Photo-gallery-4.jpg",
	},
	{
		url: "./assets/images/Photo-gallery-5.jpg",
	},
	{
		url: "./assets/images/Photo-gallery-6.jpg",
	},
	{
		url: "./assets/images/Photo-gallery-6.jpg",
	},
	{
		url: "./assets/images/Photo-gallery-6.jpg",
	},
	{
		url: "./assets/images/Photo-gallery-6.jpg",
	},

	{
		url: "./assets/images/Photo-gallery-6.jpg",
	},
	{
		url: "./assets/images/Photo-gallery-6.jpg",
	},
];

const showGallery = () => {
	images.forEach((image) => {
		// create
		createImageContainer(image.url);
	});
};

const createImageContainer = (imgUrl) => {
	/**
	 * 
	 * <div class="photo-gallery__item">
						<img
							src="./assets/images/Photo-gallery-1.jpg"
							alt="concert goers with smoke and lasers"
							class="photo-gallery__image"
						/>
					</div>
	 * 
	 */
	let parentEl = document.querySelector(".photo-gallery");

	let photoGalleryItem = document.createElement("div");
	photoGalleryItem.classList.add("photo-gallery__item");

	let img = document.createElement("img");
	img.classList.add("photo-gallery__image");
	img.src = imgUrl;
	photoGalleryItem.appendChild(img);
	parentEl.appendChild(photoGalleryItem);
};

const getPetImages = () => {
	// Make Api call using Axios
	/* axios
		.get("https://api.thedogapi.com/v1/images/search?limit=10")
		.then((response) => {
			// store data in images
			images = response.data;
			// Then call showGallery();
			showGallery();
		})
		.catch((e) => console.error(e));*/
	return axios
		.all([
			axios.get("https://api.thedogapi.com/v1/images/search?limit=10"),
			axios.get("https://api.thecatapi.com/v1/images/search?limit=10"),
		])
		.then((response) => {
			// store data in images
			images = response[0].data;
			images = images.concat(response[1].data);
			// Then call showGallery();
			showGallery();
		})
		.catch((e) => console.error(e));
};

// Onload
// Get all the images from the api

getPetImages();
