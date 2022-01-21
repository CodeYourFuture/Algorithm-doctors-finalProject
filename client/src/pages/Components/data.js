export const listData = [
	{
		catagory: {
			tilte: "Duration"
            {
			name: "5-10",
			method: function handleFilterUpto10() {
				const newFilter = originalData.filter(
					(energiser) => energiser.duration >= 5 && energiser.duration <= 10
				);
				return setEnergisersData(newFilter);
			},
            },
		},
	},
];
