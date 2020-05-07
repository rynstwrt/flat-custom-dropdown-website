const RESTING = " v";
const OPEN = " >"

// what's called when hover ends
function undo(after, div)
{
	div.style.display = "none";
	after.textContent = RESTING;
}

document.querySelectorAll("section p").forEach(obj =>
{

	const after = obj.children[0];
	after.textContent = RESTING;

	obj.addEventListener("mouseover", e1 =>
	{
		const section = e1.target.parentElement;
		const div = section.children[1];
		div.style.display = "flex";
		after.textContent = OPEN;

		section.addEventListener("mouseleave", e2 =>
		{
			undo(after, div);
		});

		div.addEventListener("mouseleave", e2 =>
		{
			undo(after, div);
		});
	});
});
