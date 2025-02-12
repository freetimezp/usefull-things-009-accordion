document.addEventListener("DOMContentLoaded", function () {
    var acc = document.querySelectorAll('.accordion');

    acc.forEach(el => {
        el.addEventListener('click', function () {
            acc.forEach(n => {
                n.classList.remove('active');
                var pl = n.nextElementSibling;
                pl.style.maxHeight = null;
            });

            el.classList.add('active');
            var panel = el.nextElementSibling;

            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + 'px';
            }
        });
    });
});




















