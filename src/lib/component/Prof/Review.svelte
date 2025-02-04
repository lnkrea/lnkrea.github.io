<script lang="ts">
	export let name = 'anon';
	export let course_name = 'how the fucj';
	export let date_posted = 'date';

	export let quality: number = 0;
	export let diff: number = 0;
	export let wisdom: number = 0;

	export let grade = 'A';
	export let batch = '2022';
	export let credits = 4;
	export let take_again = true;

	export let not_brief = 'This is a review';

	$: quality_color =
		quality == 1
			? 'worst'
			: quality == 2
				? 'bad'
				: quality == 3
					? 'okay'
					: quality == 4
						? 'good'
						: 'best';
	$: diff_color =
		diff == 1 ? 'worst' : diff == 2 ? 'bad' : diff == 3 ? 'okay' : diff == 4 ? 'good' : 'best';
	$: wisdom_color =
		wisdom == 1
			? 'worst'
			: wisdom == 2
				? 'bad'
				: wisdom == 3
					? 'okay'
					: wisdom == 4
						? 'good'
						: 'best';
</script>

<div class="review">
	<header>
		<p>{name}</p>
		<p style="font-weight: 700;">{course_name}</p>
		<p>{date_posted}</p>
	</header>

	<div class="grid">
		<div class="boxes">
			<div class={quality_color}>
				<h2>{quality}</h2>
				<p>quality</p>
			</div>

			<div class={diff_color}>
				<h2>{diff}</h2>
				<p>difficulty</p>
			</div>

			<div class={wisdom_color}>
				<h2>{wisdom}</h2>
				<p>wisdom</p>
			</div>
		</div>

		<div class="brief__holder">
			<div class="brief">
				<div>
					<h3>{grade}</h3>
					<p>grade</p>
				</div>
				<div>
					<h3>{batch}</h3>
					<p>batch</p>
				</div>
				<div>
					<h3>{credits}</h3>
					<p>credits</p>
				</div>
				<div>
					<h3>
						{#if take_again}
							yes
						{:else}
							no
						{/if}
					</h3>
					<p>would take again</p>
				</div>
			</div>

			<div class="not__brief">
				<p>
					{not_brief}
				</p>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.review {
		width: 100%;
		border: var(--main-border-dark);

		header {
			display: flex;
			justify-content: space-between;
			color: var(--main-dark);
			background: rgb(241, 158, 138);
			background: var(--main-gradient);
			padding: 0.35em;
			width: 100%;
			border-bottom: var(--main-border-dark);
		}

		.grid {
			display: grid;
			grid-template-columns: 1fr 5fr;

			.boxes {
				display: flex;
				flex-direction: column;
				border-right: var(--main-border-dark);

				.worst {
					background-color: #9d0006;
				}

				.bad {
					background-color: #9d5400;
				}

				.okay {
					background-color: #d1b24b;
				}

				.good {
					background-color: #6a8429;
				}

				.best {
					background-color: #076678;
				}

				div {
					border-bottom: var(--main-border-dark);
					padding: 0.4em;

					h2 {
						color: #fff;
					}

					p {
						margin-bottom: 8px;
						font-size: 0.9em;
						font-weight: 500;
						color: hsla(0, 0%, 0%, 0.65);
					}
				}

				div:last-child {
					border-bottom: none;
				}
			}

			.brief__holder {
				display: grid;
				grid-template-rows: 1fr 2fr;
				.brief {
					font-size: 0.9em;
					display: flex;
					justify-content: space-around;
					background-color: #fff;
					align-items: center;
					border-bottom: var(--main-border-dark);
				}

				.not__brief {
					padding: 0.9em;
					font-size: 0.85em;
					background-color: #fff;
					p {

					}
				}
			}
		}
	}
</style>
