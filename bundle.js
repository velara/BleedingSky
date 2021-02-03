Hooks.once("dragRuler.ready", () => {
	dragRuler.registerModule("pf2e-bleedingsky-data", speedProvider)
})

const speedProvider = function mySpeedProvider(token, playerColor) {
const type = token.actor.data.type;
if (type === "character") {
		const baseSpeed = token.actor.data.data.attributes.speed.total;
		return [
      { range: baseSpeed, color: playerColor },
      { range: baseSpeed * 2, color: 0xffff00 },
      { range: baseSpeed * 3, color: 0xff8000 },
    ];
	} else {
		const baseSpeed = token.actor.data.data.attributes.speed.value;
		return [
			{ range: baseSpeed, color: playerColor },
			{ range: baseSpeed * 2, color: 0xffff00 },
			{ range: baseSpeed * 3, color: 0xff8000 },
		];
	}
}
