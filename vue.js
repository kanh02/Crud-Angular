Vue.component(`movie-card`, {
	props: [`image`, `title`],
	template: `
	<div>
		<img v-bind:src="image" v-bind:alt="title"/>
		<h2>{{title}}</h2>
	</div>
			`,
})


new Vue({
	el: `#app`,

	data :{
		movies: [
			{
				title: `regreso al futuro`,
				image: `https://www.google.es/imgres?imgurl=https%3A%2F%2Fcdne.ojo.pe%2Fthumbs%2Fuploads%2Fimg%2F2018%2F05%2F16%2Fimagen-de-mario-sin-bigote-deja-en-shock-a-muchos--256300-jpg_700x0.jpg&imgrefurl=https%3A%2F%2Fojo.pe%2Flocomundo%2Fimagen-mario-nintendo-sin-bigote-twitter-deja-shock-viral-256300%2F&docid=vDNd7czKfclR3M&tbnid=G2pIlgUgVaECfM%3A&vet=10ahUKEwj2krXlv7beAhUSHxoKHUpYBcsQMwj9ASgCMAI..i&w=700&h=376&bih=577&biw=1366&q=imagen&ved=0ahUKEwj2krXlv7beAhUSHxoKHUpYBcsQMwj9ASgCMAI&iact=mrc&uact=8`
			}
		]
	},
	templates: `
<div>
<movie-card
v-for="(movie,index)in movies
:key="index"
:tittle="movie.title"
:image="movie.image">
</movie-card>
</div>`


})
