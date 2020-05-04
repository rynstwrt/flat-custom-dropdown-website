document.querySelectorAll("section p").forEach(obj =>
{
	obj.addEventListener("click", e =>
	{
		const div = e.target.parentElement.children[1];
		div.style.display = "flex";
	});
});


function hideAll()
{
	
}
