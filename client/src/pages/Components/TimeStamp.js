
const TimeStamp = () => {
	let options = {
		weekday: "long",
		year: "numeric",
		month: "short",
		day: "numeric",
		hour: "2-digit",
		minute: "2-digit",
	};
	return TimeStamp.toLocaleTimeString("en-us", options);
};
export default TimeStamp;