<script lang="ts">
	import Checkbox from '../forms/Checkbox.svelte';

	export let is_shown = true;

	export let course_name: string;

	export let grade: string;
	export let batch: string;
	export let credits: number;
	export let take_again: boolean;

	export let quality: number;
	export let diff: number;
	export let wisdom: number;

	export let not_brief: string;

	export let add_rating: () => void;
</script>

<section>
	<header>
		<p>add a rating</p>
		<button on:click={() => (is_shown = !is_shown)}>
			{is_shown ? '-' : '+'}
		</button>
	</header>

	{#if is_shown}
		<form on:submit|preventDefault={add_rating}>
			<div class="info">
				<div class="course_info">
					<div>
						<label for="anon">anonymous</label>
						<input type="checkbox" id="anon" name="anon" />
					</div>
					<div>
						<label for="course_name">course</label>
						<input type="text" id="course_name" bind:value={course_name} required />
					</div>
					<div>
						<label for="take_again">take again</label>
						<input type="checkbox" id="take_again" name="take_again" bind:checked={take_again} />
					</div>
					<div>
						<label for="grade">grade</label>
						<input type="text" id="grade" name="grade" bind:value={grade} required />
					</div>
					<div>
						<label for="batch">batch</label>
						<input type="text" id="batch" name="batch" bind:value={batch} required />
					</div>
					<div>
						<label for="credits">credits</label>
						<input type="number" id="credits" name="credits" bind:value={credits} required />
					</div>
				</div>

				<div class="prof_info">
					<div>
						<label for="quality">quality</label>
						<div class="radio-group">
							<input type="radio" id="quality-1" value="1" bind:group={quality} required />
							<label for="quality-1">1</label>
							<input type="radio" id="quality-2" value="2" bind:group={quality} required />
							<label for="quality-2">2</label>
							<input type="radio" id="quality-3" value="3" bind:group={quality} required />
							<label for="quality-3">3</label>
							<input type="radio" id="quality-4" value="4" bind:group={quality} required />
							<label for="quality-4">4</label>
							<input type="radio" id="quality-5" value="5" bind:group={quality} required />
							<label for="quality-5">5</label>
						</div>
					</div>
					<div>
						<label for="diff">difficulty</label>
						<div class="radio-group">
							<input type="radio" id="diff-1" value="1" bind:group={diff} required />
							<label for="diff-1">1</label>
							<input type="radio" id="diff-2" value="2" bind:group={diff} required />
							<label for="diff-2">2</label>
							<input type="radio" id="diff-3" value="3" bind:group={diff} required />
							<label for="diff-3">3</label>
							<input type="radio" id="diff-4" value="4" bind:group={diff} required />
							<label for="diff-4">4</label>
							<input type="radio" id="diff-5" value="5" bind:group={diff} required />
							<label for="diff-5">5</label>
						</div>
					</div>
					<div>
						<label for="wisdom">wisdom</label>
						<div class="radio-group">
							<input type="radio" id="wisdom-1" value="1" bind:group={wisdom} required />
							<label for="wisdom-1">1</label>
							<input type="radio" id="wisdom-2" value="2" bind:group={wisdom} required />
							<label for="wisdom-2">2</label>
							<input type="radio" id="wisdom-3" value="3" bind:group={wisdom} required />
							<label for="wisdom-3">3</label>
							<input type="radio" id="wisdom-4" value="4" bind:group={wisdom} required />
							<label for="wisdom-4">4</label>
							<input type="radio" id="wisdom-5" value="5" bind:group={wisdom} required />
							<label for="wisdom-5">5</label>
						</div>
					</div>
				</div>
			</div>
			<div>
				<label for="not_brief">description</label><br />
				<textarea rows="6" cols="10" id="not_brief" name="not_brief" bind:value={not_brief} required
				></textarea>
			</div>
			<button type="submit">submit</button>
		</form>
	{/if}
</section>

<style lang="scss">
	section {
		// margin: 0.8em;
		border: var(--main-border-dark);
		background-color: #fff;

		width: 100%;
		header {
			display: flex;
			justify-content: space-between;
			/* align-items: center; */
			color: var(--main-dark);
			background: rgb(241, 158, 138);
			background: var(--main-gradient);
			padding: 0.35em;
			width: 100%;
			// border-bottom: var(--main-border-dark);
			p {
				font-weight: 600;
			}

			button {
				text-align: center;
				color: #284138;
				background: linear-gradient(0deg, #5db192bb 1%, #7fbeb2 55%, rgb(210, 254, 255) 100%);
				border-radius: 2px;
				padding: 0 4px;
				border: 1px solid #284138;
				font-weight: 600;
				width: 1.5em;
			}
		}
	}

	form {
		padding: 0.8em;
		label {
			opacity: 0.9;
			font-weight: 600;
			color: var(--main-dark);
			font-size: 0.95em;
		}
		textarea {
			label {
				margin-top: 9910px;
			}
			width: 100%;
			border: 1px solid #284138;
			border-radius: 2px;
			padding: 0.1em;
			font-size: 0.8em;
		}
		.radio-group {
			input[type='radio'] {
				margin-bottom: 0.4em;
			}
		}
	}
	.info {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1em;
		margin-bottom: 1em;

		color: var(--main-dark);

		.course_info,
		.prof_info {
			div:hover {
				background-color: #f0f0f0;
			}
		}

		.course_info {
			display: flex;
			flex-direction: column;
			div {
				margin: 0.2em;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				input {
					border: 1px solid #284138;
					padding: 0.1em;
					margin-top: 0.2em;
					max-width: 100px;
				}
			}
		}

		.prof_info {
			div {
				margin: 0.4em;
			}
		}
	}
	button {
		grid-column: 1 / -1;
		background: rgb(243, 161, 214);
		color: #284138;
		background: linear-gradient(0deg, #5db192bb 1%, #7fbeb2 55%, rgb(210, 254, 255) 100%);
		border-radius: 2px;
		padding: 0.4em;
		border: 1px solid #284138;
		font-weight: 600;
		width: 100%;
	}
</style>
