import styles from './style.module.css'

const About = ({ query }: { query: string }) => (
	<section class={styles.about}>
		<h1>About</h1>
		<p>A page all about this website.</p>
		<pre>{JSON.stringify(query)}</pre>
	</section>
)

export default About
