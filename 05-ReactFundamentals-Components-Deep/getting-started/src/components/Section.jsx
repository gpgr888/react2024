export default function Section({title, children, ...props}){
	// as you can see now as we have passed id attribut now we can use it
	// but it is not scalable as each time we have to pass props id classname
	// etc 
	// when using this approach we have to destructure every attribute and manually put like id={id} className={className}
	// so instead we can use ...props in above argument section which allows us to add all the 
	// extra props into one so we can remove id from above and replace it with ...props which groups 
	// extra props into one
	return (
		// <section id={id}>
		// 	<h2>{title}</h2>
		// 	{children}
		// </section>
		<section {...props}>
			<h2>{title}</h2>
			{children}
		</section>
		);
}