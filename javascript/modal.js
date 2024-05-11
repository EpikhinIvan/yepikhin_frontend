document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        var modal = document.getElementById('cookieModal');
        modal.style.display = 'block';

        var acceptBtn = document.getElementById('acceptBtn');
        var rejectBtn = document.getElementById('rejectBtn');

        acceptBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });

        rejectBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }, 3000);
});
