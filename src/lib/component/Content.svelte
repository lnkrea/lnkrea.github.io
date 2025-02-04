<script lang="ts">
	import Review from './Prof/Review.svelte';
	import Form from './Prof/Form.svelte';

	let course_name: string = 'hoow the fucj';
	let quality: number;
	let diff: number;
	let wisdom: number;
	let grade: string;
	let credits: number;
	let batch: string;
	let take_again: boolean;
	let not_brief: string;

	interface review_type {
		course_name: string;
		quality: number;
		diff: number;
		wisdom: number;
		grade: string;
		credits: number;
		batch: string;
		take_again: boolean;
		not_brief: string;
	}

	let created_reviews: review_type[] = [];

	let add_rating_state: string = 'empty';
	let add_rating = () => {
		if (
			!course_name ||
			!quality ||
			!diff ||
			!wisdom ||
			!grade ||
			!credits ||
			!batch ||
			// !take_again ||
			!not_brief
		) {
			alert('please fill in all fields');
			add_rating_state = 'invalid';
			return;
		}
		add_rating_state = 'valid';
		created_reviews = [
			{
				course_name,
				quality,
				diff,
				wisdom,
				grade,
				credits,
				batch,
				take_again,
				not_brief
			},
			...created_reviews
		];
	};
</script>

<div>
	<section>
		<Form
			bind:course_name
			bind:quality
			bind:diff
			bind:wisdom
			bind:grade
			bind:credits
			bind:batch
			bind:take_again
			bind:not_brief
			{add_rating}
		/>
	</section>

	{#each created_reviews as review}
		<section>
			<Review
				name="shubhro"
				course_name={review.course_name}
				date_posted="12/12/12"
				quality={review.quality}
				diff={review.diff}
				wisdom={review.wisdom}
				grade={review.grade}
				credits={review.credits}
				batch={review.batch}
				take_again={review.take_again}
				not_brief={review.not_brief}
			/>
		</section>
	{/each}
</div>

<style>
	div {
		height: 100%;
		border-left: var(--main-border-dark);
		column-count: 2; /* Creates two masonry-style columns */
		column-gap: 1em; /* Space between columns */
		padding: 1em;

		section {
			break-inside: avoid;
			margin-bottom: 1em;
			padding: 0;
			display: inline-block;
			width: 100%;
		}
	}

	@media (max-width: 550px) {
		div {
			column-count: 1; /* Switch to 1 column */
		}
	}
</style>
