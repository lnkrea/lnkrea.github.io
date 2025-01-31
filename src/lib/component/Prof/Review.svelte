<script>
    export let name = "anon";
    export let course_name = "course";
    export let date_posted = "date";

    export let diff = "0"; 
    export let wisdom = "0";
    export let quality = "0";

    export let grade = "A";
    export let take_again = "yes";
    export let credits = "4";

    export let not_brief = "This is a review";
</script>

<div class="review">
	<header>
		<p>{name}</p>
		<p style="font-weight: 700;">{course_name}</p>
		<p>{date_posted}</p>
	</header>

	<div class="grid">
		<div class="boxes">
			<div>
				<h2>{quality}</h2>
				<p>quality</p>
			</div>

			<div>
				<h2>{diff}</h2>
				<p>difficulty</p>
			</div>

			<div>
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
					<h3>{credits}</h3>
                    <p>credits</p>
				</div>
				<div>
					<h3>{take_again}</h3>
					<p>would take again</p>
				</div>
			</div>

			<div class="not__brief">
					{not_brief}
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.review {
		width: 480px;
		border: var(--main-border-dark);
		margin: 0.8em;

		header {
			display: flex;
			justify-content: space-between;
			/* align-items: center; */
			color: var(--main-dark);
			background: rgb(241, 158, 138);
			background: var(--main-gradient);
			padding: 0.35em;
			width: 100%;
			border-bottom: var(--main-border-dark);
		}

		.grid {
			display: grid;
			grid-template-columns: 1fr 4fr;

			.boxes {
				display: flex;
				flex-direction: column;

				background-color: rgba(255, 0, 93, 0.466);
				border-right: var(--main-border-dark);

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
                }
			}
		}
	}
</style>
