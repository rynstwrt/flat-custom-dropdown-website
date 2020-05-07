document.querySelectorAll("section p").forEach(obj =>
{
	obj.addEventListener("mouseover", e1 =>
	{
		const section = e1.target.parentElement;
		const div = section.children[1];
		div.style.display = "flex";

		section.addEventListener("mouseleave", e2 =>
		{
			div.style.display = "none";
		});

		div.addEventListener("mouseleave", e2 =>
		{
			div.style.display = "none";
		});
	});
});
