<script lang="ts">
	import Board from '../navigation/Board.svelte';
	import Footer from '../navigation/Footer.svelte';

	export let days: string[] = [
		'monday',
		'tuesday',
		'wednesday',
		'thursday',
		'friday',
		'saturday',
		'sunday'
	];
	export let menus: { [key: string]: string[][] } = {
		sunday: [
			[
				'Pav',
				'Bhaji',
				'Onion & Lemon',
				'Boiled Corn',
				'Chocos',
				'Boiled Egg',
				'Tea/Coffee/Milk',
				'Watermelon'
			],
			[
				'Three Bean Salad',
				'Chole Masala',
				'Mix Veg Sambar(Pumpkin)',
				'Steamed Rice',
				'Puri',
				'Masala Butter Milk',
				'Fryums/Pickle'
			],
			[
				'Onion/Cucumber/Lemon',
				'Fresh Lime Soda(Sweet and Salt)',
				'Paneer Dum Biryani',
				'Hyderabad Chicken Biryani',
				'Mirchi Ka salan',
				'Bengali Khichdi',
				'Mix Veg Raita',
				'Fryums'
			],
			['Veg Macaroni']
		],
		monday: [
			[
				'Masala Idli & vada',
				'Sambhar',
				'Coconut Chutney',
				' - ',
				'Chocos',
				'Bread/Jam/Butter',
				'Omelette',
				'Tea/Coffee/Milk',
				'Banana'
			],
			[
				'Dal Makhani',
				'Aalu Methi',
				'Rasam',
				' - ',
				'Steamed Rice',
				'Phulka',
				'Curd',
				' - ',
				'Fryums/Pickle',
				'Kosambari Salad'
			],
			[
				'Methi Matar Malai',
				'Egg Curry',
				'Tomato Pappu',
				'Bagara Rice',
				'Phulka',
				'Cucumber Raita',
				'Jeera Papad/Pickled',
				'Rice Kheer',
				'Tossed Salad'
			],
			['Veg Sandwich']
		],
		tuesday: [
			[
				'Vermicilli/Ven Pongal',
				'Coconut Chutney',
				'Aachar/Tomato Chutney',
				' - ',
				'Sprouted Green Moong',
				'Bread/Jam/Butter',
				'Boiled Egg',
				'Tea/Coffee/Milk',
				'Watermelon'
			],
			[
				'Aloo Kofta',
				'Beetroot',
				'Sambar',
				' - ',
				'Steamed Rice',
				'Flavoured Chapati',
				'mix Veg Raita',
				' - ',
				'Jeera Papad/chutney',
				'Carrot Salad'
			],
			[
				'Vegetable Jalfrezi',
				'Lobhia Masala',
				'Steamed Rice',
				'Phulka',
				'Fryums/Pickled',
				'Green Salad'
			],
			['Aloo Samosa (2)']
		],
		wednesday: [
			[
				'Aloo Paratha',
				'Curd',
				'Aachar',
				'Cornflakes',
				'Bread/Jam/Butter',
				'Masala Egg Omelette',
				'Tea/Coffee/Milk',
				'Banana'
			],
			[
				'Slice Cucumber Salad',
				'Kadai Veg',
				'Guthi Vankaya',
				'Dal Panchartna',
				'Steamed Rice',
				'Phulka',
				'Boondi Raita',
				'Fryums/Pickle'
			],
			[
				'Cucumber',
				' - ',
				'Aloo Capsicum',
				' - ',
				'Chana Dal Tadka',
				'Steamed Rice',
				'Plain Paratha',
				'Boondi Raita',
				'Fryums/Pickled',
                'Gulab Jamun'
			],
			['Missal Pav']
		],
		thursday: [
			[
				'Masala Dosa',
				'Sambhar',
				'Coconut Chutney',
				' - ',
				'Bread/Jam/Butter',
				'Boiled Egg',
				'Tea/Coffee/Milk',
				'Banana'
			],
			[
				'Cucumber & Onion',
				'Kadi pakoda',
				'Carrot & Matar Masala',
				'Sambar',
				'Steamed Rice',
				'Phulka',
				'Buttermilk',
				'Fryums/Chutney'
			],
			[
				'Cucumber',
				'Aloo Capsicum',
				'Chana Dal Tadka',
				'Steamed Rice',
				'Plain Paratha',
				'Boondi Raita',
				'Fryums/Pickled',
				'Gulab Jamun'
			],
			['Missal Pav']
		],
		friday: [
			[
				'Bhature',
				'Chole',
				'Fried Green Chilly',
				'Boiled Red Channa',
				'Bread/Jam/Butter',
				'Egg Bhurji',
				'Tea/Coffee/Milk',
				'Papaya'
			],
			[
				'Sweet Corn Cucumber And Onions',
				'Rajma',
				'Masala Aloo Fry',
				'Rasam',
				'Steamed Rice',
				'Plain Paratha',
				'Curd',
				'Fryums/Pickle'
			],
			[
				'Lemonade',
				'Paneer Butter Masala',
				'Dum Ka Murg',
				'Ghar Ka Dal',
				'Steamed Rice',
				'Butter Roti',
				'Jeera Papad/Pickled'
			],
			['Papadi Chat']
		],
		saturday: [
			[
				'Onion Uthappam',
				'Sambhar',
				'Coconut Chutney & Tomato Chutney',
				'Bread/Jam/Butter',
				'Boiled Egg',
				'Tea/Coffee/Milk',
				'Banana'
			],
			[
				'Tossed Salad',
				'Soya Masala',
				'Dal Makhani',
				'Steamed Rice',
				'Phulka',
				'Masala Butter Milk',
				'Jeera Papad/Chutney'
			],
			[
				'Green Salad',
				'',
				'Crispy Vada',
				'Matar Masala',
				'Bengali Khichdi',
				'Phulka',
				'Curd',
				'Fryums/Pickled'
			],
			['Meethi Bondi', 'Mysore bonda & tomato chutney']
		]
	};

	const today = new Date().getDay();
	let selectedDay = days[today === 0 ? 6 : today - 1]; // Adjust for Sunday being 0 in getDay()
	let yestDay = days[today === 0 ? 5 : today - 2]; // Adjust for Sunday being 0 in getDay()
	let nextDay = days[today === 6 ? 0 : today + 1]; // Adjust for Sunday being 0 in getDay()

	function selectDay(day: string) {
		selectedDay = day;
	}

	$: heading = selectedDay === days[today - 1] ? 'today' : selectedDay;

	const abbreviateDay = (day: string) => {
		return day.slice(0, 3);
	};
</script>

<div class="week_day_selector">
	{#each days as day}
		<button class:selected={selectedDay === day} on:click={() => selectDay(day)}>
			<span class="full">{day}</span>
			<span class="abbr">{abbreviateDay(day)}</span>
		</button>
	{/each}
</div>

<Board is_shown={false} heading="yesterday">
	<div class="grid">
        <div>
            <h4>Breakfast</h4>
            <div class="mobile">
                {#each menus[yestDay][0] as item}
                    <p>{item}</p>
                {/each}
            </div>
        </div>

        <div>
            <h4>Lunch</h4>
            <div class="mobile">
                {#each menus[yestDay][1] as item}
                    <p>{item}</p>
                {/each}
            </div>
        </div>

        <div class="flex">
            <div>
                <h4>Snacks</h4>
                <div class="mobile">
                    {#each menus[yestDay][3] as item}
                        <p>{item}</p>
                    {/each}
                </div>
            </div>

            <div>
                <h4 class="">Dinner</h4>
                <div class="mobile">
                    {#each menus[yestDay][2] as item}
                        <p>{item}</p>
                    {/each}
                </div>
            </div>
        </div>
</Board>

<Board heading="{heading}'s menu">
	<div class="grid">
		<div>
			<h4>Breakfast</h4>
			<div class="mobile">
				{#each menus[selectedDay][0] as item}
					<p>{item}</p>
				{/each}
			</div>
		</div>

		<div>
			<h4>Lunch</h4>
			<div class="mobile">
				{#each menus[selectedDay][1] as item}
					<p>{item}</p>
				{/each}
			</div>
		</div>

		<div class="flex">
			<div>
				<h4>Snacks</h4>
				<div class="mobile">
					{#each menus[selectedDay][3] as item}
						<p>{item}</p>
					{/each}
				</div>
			</div>

			<div>
				<h4 class="">Dinner</h4>
				<div class="mobile">
					{#each menus[selectedDay][2] as item}
						<p>{item}</p>
					{/each}
				</div>
			</div>
		</div>
	</div>
</Board>

<Board heading="tommorrow">
	<div class="grid">
		<div>
			<h4>Breakfast</h4>
			<div class="mobile">
				{#each menus[nextDay][0] as item}
					<p>{item}</p>
				{/each}
			</div>
		</div>

		<div>
			<h4>Lunch</h4>
			<div class="mobile">
				{#each menus[nextDay][1] as item}
					<p>{item}</p>
				{/each}
			</div>
		</div>

		<div class="flex">
			<div>
				<h4>Snacks</h4>
				<div class="mobile">
					{#each menus[nextDay][3] as item}
						<p>{item}</p>
					{/each}
				</div>
			</div>

			<div>
				<h4 class="">Dinner</h4>
				<div class="mobile">
					{#each menus[nextDay][2] as item}
						<p>{item}</p>
					{/each}
				</div>
			</div>
		</div>
	</div>
</Board>

<style lang="scss">
	.grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;

		.flex {
			display: flex;
			flex-direction: column;
			gap: 1rem;
		}
		h4 {
			margin-bottom: 0.25em;
			text-decoration: underline;
		}
	}
	.week_day_selector {
		display: flex;
		width: 100%;
		justify-content: center;
		margin: 2em auto;
		margin-bottom: 20px;

		button {
			font-size: 1.4rem !important; /* Ensure font size is applied */
			border: var(--blue-border);
			border-right: none;
			padding: 0.6em;
			background: var(--blue-gradient);
			cursor: pointer;
			color: #151534;
			text-shadow: 0px 0px 1px white;

			span.full {
				display: inline;
			}

			span.abbr {
				display: none;
			}
		}

		button:hover,
		.selected {
			background: var(--blue-gradient-selected);
			color: #fff;
			font-weight: 600;
			box-shadow: inset 0 4px 6px rgba(50, 52, 90, 0.2);
			text-shadow: 0px 0px 1px rgb(39, 35, 51);
		}
		button:last-child {
			border-right: var(--blue-border);
		}
	}

	@media (max-width: 600px) {
		.grid {
			grid-template-columns: 1fr;
            font-size: 1.4em;
            gap: 1rem;
            .mobile {
                display: grid;
                grid-template-columns: 1fr 1fr;
            
            }
		}
        .flex {
            flex-direction: row;
            flex-wrap: wrap;
            gap: 1rem;
        }
        .week_day_selector {
            flex-wrap: wrap;

			button {
                width: 6ch;
				span.full {
					display: none;
				}

				span.abbr {
					display: inline;
				}
			}
        }
	}

	@media (max-width: 300px) {
		.grid {
			grid-template-columns: 1fr;
		}
	}
</style>
