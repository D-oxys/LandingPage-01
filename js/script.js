var Drop = document.getElementById('dropdownNavbar');

function toggleMenu() {
    if (Drop.classList.contains('hidden')) {
        Drop.classList.remove('hidden');
    } else {
        Drop.classList.add('hidden');
    }
}