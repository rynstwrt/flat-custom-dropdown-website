function hideAll()
{
	document.querySelectorAll("section div").forEach(obj =>
	{
		obj.style.display = "none";
	});
}

document.querySelectorAll("section p").forEach(obj =>
{
	obj.addEventListener("mouseover", e =>
	{
		hideAll();
		const div = e.target.parentElement.children[1];
		div.style.display = "flex";
	});
});

document.querySelector("body").addEventListener("click", e =>
{
	if (e.target.tagName !== 'P')
	{
		hideAll();
	}
});
